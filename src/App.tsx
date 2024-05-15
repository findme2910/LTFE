import { ModeToggle } from '@/components/mode-toggle'
import About from '@/pages/About/About'
import Home from '@/pages/Home/Home'
import { NavLink, Route, Routes } from 'react-router-dom'

function App() {
   return (
      <>
         <header className='py-2 font-medium bg-primary-foreground'>
            <div className='container flex items-center gap-x-5'>
               <img
                  src='https://media-cdn-v2.laodong.vn/laodong/1.0.3.32/images/logo/ldo_red.png'
                  alt='logo'
                  className='w-[225px] h-14 object-cover'
               />
               <ModeToggle />
               <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
                  Home
               </NavLink>
               <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
                  About
               </NavLink>
            </div>
         </header>
         <main className='container py-5'>
            <Routes>
               <Route path={'/'} element={<Home />} />
               <Route path={'/about'} element={<About />} />
            </Routes>
         </main>
      </>
   )
}

export default App
