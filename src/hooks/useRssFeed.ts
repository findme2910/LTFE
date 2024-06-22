import { useEffect, useState } from 'react'
export interface RSS {
   title: string
   link: string
   description: string
   image: string
   pubDate: string
}
export const useRssFeed = (url: string) => {
   const [rssItems, setRssItems] = useState<RSS[]>([])

   useEffect(() => {
      const fetchRSS = async () => {
         try {
            //Lấy dữ liệu từ Rss feed
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://thanhnien.vn/rss/' + url + '.rss')
            const text = await response.text()
            // parse dữ liệu xml
            const parser = new DOMParser()
            const xml = parser.parseFromString(text, 'text/xml')
            const items = xml.querySelectorAll('item')
            // Chuyển đổi các mục xml thành đối tượng rss
            const rssItems: RSS[] = Array.from(items).map((item) => {
               const description = parser.parseFromString(
                  item.querySelector('description')?.textContent || '',
                  'text/html'
               )
               return {
                  title: item.querySelector('title')?.textContent || '',
                  link: item.querySelector('link')?.textContent || '',
                  description: description.querySelector('a')?.nextSibling?.textContent || '',
                  image: description.querySelector('img')?.getAttribute('src') || '',
                  pubDate: item.querySelector('pubDate')?.textContent || ''
               }
            })
            //lưu trữ dữ liệu vào state
            setRssItems(rssItems)
         } catch (error) {
            console.error('Error fetching RSS feed:', error)
         }
      }
      //gọi hàm fetchRSS
      fetchRSS()
   }, [url])

   return rssItems
}

export const useRssFeedAll = (urls: string[]) => {
   const [rssItems, setRssItems] = useState<RSS[]>([]);

   useEffect(() => {
      const fetchRSS = async (url: string) => {
         try {
            const response = await fetch(
               'https://cors-anywhere.herokuapp.com/https://thanhnien.vn/rss/' + url + '.rss'
            );
            const text = await response.text();
            const parser = new DOMParser();
            const xml = parser.parseFromString(text, 'text/xml');
            const items = xml.querySelectorAll('item');
            const rssItems: RSS[] = Array.from(items).map((item) => {
               const description = parser.parseFromString(
                  item.querySelector('description')?.textContent || '',
                  'text/html'
               );
               return {
                  title: item.querySelector('title')?.textContent || '',
                  link: item.querySelector('link')?.textContent || '',
                  description: description.querySelector('a')?.nextSibling?.textContent || '',
                  image: description.querySelector('img')?.getAttribute('src') || '',
                  pubDate: item.querySelector('pubDate')?.textContent || ''
               };
            });
            return rssItems;
         } catch (error) {
            console.error('Error fetching RSS feed:', error);
            return [];
         }
      };

      const fetchAllRSS = async () => {
         const allRssItems: RSS[] = [];
         for (const url of urls) {
            const rssItems = await fetchRSS(url);
            allRssItems.push(...rssItems);
         }
         setRssItems(allRssItems);
      };

      fetchAllRSS();
   }, [urls]);

   return rssItems;
};
// export class RSS1 {
//    constructor(
//       public title: string,
//       public link: string,
//       public description: string,
//       public image: string,
//       public pubDate: string
//    ) {}
// }

// export const SearchResults = async (url: string): Promise<RSS[]> => {
//    try {
//       const response = await axios.get(url)
//       const html = response.data

//       const $ = cheerio.load(html)
//       const items = $('.story')
//       const amountResultSearch = $('.search-wrapper')
//       const rssItems: RSS[] = items
//          .map((_, item) => {
//             return new RSS1(
//                $(amountResultSearch).find('.search-wrapper .result').text() || '',
//                $(item).find('.story__thumb a').attr('title') || '',
//                $(item).find('.story__thumb a').attr('href') || '',
//                $(item).find('.story__summary').text() || '',
//                $(item).find('a img').attr('data-src') || ''
//             )
//          })
//          .get()

//       return rssItems
//    } catch (error) {
//       console.error('Error fetching search results:', error)
//       return []
//    }
// }
