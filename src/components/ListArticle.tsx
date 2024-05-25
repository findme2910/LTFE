import { RSS, useRssFeed } from '@/hooks/useRssFeed'
import { Link } from 'react-router-dom'

export const ListArticle = () => {
   const rssData: RSS[] = useRssFeed('viec-lam.rss')

   return (
      <div className='grid grid-cols-2 gap-5'>
         {rssData.length > 0 &&
            rssData.map((item, index) => (
               <article className='flex flex-col gap-y-3' key={index}>
                  <Link className='block aspect-video' to={item.link} title={item.title}>
                     <img className='w-full h-full object-cover' src={item.image} alt={item.title} />
                  </Link>
                  <Link to={item.link} className='hover:text-primaryColor transition-all' title={item.title}>
                     <h2 dangerouslySetInnerHTML={{ __html: item.title }} className='font-bold text-lg'></h2>
                  </Link>
                  <span className='text-xs'>{item.pubDate}</span>
                  <p>{item.description}</p>
               </article>
            ))}
      </div>
   )
}
