import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';



export  const Header = () => {
    return (
      <Navbar bg='dark' expand='md' variant='dark'>
        <Container>
        <Nav className='me-auto' variant= 'pills'>
            <LinkContainer to="/homepage">
                <Nav.Link>Homepage</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cryptocurrencies">
                <Nav.Link>Cryptocurrencies</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/news">
                <Nav.Link>News</Nav.Link>
            </LinkContainer>

        </Nav>

        <Form className="d-flex">
            <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
        </Container>
      </Navbar>
    )
  }