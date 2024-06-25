import { AppContext } from '@/context/app.context'
import { RSS } from '@/hooks/useRssFeed'
import { useContext } from 'react'

export const useAddHistory = () => {
   const { history, setHistory } = useContext(AppContext)
   const handleAddHistory = (title: string, article: RSS) => {
      if (history.some((article) => article.title === title)) {
         setHistory((prev) => prev.filter((article) => article.title !== title))
      } else {
         setHistory((prev) => [...prev, article])
      }
   }
   return { history, handleAddHistory }
}
