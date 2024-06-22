import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function TieuDung() {
   return (
      <>
         <Helmet>
            <title>Tiêu dùng - Hàng, dịch vụ, nhà phân phối, hành vi tiêu dùng</title>
            <meta name="description" content="Tiêu dùng - Các loại hàng hoá, dịch vụ tiêu dùng bao gồm. Nhà phân phối, hành vi người tiêu dùng. Công nghiệp sản xuất hàng tiêu dùng thông minh"/>
         </Helmet>
         <ListArticle url='tieu-dung-thong-minh' title={'Tiêu Dùng Thông Minh'} />
      </>
   )
}
