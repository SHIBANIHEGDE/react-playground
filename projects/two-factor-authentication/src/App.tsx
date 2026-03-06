import { Box, Button } from '@chakra-ui/react'
import './App.css'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <>
    <Box 
    w={"100vw"}
    minH={"100vh"}
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    bg={"gray.800"}
    > 
      <Navbar width={"100vw"} />
      <Outlet />
     </Box>

      
    </>
  )
}

export default App
