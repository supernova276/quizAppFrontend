export const authReducer=(state,action)=>{
    
    const{type,payload}=action;

    switch(type){

        case "USERNAME":
            return{
                ...state,
               username:payload
            }
         case "PASSWORD":
            return{
                ...state,
                password:payload
            }
         case "FIRSTNAME":
            return{
                ...state,
                firstName:payload
            }
        case "LASTNAME":
            return{
                ...state,
                lastName:payload
            }

        case "EMAIL":
            return{
                ...state,
                email:payload
            }

        case "TOKEN":
            return{
                ...state,
                token:payload
            }

        case "INITIALSTATE":
            return{
                ...state,
                token:payload
            }

        case "CLEAR_CREDENTIALS":
                return {
                    ...state,
                    username: "",
                    password: "",
                }
        default: return state
    }
}