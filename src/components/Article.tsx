import { useEffect, useState } from 'react'
import axios from 'axios'
import cheerio from 'cheerio'
import LoadingDetail from '@/components/LoadingDetail'

export const Article = ({ url }: { url: string }) => {
   const [contents, setContents] = useState<unknown>()

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(url)
            const html = response.data
            const $ = cheerio.load(html)

            // Lấy nội dung của các class cụ thể
            const detailSapoContent = $('.detail-sapo').html() || ''
            const detailCmainContent = $('.detail-cmain').html() || ''
            const detailRelatedContent = $('.detail__related').html() || ''

            // Kết hợp nội dung của các class này lại
            const combinedContent = `
          <div class="detail-sapo">${detailSapoContent}</div>
          <div class="detail-cmain">${detailCmainContent}</div>
          <div class="detail__related">${detailRelatedContent}</div>
        `

            // Cập nhật state với nội dung đã chọn
            setContents(combinedContent)
         } catch (error) {
            console.error('Error fetching data:', error)
         }
      }

      fetchData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [url])
   if (!contents) return <LoadingDetail />
   return (
      <div className='max-w-4xl mx-auto'>
         <div dangerouslySetInnerHTML={{ __html: contents }} />
      </div>
   )
}
