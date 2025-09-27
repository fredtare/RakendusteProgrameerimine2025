import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import App from './App'
import AppsPage from './components/CatsPage'
import Admin from './components/Admin'
import Weather from './components/Weather'
import Tasks from './components/Tasks'


const router = createHashRouter([
  { path: '/', 
    element: <App />,
  children: [
    { path: '/apps', element: <AppsPage /> },
    { path: '/admin', element: <Admin /> },
    { path: '/weather', element: <Weather /> },
    { path: '/tasks', element: <Tasks /> }
  ]},

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)