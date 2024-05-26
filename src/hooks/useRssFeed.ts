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
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://thanhnien.vn/rss/' + url + '.rss')
            const text = await response.text()
            const parser = new DOMParser()
            const xml = parser.parseFromString(text, 'text/xml')
            const items = xml.querySelectorAll('item')
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
            setRssItems(rssItems)
         } catch (error) {
            console.error('Error fetching RSS feed:', error)
         }
      }

      fetchRSS()
   }, [url])

   return rssItems
}
