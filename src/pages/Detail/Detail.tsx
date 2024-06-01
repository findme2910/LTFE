import { Article } from '@/components/Article'
import { useParams } from 'react-router-dom'

export default function Detail() {
   const { slug } = useParams()

   return (
      <div>
         <Article url={`https://cors-anywhere.herokuapp.com/https://thanhnien.vn/${slug}`} />
      </div>
   )
}
