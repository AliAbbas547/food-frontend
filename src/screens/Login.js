
import axios from "axios";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function Login() {
    
const [data, setData]= useState({

  email:"",
  password:""
})
let  navigate= useNavigate()
const handleSubmit= async(e)=>{
  try{
    e.preventDefault()
    console.log(data)
  let t1=  await  axios.post("http://localhost:5000/userLogin",data)
  

   localStorage.setItem("token", t1.data.token)
   localStorage.setItem("userId", t1.data.userId)
   localStorage.setItem("email", t1.data.email )
   
   console.log(localStorage.getItem("token"),localStorage.getItem("userId"))
 
   setData({
    
  email:"",
  password:""
   })

   navigate("/")
   


  }
  catch(err){
  alert(err.response.data.message)
  console.log(err.response.data.message)
  }
} 

const onChange=async (e)=>{
   
  setData({...data,[e.target.name]:e.target.value})
}

  return (
    <>
      <div class="container" >
        <form onSubmit={handleSubmit}>
         

          <div class="form-group mb-3 mt-5">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"  value={data.email}  name="email"  onChange={onChange}
            />
          </div>
          <div class="form-group mb-3 ">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"   value={data.password}   name="password"  onChange={onChange}
            />
          </div>
       

          <button type="submit" class=" m-3 btn btn-primary">
            Submit
          </button>
          <Link to="/createUser" className="m-3 btn btn-success">
            I am new a user
          </Link>
          
        </form>
      </div>
    </>
  );
}


