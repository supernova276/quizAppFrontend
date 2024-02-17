import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../../context';
import {loginHandler} from '../../services/auth-services'
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const {username,password,authDispatch}=useAuth()
  const navigate = useNavigate();


  const handleUsername=(e)=>{
    authDispatch({
      type:"USERNAME",
      payload:e.target.value
    })
  }

  const handlePassword=(e)=>{
    authDispatch({
      type:"PASSWORD",
      payload:e.target.value
    })
  }

  const handleSubmit=(e)=>{

    e.preventDefault();
    const token=loginHandler(username,password)

    if(token){

    navigate("/");
    authDispatch({
      type:"TOKEN",
      payload:token
    })

    authDispatch({
      type:"CLEAR_CREDENTIALS"
    })
  }
  }

  const handleTestCredentialClick=async (e)=>{

    e.preventDefault();

    const token=await loginHandler("Akshita","akshita123")
    if(token){
      navigate("/")
    
    authDispatch({
      type:"TOKEN",
      payload:token
    })

    authDispatch({
      type:"CLEAR_CREDENTIALS"
    })
  }
  }
    
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
      <Form  className=' common-bg' style={{width:"25rem",height:"25rem",padding:"2rem"}} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username"  onChange={handleUsername}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='d-flex flex-column'>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br/>
      <Button variant="secondary" type="submit" onClick={handleTestCredentialClick}>
        Login with test-credentials
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default LoginForm
