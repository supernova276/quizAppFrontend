
import { createContext,useReducer,useContext, useEffect } from "react";
import {quizReducer} from "../reducers/quiz-reducer"

const initialState={
    quizCategory:"",
    score:0,
    index:0,
    selected_option:"",
    gameStatus:false,
    quiz:[]
    
}
const QuizContext=createContext();

const QuizProvider=({children})=>{

    const[{quizCategory,score,index,selected_option,gameStatus,quiz},quizDispatch]=useReducer(quizReducer,initialState)

    useEffect(()=>{
        const currentIndex=Number(localStorage.getItem("index"))
        const currentScore=Number(localStorage.getItem("score"))
        const currentOption=localStorage.getItem("option")
        const currentCategory=localStorage.getItem("category")
        const currentQuiz=JSON.parse(localStorage.getItem("quiz"))
        localStorage.setItem("quiz",JSON.stringify(currentQuiz))
        quizDispatch({
            type:"INITIAL_STATE",
            payload:{
                currentIndex,
                currentOption,
                currentScore,
                currentCategory,
                currentQuiz
            }
        })
        
    },[])

    return (<QuizContext.Provider value={{quizCategory,score,index,selected_option,gameStatus,quiz,quizDispatch}}>
        {children}
    </QuizContext.Provider>)
}
const useQuizReducer=()=>useContext(QuizContext)
export{
    useQuizReducer,
    QuizProvider
}
