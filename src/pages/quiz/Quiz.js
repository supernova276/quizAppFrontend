import React, { useState,useEffect } from 'react'
import NavbarComponent from '../../components/common/Navbar'
import QuesAndAns from '../../components/QuesAndAns/QuesAndAns'
import axios from 'axios'
import { useQuizReducer } from '../../context'

const Quiz = () => {

    const{quizCategory,quiz,quizDispatch}=useQuizReducer()
  
    console.log("category is",quizCategory)
    
    useEffect(()=>{

        (async()=>{

            try{
                const {data:{data}}= await axios.get('https://quizappbackend-production-d5ed.up.railway.app/quizApp/api/v1/quizzes',{
                    headers:{'x-access-token':localStorage.getItem("token")}
                })
                if(quizCategory)
                {let tempquiz=data.filter(({category})=>category===quizCategory)

                quizDispatch({
                  type:"QUIZ_SET",
                  payload:tempquiz
                })
                if(tempquiz && tempquiz.length>0)
                localStorage.setItem("quiz",JSON.stringify(tempquiz))}
            }
            catch(err){
                console.log(err)
            }
        })();

    },[])
   

  return (
    <div>
      <NavbarComponent/>
      {quiz && quiz.length >0 &&  <QuesAndAns/> } 
    </div>
  )
}

export default Quiz
