import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RSS, useRssFeedAll } from '@/hooks/useRssFeed.ts'
import he from 'he'
import DOMPurify from 'dompurify'
import LoadingSearch from '@/components/LoadingSearch'
import { Helmet } from 'react-helmet'

const RSS_FEED_URLS = ['thoi-su', 'chao-ngay-moi', 'the-gioi', 'kinh-te', 'doi-song', 'suc-khoe', 'gioi-tre']

const SearchResults: React.FC = () => {
   const [filteredResults, setFilteredResults] = useState<RSS[]>([])
   const [loading, setLoading] = useState<boolean>(true)
   const location = useLocation()
   const [sortOption, setSortOption] = useState<string>('mới nhất')
   const query = new URLSearchParams(location.search).get('query') || ''
   const rssItems: RSS[] = useRssFeedAll(RSS_FEED_URLS)

   useEffect(() => {
      if (rssItems.length > 0) {
         setLoading(false)
         let results = rssItems

         if (query) {
            results = rssItems.filter((item) => {
               const decodedTitle = he.decode(item.title).toLowerCase()
               return decodedTitle.includes(query.toLowerCase())
            })
         }

         if (sortOption === 'cũ nhất') {
            results = results.sort((a, b) => new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime())
         } else if (sortOption === 'mới nhất') {
            results = results.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
         }

         setFilteredResults(results)
      }
   }, [query, rssItems, sortOption])

   if (loading) return <LoadingSearch />

   return (
      <>
         <Helmet>
            <title>Kết quả tìm kiếm cho "{query}" | Báo Thanh Niên</title>
         </Helmet>
         <h1 className='text-2xl font-bold mb-4'>Kết quả tìm kiếm cho "{query}"</h1>
         <p className='mb-4 text-xl font-semibold'>Tìm thấy {filteredResults.length} bài báo</p>
         <div className='flex mb-4 items-center'>
            <label className='mr-2 font-semibold text-lg'>Sắp xếp theo</label>
            <select
               value={sortOption}
               onChange={(e) => setSortOption(e.target.value)}
               className='border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500 bg-transparent '
            >
               <option className="bg-primary-foreground" value='mới nhất'>Mới nhất</option>
               <option  className="bg-primary-foreground" value='cũ nhất'>Cũ nhất</option>
            </select>
         </div>

         {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
               <div key={item.link} className='flex mb-4 items-start'>
                  {item.image && (
                     <img
                        loading='lazy'
                        src={item.image}
                        alt={item.title}
                        className='w-32 h-32 rounded object-cover mr-4'
                     />
                  )}
                  <div className='flex-grow'>
                     <h2
                        title={item.title}
                        dangerouslySetInnerHTML={{
                           __html: DOMPurify.sanitize(item.title) // DOMPurify chống tấn công XSS
                        }}
                        className='font-bold text-xl line-clamp-1'
                     ></h2>
                     <p title={item.description} className='line-clamp-3'>
                        {item.description}
                     </p>
                     <Link to={`/detail/${item.link.split('/')[3]}`} className='text-primaryColor underline'>
                        Đọc thêm
                     </Link>
                  </div>
               </div>
            ))
         ) : (
            <p>Không tìm thấy bài báo nào</p>
         )}
      </>
   )
}

export default SearchResults
