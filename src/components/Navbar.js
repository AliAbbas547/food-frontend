import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Badge from "react-bootstrap/Badge";
import { useCart } from './ContextReducer';

import Cart from '../screens/Cart';
 function Navbar() {
  let length= useCart()
  const [cartView,setCartView]=useState(false)
  const navigate= useNavigate()
  const handleLogOut=()=>{
    localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic mb-3 fw-bolder"  to="/">Food Service</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-item nav-link  fs-4 text-dark fw-bold" aria-current="page" to="#">Home</Link>
        </li>

        {localStorage.getItem("token")?
        <li className="nav-item">
        <Link className="nav-item nav-link  fs-4 text-dark fw-bold " aria-current="page" to="/orderData">My Orders</Link>
      </li>:""
         }
       </ul>
        {!localStorage.getItem("token")?
        <div className='d-flex'>
        <Link className="btn bg-white text-info mx-2  fw-bold " to="/login">Login</Link>
      
      <Link className="btn bg-white text-info mx-1 me-5 fw-bold" to="/createUser">SignUp</Link>
        </div>
       :
       <div>
         <div className="btn bg-white text-info  mx-1 fw-bold">
       <Link to="/Cart"  className='bg-white text-info'>    My Cart {" "}
           <Badge  pill bg="danger">{length.length}</Badge></Link>
           </div>
        
         <div className="btn bg-white text-danger  mx-1 fw-bold  me-5" onClick={handleLogOut}> Logout</div>
       </div>
       } 
        
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;