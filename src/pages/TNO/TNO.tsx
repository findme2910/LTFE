import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function TNO() {
   return (
      <>
         <Helmet>
            <title>TNO</title>
         </Helmet>
         <ListArticle url='tno' title={'TNO'} />
      </>
   )
}
