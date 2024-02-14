import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useQuizReducer } from '../../context';
import { useNavigate } from 'react-router-dom';

const QuesAndAns = ({quizData}) => {
   
    const{score,index,selected_option,quizDispatch,quizCategory,quiz}=useQuizReducer()

    console.log("inside ques&ans",quiz[0].quiz[index])
    const navigate=useNavigate()

    const[submit,setSubmit]=useState(false)
    
    const handleNext=()=>{
        localStorage.setItem("index",index+1)
        if(index===1){
            setSubmit(true)
        }
        if(index===2){
            quizDispatch({
                type:"CLEAR"
            })
            navigate("/result")
            return;
        }
        quizDispatch({
            type:"NEXT",
            payload:index+1
        })
    }
    const handleQuit=()=>{
        quizDispatch({
            type:"CLEAR"
        })
        navigate("/")
    }
    const handleOptions=(isCorrect,id)=>{
         quizDispatch({
            type:"SELECTED_OPTN",
            payload:{id,isCorrect}
         })
    }

    useEffect(()=>{
             localStorage.setItem("score",score)
             localStorage.setItem("option",selected_option)
    },[selected_option])

  return (
    <div className='d-flex align-items-center justify-content-center'style={{height:"100vh"}}>
    <div className='d-flex flex-column align-items-center' style={{width:"30rem",background:"#21224e",padding:"2rem",borderRadius:"1rem"}}>
        <h1 className='mb-md-3'>{quizCategory}</h1>
        <div className='d-flex justify-content-between mb-md-3'style={{width:"100%"}}>
        <span>{`Q-${index+1}/${quiz[0].quiz.length}`}</span>
        <span>{`Score-${score}`}</span>
        </div>
        <div className='mb-md-5'>{`Q-${index+1}:${quiz[0].quiz[index].question}`}</div>

        {quiz[0].quiz[index].options.map(({option,isCorrect,_id})=> <Button  key={_id} 
        style={{width:"100%",background: selected_option && isCorrect?`#84cc16`: selected_option && selected_option===_id &&!isCorrect?`#dc2626`:`#3a3b89`
        ,borderRadius:"12rem",border:"none"}} className='mb-sm-4'disabled={selected_option} onClick={()=>handleOptions(isCorrect,_id)}>{option}</Button>)}
        
        <div className='d-flex justify-content-between'style={{width:"100%"}}>
        <Button style={{background:"#3a3b89",border:"none"}} className='mb-sm-4' onClick={handleQuit}>Quit</Button>
        <Button style={{background:"#9f4393",border:"none"}} className='mb-sm-4' onClick={handleNext}>{ submit?`Submit`:`Next Question`}</Button>
        
        </div> 
    </div>
    </div>
  )
}

export default QuesAndAns
