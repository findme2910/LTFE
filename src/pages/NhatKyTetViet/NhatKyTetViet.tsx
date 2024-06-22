import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function NhatKyTetViet() {
   return (
      <>
         <Helmet>
            <title>Nhật Ký Tết Việt</title>
         </Helmet>
         <ListArticle url='nhat-ky-tet-viet' title={'Nhật Ký Tết Việt'} />
      </>
   )
}
