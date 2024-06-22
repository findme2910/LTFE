import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function GioiTre() {
   return (
      <>
         <Helmet>
            <title>Giới Trẻ - Tin tức tuổi trẻ, thông tin nhịp sống hiện nay</title>
            <meta name="description" content="Thế giới trẻ - Thông tin thời trang của giới trẻ hiện nay. Tin tức tuổi trẻ, nhịp sống, lối sống của giới trẻ. Trang thông tin cho giới trẻ hiện nay"/>         </Helmet>
         <ListArticle url='gioi-tre' title={'Giới Trẻ'} />
      </>
   )
}
