import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export default function DoiSong() {
   return (
      <>
         <Helmet>
            <title>Đời Sống - Những câu nói, quà tặng, bài học hay về cuộc sống</title>
            <meta
               name='description'
               content='Báo đời sống'
            />
         </Helmet>
         <ListArticle url='doi-song' title={'Đời Sống'} />
      </>
   )
}
