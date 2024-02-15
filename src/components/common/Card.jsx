import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useAuth, useQuizReducer } from '../../context';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react'

function CardComponent({ quizCategory}) {

  const{image,description,category}= quizCategory
  const{token}=useAuth()
  const{gameStatus,quizDispatch}=useQuizReducer()
  
  const navigate=useNavigate()
  
  const handlePlayButton=()=>{
    

    if(token){

      quizDispatch({
        type:"QUIZ-CATEGORY",
        payload:category
       })
      localStorage.setItem("category",category)
      navigate("/quiz")
      
      quizDispatch({
         type:"GAME_STATUS",
         payload:true
      })
    }
    else{
      navigate("/auth/login")
    }
  }
  return (
    <Card className='common-bg' style={{ width: '18rem', padding:"2rem",color:"#f8f7f8",borderRadius:"0.5rem"}}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>{description}
        </Card.Text>
      </Card.Body>
      <Button className='button-bg' onClick={handlePlayButton}>Play Now</Button>
      <br/>
    </Card>
  );
}

export default CardComponent;