import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function DienDan() {
   return (
      <>
         <Helmet>
            <title>Diễn Đàn</title>
         </Helmet>
         <ListArticle url='dien-dan' title={'Diễn Đàn'} />
      </>
   )
}
