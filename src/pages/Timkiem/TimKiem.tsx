import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RSS, useRssFeedAll } from '@/hooks/useRssFeed.ts';

const RSS_FEED_URLS = [
   'kinh-te',
   'doi-song',
   'suc-khoe',
   'giao-duc',
   'thoi-su',
   'the-gioi',
   'gioi-tre'
];

const SearchResults: React.FC = () => {
   const [filteredResults, setFilteredResults] = useState<RSS[]>([]);
   const location = useLocation();
   const query = new URLSearchParams(location.search).get('query') || '';
   const rssItems: RSS[] = useRssFeedAll(RSS_FEED_URLS);

   useEffect(() => {
      if (query) {
         const results = rssItems.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
         );
         setFilteredResults(results);
      } else {
         setFilteredResults([]);
      }
   }, [query, rssItems]);

   return (
      <div className='container mx-auto p-4'>
         <h2 className='text-2xl font-bold mb-4'>Kết quả tìm kiếm cho "{query}"</h2>
         {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
               <div key={item.link} className='flex mb-4 items-start'>
                  {item.image && (
                     <img src={item.image} alt={item.title} className='w-32 h-32 object-cover mr-4'/>
                  )}
                  <div className="flex-grow">
                     <h3 className='text-xl font-semibold'>{item.title}</h3>
                     <p>{item.description}</p>
                     <a href={item.link} className='text-blue-500 underline'>Đọc thêm</a>
                  </div>
               </div>
            ))
         ) : (
            <p>Không tìm thấy kết quả nào.</p>
         )}
      </div>
   );
};

export default SearchResults;
