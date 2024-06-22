import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function Magazine() {
   return (
      <>
         <Helmet>
            <title>Magazine - Tổng hợp những bài viết dạng Magazine</title>
            <meta name="description" content="Tổng hợp các bài viết dạng Magazine nhiều chủ đề đa dạng và phong phú. Hình ảnh sống động, chân thật và sáng tạo. Tổng hợp các thể loại Infographic"/>
         </Helmet>
         <ListArticle url='magazine' title={'Magazine'} />
      </>
   )
}
