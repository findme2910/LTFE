import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function ThoiSu() {
   return (
      <>
         <Helmet>
            <title>Thời Sự - Tin tức hôm nay, Việt Nam 24h mới nhất trong ngày</title>
            <meta
               name='description'
               content='Thời sự hôm nay - Tin tức Việt Nam mới nhất 24 giờ trong ngày. Thời sự biển Đông, bản tin thời sự nóng online trong nước cập nhật mới nhất 24h'
            />
         </Helmet>
         <ListArticle url='thoi-su' title={'Thời sự'} />
      </>
   )
}
