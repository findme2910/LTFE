import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function KinhTe() {
   return (
      <>
         <Helmet>
            <title>Tài chính, kinh doanh - Marketing, quản trị, luật kinh tế</title>
            <meta name="description" content="Tài chính, kinh doanh - Quản trị kinh doanh, tài chính doanh nghiệp Việt Nam, quốc tế. Báo kinh tế, marketing online, luật kinh tế, bản tin tài chính"/>
         </Helmet>
         <ListArticle url='kinh-te' title={'Kinh Tế'} />
      </>
   )
}
