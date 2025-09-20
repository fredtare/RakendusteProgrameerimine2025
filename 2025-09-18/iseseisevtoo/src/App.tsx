import './App.css'
import Button from '@mui/material/Button'
import { Outlet,Link } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Button variant="contained">Hello world</Button>
      <br />
      <Link to="/about">All About Us</Link>
      <Link to="/gallery">Previous Works</Link>
      <Link to="/contact">Contact Us</Link>
      <Outlet />
    </>
  )
}