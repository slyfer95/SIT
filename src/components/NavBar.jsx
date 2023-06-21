import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "react-router-dom/Link";

function NavBar() {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand to='/'>Student Issue Tracking</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Issue Listings</Nav.Link>
            <Nav.Link href='/IssueView'>Issue View</Nav.Link>
            <Nav.Link href='/NewIssue'>New Issue</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
