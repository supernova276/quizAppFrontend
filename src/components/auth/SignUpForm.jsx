import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../context';
import { SignUpHandler, loginHandler } from '../../services/auth-services';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {

  const navigate=useNavigate()
  const {username,email,password,authDispatch}=useAuth()
  const handleUsername=(e)=>{
      
    authDispatch({
      type:"USERNAME",
      payload:e.target.value
    })
  }
  const handleEmail=(e)=>{
    authDispatch({
      type:"EMAIL",
      payload:e.target.value
    })
  }

  const handlePassword=(e)=>{
    authDispatch({
      type:"PASSWORD",
      payload:e.target.value
    })
  }

  const handleSignUp=async(e)=>{

    e.preventDefault()

    let token= await SignUpHandler(username,email,password)
    console.log("token is",token)

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

  const handleTestSignUp=(e)=>{
    
    e.preventDefault()
      const token=loginHandler("Akshita","akshita123")
      if(token)navigate("/")
      
      authDispatch({
        type:"TOKEN",
        payload:token
      })
  
      authDispatch({
        type:"CLEAR_CREDENTIALS"
      })

  }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
      <Form className=' common-bg' style={{width:"25rem",height:"40rem",padding:"2rem"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter username" onChange={handleUsername} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>EmailId</Form.Label>
        <Form.Control type="text" placeholder="abc@gmail.com" onChange={handleEmail} />
        <Form.Text className=" text-light">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='d-flex flex-column'>
      <Button variant="primary" type="submit" onClick={handleSignUp}>
        SignUp
      </Button>
      <br/>
      <Button variant="secondary" type="submit"onClick={handleTestSignUp}>
        SignUp with test-credentials
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default SignUpForm
