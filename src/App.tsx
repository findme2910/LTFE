import Footer from '@/components/Footer'
import Header from '@/components/Header'
import About from '@/pages/About/About'
import Home from '@/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from '@/pages/Login/Login.tsx'

function App() {
   return (
      <>
         <Header />
         <main className='container py-5 min-h-screen mt-[119px]'>
            <Routes>
               <Route path={'/'} element={<Home />} />
               <Route path={'/about'} element={<About />} />
               <Route path={'/login'} element={<Login />} />
            </Routes>
         </main>
         <Footer/>
         <button
            onClick={() =>
               window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
               })
            }
            className='w-10 h-10 rounded-full flex items-center justify-center bg-primaryColor text-white fixed z-50 bottom-5 right-5'
         >
            <svg
               xmlns='http://www.w3.org/2000/svg'
               fill='none'
               viewBox='0 0 24 24'
               strokeWidth={1.5}
               stroke='currentColor'
               className='w-6 h-6'
            >
               <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 18.75 7.5-7.5 7.5 7.5' />
               <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 7.5-7.5 7.5 7.5' />
            </svg>
         </button>
      </>
   )
}

export default App
