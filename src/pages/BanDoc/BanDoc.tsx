import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function BanDoc() {
   return (
      <>
         <Helmet>
            <title>Bạn đọc - Kết nối, ý kiến, phản ánh, phản hồi bạn đọc, thư bạn đọc - Báo Thanh Niên </title>
            <meta name="description" content="Chuyên mục kết nối bạn đọc. Nơi phản hồi ý kiến bạn đọc, kết nối và phản hồi ý kiến bạn đọc của báo Thanh Niên. Trả lời thư phản ánh của bạn đọc cả nước."/>
         </Helmet>
         <ListArticle url='ban-doc' title={'Bạn Đọc'} />
      </>
   )
}
