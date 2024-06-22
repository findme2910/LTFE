import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function ThoiTrangTre() {
   return (
      <>
         <Helmet>
            <title>Thời trang trẻ - Bộ sưu tập, xu hướng, phong cách giới trẻ</title>
            <meta name="description" content="Báo thời trang trẻ, xu hướng thời trang mới của giới trẻ hiện đại. Phong cách thời trang đa dạng, phong phú, phù hợp phong cách giới trẻ hiện nay."/>
         </Helmet>
         <ListArticle url='thoi-trang-tre' title={'Thời Trang Trẻ'} />
      </>
   )
}
