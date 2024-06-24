import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function CaiChinh() {
   return (
      <>
         <Helmet>
            <title>Cải Chính</title>
         </Helmet>
         <ListArticle url='cai-chinh' title={'Cải Chính'} />
      </>
   )
}
