import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function CongNgheGame() {
   return (
      <>
         <Helmet>
            <title>Tin công nghệ - Game 24h online, offline, mobile hay</title>
            <meta
               name='description'
               content='Tin công nghệ - Game 24h, tin tức game online, offline hay, game mobile mới. Tin tức công nghệ mới nhất, công nghệ blockchain, cách tải game
' />
         </Helmet>
         <ListArticle url='cong-nghe-game' title={'Công Nghệ - Game'} />
      </>
   )
}
