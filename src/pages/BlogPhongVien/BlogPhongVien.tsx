import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function BlogPhongVien() {
   return (
      <>
         <Helmet>
            <title>Blog Phóng Viên</title>
         </Helmet>
         <ListArticle url='blog-phong-vien' title={'Blog Phóng Viên'} />
      </>
   )
}
