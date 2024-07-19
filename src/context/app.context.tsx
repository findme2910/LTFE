import useLocalStorage from '@/hooks/useLocalStorage'
import { RSS } from '@/hooks/useRssFeed'
import React, { createContext, useState } from 'react'

interface AppContextInterface {
   history: RSS[]
   setHistory: (value: RSS[] | ((val: RSS[]) => RSS[])) => void
   openEffect: boolean
   setOpenEffect: React.Dispatch<React.SetStateAction<boolean>>
}

const initialAppContext: AppContextInterface = {
   history: [],
   setHistory: () => {},
   openEffect: true,
   setOpenEffect: () => {}
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

//khi không truyền value vào AppProvider thì cái initialAppContext của AppContext sẽ được sử dụng
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
   const [history, setHistory] = useLocalStorage<RSS[]>('historyArticle', initialAppContext.history)
   const [openEffect, setOpenEffect] = useState<boolean>(initialAppContext.openEffect)
   return (
      <AppContext.Provider
         value={{
            history,
            setHistory,
            openEffect,
            setOpenEffect
         }}
      >
         {children}
      </AppContext.Provider>
   )
}
