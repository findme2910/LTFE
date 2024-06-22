import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function ViecLam() {
   return (
      <>
         <Helmet>
            <title>Việc Làm</title>
            <meta name="description" content="Việc làm"/>
         </Helmet>
         <ListArticle url='viec-lam' title={'Việc Làm'} />
      </>
   )
}
