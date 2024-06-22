import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function GiaoDuc() {
   return (
      <>
         <Helmet>
            <title>Giáo Dục - Tin tức chương trình, công nghệ, đào tạo mới nhất</title>
            <meta
               name='description'
               content='Giáo dục'
            />
         </Helmet>
         <ListArticle url='giao-duc' title={'Giáo Dục'} />
      </>
   )
}
