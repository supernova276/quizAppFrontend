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
    alert("incorrect username or password")
    return null
   }
}

export const SignUpHandler=async(username,emailId,password)=>{

  try{ const {data:{accesToken},status}=await axios.post("https://quizappbackend-production-d5ed.up.railway.app/quizApp/api/v1/auth/signup",{
    username:username,
    password:password,
    emailId:emailId
   });

   if(status===200){
    console.log("inside status 200")
    localStorage.setItem("token",accesToken)
    return accesToken;
   }
}
catch(err){
   alert("the username or password already exists")
   return null
}
}