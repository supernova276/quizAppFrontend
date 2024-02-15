import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useAuth, useQuizReducer } from '../../context';


const NavbarComponent=()=>{

  const{token,authDispatch}=useAuth()
  const{gameStatus,quizDispatch}=useQuizReducer()

  const handleLogout=()=>{

    quizDispatch({
      type:"CLEAR"
  })
  authDispatch({
    type:"CLEAR_CREDENTIALS"
  })
    if(token){
      localStorage.clear()
    }
  }
  const handleHome=()=>{
  localStorage.setItem("index","0")
  }

  return (
    <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand href={gameStatus?``:`/`} className='font-weight-bolder kanit-regular' style={{fontFamily:"kanit",fontSize:"2rem",color:"#21224e"}}>QuizAndLearn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
         {!gameStatus && token && <Nav.Link eventKey={2} href="/" onClick={handleHome} style={{fontFamily:"kanit",fontSize:"1.5rem",color:"#21224e"}}>
            Home</Nav.Link>}

          <Nav.Link eventKey={2} href={gameStatus?"/result":"/auth/login"} className='text-dark font-weight-bolder'>
         {token && gameStatus &&<Button variant="primary" type="submit">Submit</Button>}
         {token && !gameStatus &&<Button variant="primary" type="submit" onClick={handleLogout} >Logout</Button>}
         </Nav.Link>

        {token && <Nav.Link eventKey={2} href="/" onClick={handleHome} style={{fontFamily:"kanit",fontSize:"1.5rem",color:"#21224e"}}>
        <i className="bi bi-person-fill">User</i></Nav.Link>}

        { !token &&  <Nav.Link eventKey={2} href="/signup" className='text-dark font-weight-bolder'>
        <Button variant="primary" type="submit">SignUp</Button></Nav.Link>}

        { !token &&  <Nav.Link eventKey={2} href="/auth/login" className='text-dark font-weight-bolder'>
        <Button variant="primary" type="submit">Login</Button></Nav.Link>}

         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;