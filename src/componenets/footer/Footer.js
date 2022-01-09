import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
       <Navbar style={{background:"#240496"}}>
    <Container>
      <Navbar.Brand href="#home" style={{color:"#dedee4" , marginLeft:'600px'}}>Copy Right @ 2022</Navbar.Brand>
    </Container>
  </Navbar>
    </div>
  )
}

export default Footer
