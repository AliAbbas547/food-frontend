import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  
const [data, setData]= useState({
  name:"",
  location:"",
  email:"",
  password:""
})

const handleSubmit= async(e)=>{
  try{
    e.preventDefault()
    console.log(data)
   await  axios.post("http://localhost:5000/userSignUp",data)
   setData({
    name:"",
  location:"",
  email:"",
  password:""
   })
   alert("successfully registered")


  }
  catch(err){
  alert(err.message)
  console.log(Response.message)
  }
} 

const onChange=async (e)=>{
   
  setData({...data,[e.target.name]:e.target.value})
}

  return (
    <>
      <div class="container">
        <form onSubmit={handleSubmit}>
          <div class="form-group mb-3 mt-4">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control "
              placeholder="Enter name here" value={data.name}  name="name"  onChange={onChange}
            />
          </div>

          <div class="form-group mb-3">
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
          <div class="form-group mb-3">
            <label for="exampleInputPassword1">location</label>
            <input
              type="text"
              class="form-control"
              placeholder="enter your address here"  value={data.location}  name="location"  onChange={onChange}
            />
          </div>

        <button type="submit" class=" m-3 btn btn-primary">
            Submit
          </button>
          <Link to="/Login" className="m-3 btn btn-success">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}
