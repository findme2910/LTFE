import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function ThiTruong() {
   return (
      <>
         <Helmet>
            <title> Thị trường tiêu dùng, bất động sản, chứng khoán | Báo Thanh Niên </title>
            <meta name="description" content="Thị trường tiêu dùng, bất động sản, tin tức kinh tế, kinh doanh, thông tin nhu cầu của người tiêu dùng trong nhiều lĩnh vực. Thông tin thị trường tiêu thụ xe ô tô, xe máy, tin nóng những thay đổi trên thị trường vàng, thị trường chứng khoán được cập nhật mới và nhanh nhất 24h trong ngày. "/>
         </Helmet>
         <ListArticle url='thi-truong' title={'Tin Thị Trường'} />
      </>
   )
}
