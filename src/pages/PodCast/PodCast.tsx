import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function PodCast() {
   return (
      <>
         <Helmet>
            <title>PodCast</title>
            <meta
               name='description'
               content='PodCast, chia sẻ tâm sự cuộc sống'
            />
         </Helmet>
         <ListArticle url='podcast' title={'PodCast'} />
      </>
   )
}
