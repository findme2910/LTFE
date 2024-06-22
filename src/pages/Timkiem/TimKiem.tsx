import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RSS, useRssFeedAll } from '@/hooks/useRssFeed.ts'
import LoadingDetail from '@/components/LoadingDetail'
import he from 'he'
import DOMPurify from 'dompurify'

const RSS_FEED_URLS = [
   'thoi-su',
   'chao-ngay-moi',
   'the-gioi',
   'kinh-te',
   'doi-song',
   'suc-khoe',
   'gioi-tre',
   'tieu-dung-thong-minh',
   'giao-duc',
   'du-lich',
   'van-hoa',
   'giai-tri',
   'the-thao',
   'cong-nghe-game',
   'xe',
   'thoi-trang-tre',
   'ban-doc',
   'rao-vat',
   'video',
   'dien-dan',
   'podcast',
   'nhat-ky-tet-viet',
   'magazine',
   'cung-con-di-tiep-cuoc-doi',
   'ban-can-biet',
   'cai-chinh',
   'blog-phong-vien',
   'toi-viet',
   'viec-lam',
   'tno',
   'tin-24h',
   'thi-truong',
   'tin-nhanh-360'
]

const SearchResults: React.FC = () => {
   const [filteredResults, setFilteredResults] = useState<RSS[] | null>(null)
   const location = useLocation()
   const query = new URLSearchParams(location.search).get('query') || ''
   const rssItems: RSS[] = useRssFeedAll(RSS_FEED_URLS)

   useEffect(() => {
      if (query) {
         const results = rssItems.filter((item) => {
            const decodedTitle = he.decode(item.title).toLowerCase()
            return decodedTitle.includes(query.toLowerCase())
         })
         setFilteredResults(results)
      } else {
         setFilteredResults([])
      }
   }, [query, rssItems])

   if (!filteredResults) return <LoadingDetail />
   return (
      <>
         <h1 className='text-2xl font-bold mb-4'>Kết quả tìm kiếm cho "{query}"</h1>
         {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
               <div key={item.link} className='flex mb-4 items-start'>
                  {item.image && <img src={item.image} alt={item.title} className='w-32 h-32 object-cover mr-4' />}
                  <div className='flex-grow'>
                     <h2
                        dangerouslySetInnerHTML={{
                           __html: DOMPurify.sanitize(item.title) //DOMPurify chống tấn công XSS
                        }}
                        className='font-bold text-xl'
                     ></h2>
                     <p>{item.description}</p>
                     <Link to={`/detail/${item.link.split('/')[3]}`} className='text-primaryColor underline'>
                        Đọc thêm
                     </Link>
                  </div>
               </div>
            ))
         ) : (
            <LoadingDetail />
         )}
      </>
   )
}

export default SearchResults
