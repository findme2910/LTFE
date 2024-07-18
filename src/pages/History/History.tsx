import Loading from '@/components/Loading'
import { useAddHistory } from '@/hooks/useAddHistory'
import { Helmet } from 'react-helmet'

import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
export default function History() {
   const { history, handleAddHistory } = useAddHistory()
   if (!history) return <Loading />
   return (
      <>
         <Helmet>
            <title>Lịch sử | Báo Thanh Niên</title>
         </Helmet>
         <h1 className='font-bold mb-5 text-3xl'>Lịch sử đọc báo</h1>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            {history.length > 0 &&
               history.map((item, index) => (
                  <article className='flex flex-col gap-y-3 relative' key={index}>
                     <button
                        onClick={() => {
                           Swal.fire({
                              title: 'Bạn muốn xoá bài báo này?',
                              text: 'Bạn sẽ không thể hoàn tác hành động này!',
                              icon: 'warning',
                              showCancelButton: true,
                              confirmButtonColor: '#3085d6',
                              cancelButtonColor: '#d33',
                              confirmButtonText: 'Xoá'
                           }).then(async (result) => {
                              if (result.isConfirmed) {
                                 handleAddHistory(item.title, item)
                                 Swal.fire({ text: 'Xoá thành công!', icon: 'success' })
                              }
                           })
                        }}
                        className='absolute top-2 z-10 right-2 bg-red-500 text-white w-10 h-10 flex items-center rounded-sm justify-center'
                     >
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           fill='none'
                           viewBox='0 0 24 24'
                           strokeWidth={1.5}
                           stroke='currentColor'
                           className='size-6'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                           />
                        </svg>
                     </button>
                     <Link
                        className='block aspect-video overflow-hidden rounded-sm'
                        to={`/detail/${item.link.split('/')[3]}`}
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
                        to={`/detail/${item.link.split('/')[3]}`}
                        className='hover:text-primaryColor transition-all line-clamp-2 h-14'
                        title={item.title}
                     >
                        <h2 dangerouslySetInnerHTML={{ __html: item.title }} className='font-bold text-xl'></h2>
                     </Link>
                     <span className='text-xs'>{item.pubDate}</span>
                     <p title={item.description} className='line-clamp-3'>
                        {item.description}
                     </p>
                  </article>
               ))}
         </div>
         {history.length === 0 && <p className='text-center font-bold mt-5 text-3xl'>Bạn chưa đọc bài báo nào</p>}
      </>
   )
}
