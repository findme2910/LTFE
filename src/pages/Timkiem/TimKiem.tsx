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
   const query = new URLSearchParams(location.search).get('query') || ''
   const rssItems: RSS[] = useRssFeedAll(RSS_FEED_URLS)

   useEffect(() => {
      if (rssItems.length > 0) {
         setLoading(false)
         if (query) {
            const results = rssItems.filter((item) => {
               const decodedTitle = he.decode(item.title).toLowerCase()
               return decodedTitle.includes(query.toLowerCase())
            })
            setFilteredResults(results)
         } else {
            setFilteredResults([])
         }
      }
   }, [query, rssItems])

   if (loading) return <LoadingSearch />

   return (
      <>
         <Helmet>
            <title>Kết quả tìm kiếm cho "{query}" | Báo Thanh Niên</title>
         </Helmet>
         <h1 className='text-2xl font-bold mb-4'>Kết quả tìm kiếm cho "{query}"</h1>
         {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
               <div key={item.link} className='flex mb-4 items-start'>
                  {item.image && (
                     <img src={item.image} alt={item.title} className='w-32 h-32 rounded object-cover mr-4' />
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
