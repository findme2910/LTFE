import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function RaoVat() {
   return (
      <>
         {/*đang bị lỗi fetch nó không ra*/}
         <Helmet>
            <title>Rao vặt - Mua bán miễn phí, đăng tin quảng cáo toàn quốc</title>
            <meta
               name='description'
               content='Rao vặt - Mua bán miễn phí, đăng tin quảng cáo toàn quốc'
            />
         </Helmet>
         <ListArticle url='rao-vat' title={'Rao Vặt'} />
      </>
   )
}
