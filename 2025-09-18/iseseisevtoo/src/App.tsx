import './App.css'
import Button from '@mui/material/Button'
import { Outlet,Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';




export default function App() {
  return (
    <>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Button component = { Link } to='/about' color="inherit">All About Us</Button>
          <Button component = { Link } to='/gallery' color="inherit">Pretty Pictures</Button>
          <Button component = { Link } to='/contact' color="inherit">Email us</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <br />
      <Outlet />
    </>
  )
}