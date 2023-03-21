import React, { useEffect, useState } from 'react';
import axios from "axios";
import MyOrderData from './MyOrderData';

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
            setSavedData(data.data.data)
       

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
      
      {savedData.map((orderData)=>{
           return(

            <div>
              {/* <div> {orderData.date}</div>
              <div>{orderData._id}</div> */}
              <MyOrderData data={orderData}></MyOrderData>
            </div>
           )
      })}
  

  </div>

  )
}
