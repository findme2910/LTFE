import { Article } from '@/components/Article'
import { proxyUrl } from '@/hooks/useRssFeed'
import { useParams } from 'react-router-dom'

export default function Detail() {
   const { slug } = useParams()

   return (
      <>
         <Article url={proxyUrl + `https://thanhnien.vn/` + encodeURIComponent(slug as string)} />
      </>
   )
}
