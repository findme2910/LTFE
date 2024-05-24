import { useEffect, useState } from 'react'
import axios from 'axios'
import { parseStringPromise } from 'xml2js'

const RSSFeed = () => {
   const [feedItems, setFeedItems] = useState([])
   useEffect(() => {
      const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
      const RSS_URL = `${CORS_PROXY}https://thanhnien.vn/rss/tin-nhanh-360.rss`

      const fetchRSS = async () => {
         try {
            const response = await axios.get(RSS_URL)

            // const result = await parseStringPromise(response.data)
            // console.log(response.data)
            setFeedItems(response.data)
            // const items = result.rss.channel[0].item
            // setFeedItems(items)
         } catch (error) {
            // console.error('Error fetching RSS feed:', error)
         }
      }

      fetchRSS()
   }, [])

   console.log(feedItems)

   return (
      <div>
         <h1>Tin nhanh 360</h1>
         <ul>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {/* {feedItems.map((item: any, index) => (
               <li key={index}>
                  <a href={item.link[0]} target='_blank' rel='noopener noreferrer'>
                     <h2 dangerouslySetInnerHTML={{ __html: item.title[0] }} />
                  </a>
                  <p dangerouslySetInnerHTML={{ __html: item.description[0] }} />
                  <p>
                     <small>{item.pubDate[0]}</small>
                  </p>
               </li>
            ))} */}
            <p dangerouslySetInnerHTML={{ __html: feedItems }} />
         </ul>
      </div>
   )
}

export default RSSFeed

// import { useEffect, useState } from 'react'
// import Parser from 'rss-parser'

// const RSSFeed = () => {
//    const [feed, setFeed] = useState([])
//    const [loading, setLoading] = useState(true)

//    useEffect(() => {
//       const fetchFeed = async () => {
//          const parser = new Parser()
//          try {
//             const feed = await parser.parseURL('https://thanhnien.vn/rss/tin-nhanh-360.rss')
//             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//             //@ts-ignore
//             setFeed(feed.items)
//             setLoading(false)
//          } catch (error) {
//             console.error('Error fetching RSS feed:', error)
//             setLoading(false)
//          }
//       }

//       fetchFeed()
//    }, [])

//    if (loading) {
//       return <p>Loading...</p>
//    }

//    return (
//       <div>
//          <h1>RSS Feed</h1>
//          <ul>
//             {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
//             {feed.map((item: any, index) => (
//                <li key={index}>
//                   <a href={item.link} target='_blank' rel='noopener noreferrer'>
//                      {item.title}
//                   </a>
//                   <p>{item.contentSnippet}</p>
//                </li>
//             ))}
//          </ul>
//       </div>
//    )
// }

// export default RSSFeed
