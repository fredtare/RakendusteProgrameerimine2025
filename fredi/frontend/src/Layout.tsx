import { Outlet, Link } from 'react-router-dom'
import { AppBar, Toolbar, Button } from '@mui/material'

export default function Layout() {
  return (
    <>


      <main style={{ padding: 20 }}>
        <Outlet />
      </main>
    </>
  )
}