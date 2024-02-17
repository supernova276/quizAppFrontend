import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom"
import { useAuth, useQuizReducer } from '../../context';
import { useState } from 'react';


const NavbarComponent=()=>{


  const{authDispatch}=useAuth()
  const token=localStorage.getItem("token")
  const{gameStatus,quizDispatch}=useQuizReducer()
  console.log("render",token)

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
  quizDispatch({
    type:"CLEAR"
})
  }
  const handleSubmit=()=>{
    quizDispatch({
      type:"CLEAR"
  })
  }

  return (
    <Navbar expand="lg" className="bg-info">
      <Container>
        <NavLink to={gameStatus?"":"/"} style={{textDecoration:"none"}}>
        <Navbar.Brand  className='font-weight-bolder kanit-regular' style={{fontFamily:"kanit",fontSize:"2rem",color:"#21224e"}}>QuizAndLearn</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
         {!gameStatus && token && <NavLink  to="/" onClick={handleHome} style={{fontFamily:"kanit",fontSize:"1.5rem",
         color:"#21224e"}} className="mx-md-3">
            Home</NavLink>}

          <NavLink to={gameStatus?"/result":"/auth/login"} className='text-dark font-weight-bolder'>
         {token && gameStatus &&<Button variant="primary" type="submit" className='mx-sm-3'onClick={handleSubmit}>Submit</Button>}
         {token && !gameStatus &&<Button variant="primary" type="submit" onClick={handleLogout} className='mx-md-3' >Logout</Button>}
         </NavLink>

        {token && <NavLink to="/" onClick={handleHome} style={{fontFamily:"kanit",fontSize:"1.5rem",color:"#21224e"}}>
        <i className="bi bi-person-fill mx-sm-3">User</i></NavLink>}

        { !token &&  <NavLink  to="/signup" className='text-dark font-weight-bolder'>
        <Button variant="primary" type="submit" className='mx-sm-3'>SignUp</Button></NavLink>}

        { !token &&  <NavLink  to="/auth/login" className='text-dark font-weight-bolder'>
        <Button variant="primary" type="submit" className='mx-sm-3'>Login</Button></NavLink>}

         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;