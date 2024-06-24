import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function CungCon() {
   return (
      <>
         <Helmet>
            <title>Cùng Con Đi Tiếp Cuộc Đời</title>
         </Helmet>
         <ListArticle url='cung-con-di-tiep-cuoc-doi' title={'Cùng Con Đi Tiếp Cuộc Đời'} />
      </>
   )
}
