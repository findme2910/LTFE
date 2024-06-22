import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function Xe() {
   return (
      <>
         <Helmet>
            <title>Xe - Tin tức, giá mua bán xe máy, ô tô, xe điện, siêu xe 360</title>
            <meta name="description" content="Xe - tin xe máy, xe ô tô, xe 360, xe điện, siêu xe, giá xe, bảng giá xe. Đánh giá siêu xe đắt nhất thế giới, giá mua bán xe cũ mới nhất hôm nay"/>
         </Helmet>
         <ListArticle url='xe' title={'Xe'} />
      </>
   )
}
