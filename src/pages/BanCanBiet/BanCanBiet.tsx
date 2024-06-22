import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function BanCanBiet() {
   return (
      <>
         <Helmet>
            <title>Bạn cần biết - Thông tin sản phẩm, dịch vụ, kinh doanh - Báo Thanh Niên </title>
            <meta name="description" content="Bạn cần biết, thông tin dịch vụ, sản phẩm, giải thưởng, thông cáo báo chí, giải trí, tuyển dụng việc làm được cập nhật mới và nhanh nhất 24h hôm nay"/>
         </Helmet>
         <ListArticle url='ban-can-biet' title={'Bạn Cần Biết'} />
      </>
   )
}
