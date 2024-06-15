import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function Home() {
   return (
      <>
         <Helmet>
            <title>Tin tức 24h mới nhất, tin nhanh, tin nóng hàng ngày | Báo Thanh Niên</title>
            <meta
               name='description'
               content='Tin tức 24h, đọc báo TN cập nhật tin nóng online Việt Nam và thế giới mới nhất trong ngày, tin nhanh thời sự, chính trị, xã hội hôm nay, tin tức, top news VN'
            />
         </Helmet>
         <ListArticle url='home' title={'Trang chủ'} />
      </>
   )
}
