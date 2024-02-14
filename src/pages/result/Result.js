import React from 'react'
import NavbarComponent from '../../components/common/Navbar'
import { useQuizReducer } from '../../context'

const Result = () => {

  const{score}=useQuizReducer()
  return (
    <div>
      <NavbarComponent/>
      <div className='d-flex justify-content-center align-items-center' style={{width:"100%",marginTop:"5rem"}}>
       <div className='d-flex flex-column align-items-center'style={{width:"20rem",background:"#21224e",border:"2px solid #ffff"}}>
        <h2>RESULT</h2>
        <span>your Score is {score}{score==0?'😕😔':'🥳🎉✨'}</span>

       </div>
      </div>
    </div>
  )
}

export default Result
