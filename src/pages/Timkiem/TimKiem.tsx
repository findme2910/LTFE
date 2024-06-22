import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RSS, useRssFeedAll } from '@/hooks/useRssFeed.ts'
import LoadingDetail from '@/components/LoadingDetail'

const RSS_FEED_URLS = ['kinh-te', 'doi-song', 'suc-khoe', 'giao-duc', 'thoi-su', 'the-gioi', 'gioi-tre']

const SearchResults: React.FC = () => {
   const [filteredResults, setFilteredResults] = useState<RSS[] | null>(null)
   const location = useLocation()
   const query = new URLSearchParams(location.search).get('query') || ''
   const rssItems: RSS[] = useRssFeedAll(RSS_FEED_URLS)

   useEffect(() => {
      if (query) {
         const results = rssItems.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
         setFilteredResults(results)
      } else {
         setFilteredResults([])
      }
   }, [query, rssItems])
   console.log(filteredResults)

   if (!filteredResults) return <LoadingDetail />
   return (
      <div className='container mx-auto p-4'>
         <h1 className='text-2xl font-bold mb-4'>Kết quả tìm kiếm cho "{query}"</h1>
         {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
               <div key={item.link} className='flex mb-4 items-start'>
                  {item.image && <img src={item.image} alt={item.title} className='w-32 h-32 object-cover mr-4' />}
                  <div className='flex-grow'>
                     <h2 dangerouslySetInnerHTML={{ __html: item.title }} className='font-bold text-xl'></h2>
                     <p>{item.description}</p>
                     <Link to={item.link} className='text-primaryColor underline'>
                        Đọc thêm
                     </Link>
                  </div>
               </div>
            ))
         ) : (
            <p>Không tìm thấy kết quả nào.</p>
         )}
      </div>
   )
}

export default SearchResults
