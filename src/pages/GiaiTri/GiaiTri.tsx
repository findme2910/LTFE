import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function GiaiTri() {
   return (
      <>
         <Helmet>
            <title>Giải trí - Tin tức, hậu trường showbiz, sao việt mới nhất</title>
            <meta name="description" content="Tin giải trí, kênh hậu trường showbiz Việt Nam, thế giới. Báo tin tức, scandal làng giải trí việt mới nhất. Thông tin sự kiện giải trí cập nhật 24h"/>
         </Helmet>
         <ListArticle url='giai-tri' title={'Giải Trí'} />
      </>
   )
}
