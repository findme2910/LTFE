import Footer from '@/components/Footer'
import Header from '@/components/Header'
import About from '@/pages/About/About'
import Home from '@/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
   return (
      <>
         <Header />
         <main className='container py-5 min-h-screen mt-[119px]'>
            <Routes>
               <Route path={'/'} element={<Home />} />
               <Route path={'/about'} element={<About />} />
            </Routes>
         </main>
         <Footer />
      </>
   )
}

export default App
