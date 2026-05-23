import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import OurDogs from './pages/OurDogs'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import PuppyProfile from './pages/PuppyProfile'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/our-dogs', element: <OurDogs /> },
  { path: '/puppies', element: <Shop /> },
  { path: '/puppies/:id', element: <PuppyProfile /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <NotFound /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
