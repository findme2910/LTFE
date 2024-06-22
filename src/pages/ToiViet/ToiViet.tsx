import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function ToiViet() {
   return (
      <>
         <Helmet>
            <title>Tôi Viết</title>
         </Helmet>
         <ListArticle url='toi-viet' title={'Tôi Viết'} />
      </>
   )
}
