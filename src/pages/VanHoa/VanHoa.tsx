import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function VanHoa() {
   return (
      <>
         <Helmet>
            <title>Văn Hoá Nghệ Thuật - Di sản phi vật thể, phong cách ngôn ngữ</title>
            <meta name="description" content="Văn Hoá Nghệ Thuật - Di sản văn hoá phi vật thể Việt Nam, thế giới. Phong cách sống, ngôn ngữ nghệ thuật, văn hoá ứng xử, luật di sản văn hoá"/>
         </Helmet>
         <ListArticle url='van-hoa' title={'Văn Hóa'} />
      </>
   )
}
