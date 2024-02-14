 import { createContext,useReducer,useContext, useEffect } from "react";
 import {authReducer} from "../reducers/auth-reducer"

 const initialState={
    username:"",
    password:"",
    email:"",
    token:""
 }
 const AuthContext=createContext();

 const AuthProvider=({children})=>{

//this is done for persistant logic
   useEffect(()=>{
      const token=localStorage.getItem("token")
      console.log("value is",token )
      authDispatch({
         type:"INITIALSTATE",
         payload:token
      })
    },[])
   

    const [{username,password,email,token},authDispatch]=useReducer(authReducer,initialState)
    // using the reducer, authreducer is the reducer functino and inital state 
    //the auth dispatch will call the authreducer function
    //and the state will always get the initial state

   return(  <AuthContext.Provider value={{username,password,email,token,authDispatch}}>
        {children}
     </AuthContext.Provider>)
 }
 const useAuth= ()=>useContext(AuthContext);
 export{
    useAuth,
    AuthProvider
 }
