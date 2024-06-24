import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function SucKhoe() {
   return (
      <>
         <Helmet>
            <title>Sức Khỏe - Số tay dinh dưỡng, giữ gìn đời sống gia đình</title>
            <meta
               name='description'
               content='Sức Khỏe - Số tay dinh dưỡng, giữ gìn đời sống gia đình. Sức khỏe đời sống'
            />
         </Helmet>
         <ListArticle url='suc-khoe' title={'Sức Khỏe'} />
      </>
   )
}
