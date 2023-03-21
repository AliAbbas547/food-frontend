import React, { useEffect, useState } from 'react';
import axios from "axios"

export default function MyOrders() {

  
    const [saved, setSaved]=useState({
        email:"",
        id:"",
        date:""
    })
    const [savedData,setSavedData]=useState([])
    const cartData= async()=>{
        try{
            let t3=localStorage.getItem("email")
            let data= await axios.get(`http://localhost:5000/orderData?email=${t3}`)
            console.log(data.data.data)
       

        }catch(err){
            alert(err.message)
            console.log(err.message)
        }
    }
    useEffect(()=>{
        cartData()
    },[])

      let totalprice= savedData.reduce((total,food)=>{
        return total+ food.price
    },0)

  return (
    
    <div>
    <div className='container m-auto mt-5 table-responsive table-responsive-sm table-seponsive-md'>
     <div className='fs-2 text-center mb-3 '> Date:{saved.date}
     <h4> id: {saved.id}</h4>
     <h4> email:{saved.email} </h4>
     </div>   
    <table className="table table-hover ">
<thead className='text-success fs-4'>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">Quantity</th>
    <th scope="col">Option</th>
    <th scope="col">Amount</th>
 
   
  </tr>
</thead>
<tbody>
 {savedData.map((food,index)=>{
  return(
      <tr>
      <th scope="row">{index+1}</th>
      <td>{food.name}</td>
      <td>{food.qty}</td>
      <td>{food.size}</td>
      <td>{food.price}</td>
     
      

     
    </tr>
  )
 })}
  
 
</tbody>
</table>
<div><h1 className='fs-2'> Total Price: {totalprice}/-</h1></div>

    </div>

  </div>

  )
}
