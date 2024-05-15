import React, { createContext } from 'react'

interface AppContextInterface {}

const initialAppContext: AppContextInterface = {}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

//khi không truyền value vào AppProvider thì cái initialAppContext của AppContext sẽ được sử dụng
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
   return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}
