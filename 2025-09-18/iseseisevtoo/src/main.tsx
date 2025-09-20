import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import App from './App'
import About from './Components/About'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'

const router = createHashRouter([
  { path: '/', 
    element: <App />,
  children: [
    { path: '/about', element: <About /> },
    { path: '/gallery', element: <Gallery />},
    { path: '/contact', element: <Contact />},
  ]},

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)