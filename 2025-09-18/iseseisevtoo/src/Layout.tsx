import { Outlet, Link } from 'react-router-dom'
import { AppBar, Toolbar, Button } from '@mui/material'

export default function Layout() {
  return (
    <>
      {/* Simple nav bar */}
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
        </Toolbar>
      </AppBar>
      
      <main style={{ padding: 20 }}>
        <Outlet />
      </main>
    </>
  )
}