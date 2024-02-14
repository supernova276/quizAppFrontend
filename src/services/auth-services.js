import axios from "axios"

export const loginHandler=async(username,password)=>{

  try{ const {data:{accesToken},status}=await axios.post("https://quizappbackend-production-d5ed.up.railway.app/quizApp/api/v1/auth/login",{
    username:username,
    password:password
   });

   if(status===200){
    localStorage.setItem("token",accesToken)
    return accesToken;
   }}
   catch(err){
       console.log(err)
   }
}

export const SignUpHandler=async(username,email,password)=>{

  try{ const {data:{accesToken},status}=await axios.post("https://quizappbackend-production-d5ed.up.railway.app/quizApp/api/v1/auth/signup",{
    username:username,
    password:password,
    email:email
   });

   if(status===200){
    localStorage.setItem("token",accesToken)
    return accesToken;
   }
}
catch(err){
   console.log(err)
}
}