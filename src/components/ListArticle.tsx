import React, { useEffect, useState } from 'react'
import { RSS, useRssFeed } from '@/hooks/useRssFeed'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import Tippy from '@tippyjs/react'
import 'tippy.js/animations/perspective-extreme.css'
import Loading from '@/components/Loading'
import { useAddHistory } from '@/hooks/useAddHistory.ts'
import DOMPurify from 'dompurify'
import convertTimeFormat from '@/utils/utils'

const itemsPerPage = 16
export const ListArticle = ({ url, title }: { url: string; title: string }) => {
   const { handleAddHistory } = useAddHistory()
   const rssData: RSS[] = useRssFeed(url)
   const [currentItems, setCurrentItems] = useState<RSS[]>([])
   const [currentPage, setCurrentPage] = useState<number>(1)
   const [openPaginate, setOpenPaginate] = useState<boolean>(false)
   const [value, setValue] = useState<number>(1)
   const [sortOption, setSortOption] = useState<string>('mới nhất')
   const navigate = useNavigate()
   const { pathname } = useLocation()

   const pageCount = Math.ceil(rssData.length / itemsPerPage) - 1
   useEffect(() => {
      const offset = currentPage * itemsPerPage
      setCurrentItems(rssData.slice(offset, offset + itemsPerPage))
   }, [currentPage, rssData])

   const handlePageClick = ({ selected }: { selected: number }) => {
      setCurrentPage(selected + 1)
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      })
      navigate(`${pathname}?page=${selected + 1}`)
   }
   //sort by time
   useEffect(() => {
      const offset = currentPage * itemsPerPage
      let sortedItems = [...rssData]

      if (sortOption === 'cũ nhất') {
         sortedItems = sortedItems.sort((a, b) => new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime())
      } else if (sortOption === 'mới nhất') {
         sortedItems = sortedItems.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
      }

      setCurrentItems(sortedItems.slice(offset, offset + itemsPerPage))
   }, [currentPage, rssData, sortOption])

   useEffect(() => {
      if (currentPage === 1) {
         // Lần đầu truy cập, redirect về trang 1
         navigate(`${pathname}?page=1`)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [currentPage])

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(e.target.value)
      if (newValue >= 1 && newValue <= pageCount) {
         setValue(newValue)
      }
   }

   if (!currentItems || currentItems.length === 0) return <Loading />
   return (
      <>
         <h1 className='text-3xl font-bold pb-2 mb-6 border-b-2 border-b-primaryColor flex items-center justify-between'>
            {title}
            <span className='text-lg translate-y-1'>Trang {currentPage}</span>
         </h1>
         <div className='flex items-center mb-4'>
            <label className='mr-2 font-semibold text-lg'>Sắp xếp theo</label>
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className='border rounded px-2 py-1 bg-transparent'>
               <option className="bg-primary-foreground" value='mới nhất'>Mới nhất</option>
               <option className="bg-primary-foreground" value='cũ nhất'>Cũ nhất</option>
            </select>
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            {currentItems.length > 0 &&
               currentItems.map((item, index) => (
                  <article className='flex flex-col gap-y-3' key={index}>
                     <Link
                        onClick={() => handleAddHistory(item.title, item)}
                        className='block aspect-video overflow-hidden rounded-sm'
                        to={{
                           pathname: `/detail/${item.link.split('/')[3]}`
                        }}
                        title={item.title}
                     >
                        <img
                           className='w-full h-full object-cover hover:scale-110 transition-all'
                           src={item.image}
                           loading='lazy'
                           alt={item.title}
                        />
                     </Link>
                     <Link
                        onClick={() => handleAddHistory(item.title, item)}
                        to={`/detail/${item.link.split('/')[3]}`}
                        className='hover:text-primaryColor transition-all line-clamp-2 h-14'
                        title={item.title}
                     >
                        <h2
                           dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(item.title) //DOMPurify chống tấn công XSS(mã đọc)
                           }}
                           className='font-bold text-xl'
                        ></h2>
                     </Link>
                     <span className='text-sm'>{convertTimeFormat(item.pubDate)}</span>
                     <p title={item.description} className='line-clamp-3'>
                        {item.description}
                     </p>
                  </article>
               ))}
         </div>
         <div className='mt-10 flex items-center justify-center gap-x-4'>
            <ReactPaginate
               pageCount={pageCount} // Tổng số trang
               marginPagesDisplayed={1} // Số lượng trang được hiển thị trước và sau trang hiện tại
               pageRangeDisplayed={1} // Số lượng trang được hiển thị trong phân đoạn paginate
               breakLabel='...'
               nextLabel={
                  currentPage < pageCount && (
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={3}
                        stroke='currentColor'
                        className='w-6 h-6'
                     >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                     </svg>
                  )
               }
               onPageChange={handlePageClick}
               forcePage={currentPage - 1} // Đặt trang hiện tại là trang active
               previousLabel={
                  currentPage > 1 && (
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={3}
                        stroke='currentColor'
                        className='w-6 h-6'
                     >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                     </svg>
                  )
               }
               renderOnZeroPageCount={null}
               containerClassName={'flex items-center gap-x-7 justify-center text-[22px] font-bold'} // Class cho container của paginate
               activeClassName={'text-primaryColor'} // Class cho trang hiện tại
            />
            <Tippy
               animation={'perspective-extreme'}
               visible={openPaginate}
               onClickOutside={() => setOpenPaginate(false)}
               content={
                  <form
                     onSubmit={(e) => {
                        e.preventDefault()
                        setCurrentPage(value)
                        handlePageClick({ selected: value - 1 })
                        setOpenPaginate(false)
                     }}
                     className='bg-primaryColor text-white shadow rounded p-2 flex items-center gap-x-2'
                  >
                     <input
                        type='number'
                        value={value}
                        min={1}
                        max={pageCount}
                        onChange={handleChange}
                        className='outline-none p-1 bg-transparent border border-white'
                     />
                     <button className='border border-white text-white p-1' type='submit'>
                        Go
                     </button>
                  </form>
               }
               interactive={true}
               arrow={false}
               offset={[0, 6]}
               placement={'top'}
            >
               <button onClick={() => setOpenPaginate((prev) => !prev)}>
                  <svg
                     stroke='currentColor'
                     fill='currentColor'
                     strokeWidth={0}
                     viewBox='0 0 24 24'
                     height='22px'
                     width='22px'
                     xmlns='http://www.w3.org/2000/svg'
                  >
                     <path fill='none' d='M0 0h24v24H0z' />
                     <path d='M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z' />
                  </svg>
               </button>
            </Tippy>
         </div>
      </>
   )
}
