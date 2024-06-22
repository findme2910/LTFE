import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function TheThao() {
   return (
      <>
         <Helmet>
            <title>Tin Thể Thao - Lịch thi đấu, bảng xếp hạng mới nhất 24h</title>
            <meta
               name='description'
               content='Tin Thể Thao - Lịch thi đấu, bảng xếp hạng mới nhất 24h. Cập nhật tin tức thể thao mới nhất'
            />
         </Helmet>
         <ListArticle url='the-thao' title={'Thể Thao'} />
      </>
   )
}
