import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function DuLich() {
   return (
      <>
         <Helmet>
            <title>Du Lịch - Địa điểm, dịch vụ lữ hành, bản đồ tour Việt Nam</title>
            <meta
               name='description'
               content='Du lịch'
            />
         </Helmet>
         <ListArticle url='du-lich' title={'Du Lịch'} />
      </>
   )
}
