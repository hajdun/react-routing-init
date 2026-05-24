import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import './index.css'
import Home from './pages/Home'
import OurDogs from './pages/OurDogs'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import PuppyProfile from './pages/PuppyProfile'
import NotFound from './pages/NotFound'



function RootLayout() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100dvh',
    }}>
      <Header />
      <main style={{ flex: 1 }}>   {/* ← this grows to fill all available space */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,   // ← wraps everything
    children: [
      { index: true, element: <Home /> },
      { path: 'our-dogs', element: <OurDogs /> },
      { path: 'puppies', element: <Shop /> },
      { path: 'puppies/:id', element: <PuppyProfile /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)