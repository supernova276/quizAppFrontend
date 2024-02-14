export const quizReducer=(state,action)=>{
    
const{type,payload}=action

switch(type){

    case "INITIAL_STATE":
        return{
            ...state,
            index:payload.currentIndex,
            score:payload.currentScore,
            selected_option:payload.currentOption==='null'?null:payload.currentOption,
            quizCategory:payload.currentCategory,
            quiz:payload.currentQuiz
        }

    case "QUIZ-CATEGORY":
        return{
            ...state,
            quizCategory:payload
        }
    case "NEXT":
        return{
            ...state,
            index:payload,
            selected_option:null
        }
    case "CLEAR":
        return{
            quizCategory:"",
            score:0,
            index:0,
            selected_option:null,
            gameStatus:false
        }
    case "SELECTED_OPTN":
        return{
            ...state,
            selected_option:payload.id,
            score:payload.isCorrect?state.score+10:state.score
        }
    case "GAME_STATUS":
        return{
            ...state,
            gameStatus:payload
        }
    case "QUIZ_SET":
        return{
            ...state,
            quiz:payload
        }

    default: return state;
}

}