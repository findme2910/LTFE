import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function Tin24h() {
   return (
      <>
         <Helmet>
            <title> Đọc báo 24h, tin tức thời sự, thông tin nhanh 24h | Báo Thanh Niên </title>
            <meta name="description" content="Đọc báo 24h, tin tức thời sự nóng, thông tin kinh tế, pháp luật, xã hội, đời sống, chính trị, gia đình, thế giới, giáo dục. Video clip, hình ảnh mới nhất về những sự kiện nóng trên mạng xã hội, cuộc sống dân sinh hằng ngày, phóng sự độc quyền được cập nhật mới và nhanh nhất 24h trong ngày. "/>
         </Helmet>
         <ListArticle url='tin-24h' title={'Tin 24h'} />
      </>
   )
}
