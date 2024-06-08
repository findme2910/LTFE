import useLocalStorage from '@/hooks/useLocalStorage'
import { RSS } from '@/hooks/useRssFeed'
import React, { createContext } from 'react'

interface AppContextInterface {
   history: RSS[]
   setHistory: (value: RSS[] | ((val: RSS[]) => RSS[])) => void
}

const initialAppContext: AppContextInterface = {
   history: [],
   setHistory: () => {}
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

//khi không truyền value vào AppProvider thì cái initialAppContext của AppContext sẽ được sử dụng
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
   const [history, setHistory] = useLocalStorage<RSS[]>('historyArticle', [])
   return (
      <AppContext.Provider
         value={{
            history,
            setHistory
         }}
      >
         {children}
      </AppContext.Provider>
   )
}
