import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import instaCartLogo from './logo.svg'
import splash from './splash.webp'
import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Splash = styled.div`
width: 100vw;
height: 100vh;
background-repeat: no-repeat;
background-size: auto;
background-image: url(${splash})
`
const ContainerWithLargeLetters = styled(Container)`
margin-top: 200px;
font-size: 20px;
`

const SecContainer = styled(Container)`
color: black;
`

const RowWithStores = styled(Row)`
margin-top: 100px
`

function App() {
  return (
    <>
     <Navbar bg="light" expand="lg" fixed='top' >
     <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <img src= {instaCartLogo} alt='Logo' /> 
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
        </Nav>
     </Navbar.Collapse>
     </Navbar>
     <Splash>
      <ContainerWithLargeLetters>
        <Row>
          <Col><h1>Order groceries for delivery or pickup today</h1></Col>
        </Row>
        <RowWithStores>
          <Col>Store1</Col>
          <Col>Store2</Col>
          <Col>Store3</Col>
        </RowWithStores>
        <Row>
          <Col>
          <SecContainer>
            <RowWithStores>
            <Col>Store4</Col>
            <Col>Store5</Col>
            <Col>Store6</Col>
            </RowWithStores>
          </SecContainer>
          </Col>
        </Row>
      </ContainerWithLargeLetters>
     </Splash>
    </>
  );
}

export default App;
