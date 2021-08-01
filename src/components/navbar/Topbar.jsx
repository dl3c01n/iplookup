import { Navbar, Container, Nav } from 'react-bootstrap'

export const Topbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">IP Lookup</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )    
}