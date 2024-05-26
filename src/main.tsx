import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../app/globals.css'
import { ThemeProvider } from '@/components/theme-provider.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from '@/context/app.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
         <AppProvider>
            <App />
         </AppProvider>
      </ThemeProvider>
   </BrowserRouter>
)
