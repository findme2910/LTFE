import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function TinNhanh360() {
   return (
      <>
         <Helmet>
            <title> Tin tức 360, thông tin nhanh trong ngày, tin nóng | Báo Thanh Niên </title>
            <meta name="description" content="Tin tức 360, tin thể thao, bóng đá Việt Nam, bóng đá quốc tế, bình luận thể thao từ các chuyên giá hàng đầu. Thông tin văn hóa, văn nghệ, truyền hình, tin nóng trong giới showbiz Việt, chuyện hậu trường phía sau màn ảnh, chuyện bên lề làng giải trí được cập nhật mới và nhanh 24h trong ngày. "/>
         </Helmet>
         <ListArticle url='tin-nhanh-360' title={'Tin nhanh 360'} />
      </>
   )
}
