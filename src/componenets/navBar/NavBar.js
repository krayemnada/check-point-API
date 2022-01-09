import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
      <Navbar style={{background:"#240496"}}>
    <Container>
    <Navbar.Brand href="#home" style={{color:"#dedee4"}}>Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home" style={{color:"#ebc51d"}}><strong>Contact Us</strong></Nav.Link>
      <Nav.Link href="#features" style={{color:"#dedee4"}}>Message</Nav.Link>
      <Nav.Link href="#pricing" style={{color:"#dedee4"}}>Log In</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavBar
