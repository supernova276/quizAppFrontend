import React, { useEffect, useState } from 'react';
import NavbarComponent from '../../components/common/Navbar';
import CardComponent from "../../components/common/Card"
import axios from 'axios';


const Home = () => {

    const[categories,setCategories]=useState([])

    useEffect(()=>{

        (async()=>{

            try{
                const {data:{data}}= await axios.get('https://quizappbackend-production-d5ed.up.railway.app/quizApp/api/v1/categories')
                console.log(data)
                setCategories(data)
            }
            catch(err){
                console.log(err)
            }
        })();

    },[])
  return (
    <div>
      <NavbarComponent/>
      <main className='d-flex flex-row  justify-content-center mt-sm-5 gap-lg'>
      {
        categories.map((category)=>{
            return (
                <CardComponent quizCategory={category} key={category._id}></CardComponent>
            )
           
        })
      }
      </main>
    </div>
  )
}

export default Home
