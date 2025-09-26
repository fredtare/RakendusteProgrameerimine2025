import { useState } from 'react'
import './App.css'
import Cats from './components/Cats'
import Context from './components/Context'
import './App.css'
import Button from '@mui/material/Button'
import { Outlet,Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


function App() {

  return( 
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
        <Button component = { Link } to='/apps' color="inherit">Cats and butts</Button>
        <Button component = { Link } to='/admin' color="inherit">Adminni leht</Button>
        <Button component = { Link } to='/admin' color="inherit">todo: todo</Button>
        <Button component = { Link } to='/weather' color="inherit">Ilmaennustus</Button>
        </Toolbar>
      </AppBar>
    </Box>
     <br />

      <br />
      <Outlet />
      </>
  )
}

export default App
