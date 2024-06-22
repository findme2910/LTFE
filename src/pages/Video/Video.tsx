import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function Video() {
   return (
      <>
         <Helmet>
            <title>Video - Clip tin tức nhanh, nóng 24h mới nhất hôm nay</title>
            <meta name="description" content="Video tin tức mới nhất được cập nhật nhanh trong ngày. Clip tin nóng, tin mới nhất hàng ngày. Visual tin nhanh 24h cập nhật mới nhất hôm nay"/>
         </Helmet>
         <ListArticle url='video' title={'Video'} />
      </>
   )
}
