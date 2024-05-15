import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../app/globals.css'
import { ThemeProvider } from '@/components/theme-provider.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppProvider } from '@/context/app.context.tsx'
const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
         retry: 0
      }
   }
})
ReactDOM.createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
         <QueryClientProvider client={queryClient}>
            <AppProvider>
               <App />
            </AppProvider>
         </QueryClientProvider>
      </ThemeProvider>
   </BrowserRouter>
)
