import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function TheGioi() {
   return (
      <>
         <Helmet>
            <title>Tin thế giới - Tin tức, thời sự quốc tế, an ninh, quân sự</title>
            <meta name="description" content="Tin thế giới - Tin tức an ninh, quân sự thế giới 24h trong ngày. Thời sự quốc tế, tin nhanh thế giới mới nhất. Giá vàng, giá dầu, giá đường thế giới"/>
         </Helmet>
         <ListArticle url='the-gioi' title={'Thế Giới'} />
      </>
   )
}
