import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart,useCart } from "./ContextReducer";


export default function Card(props) {
  let dispatch= useDispatchCart()
  let data= useCart()
  let options= props.options
  let priceOptions=Object.keys(options) 
  let priceRef= useRef()
  let foodItem= props.foodItems
  const [qty,setQty]= useState(1)
  const [size,setSize]=useState("") 
  let finalPrice=qty* parseInt(options[size])
  const handleAddToCart= async()=>{
    
    let food=[]
    for(const item of data){
      if(item.id===foodItem._id){
        food=item
        break
      }
    }
    if(food!==[]){
      if(food.size=== size){
        await dispatch({type:"UPDATE",id:foodItem._id,price:finalPrice,qty:qty})
        return 
      }
      else if(food.size!==size){
        
     await dispatch({type:"ADD",id:foodItem._id,name:foodItem.name,price:finalPrice,qty:qty,size:size,img:foodItem.img})
     console.log(data)
     return 
      }
      return
    }
    
    await dispatch({type:"ADD",id:foodItem._id,name:foodItem.name,price:finalPrice,qty:qty,size:size,img:foodItem.img})
    console.log(data)


  }
  useEffect(()=>{
    setSize(priceRef.current.value)
  })
  
  return (
    
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "450px" }}
        >
          <img src={foodItem.img} className="card-img-top" alt="..." style={{height:"200px",objectFit:"fill"}}/>
          <div className="card-body">
            <h5 className="card-title">{foodItem.name}</h5>
            <p className="card-text"></p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-primary rounded" onChange={(e)=>setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                {priceOptions.map((x)=>{
                  return <option key={x} value={x}> {x}</option>
                })}
              </select>
              <div className="d-inline fs-5"> ₹{finalPrice}/-</div>
              
            </div>
            <hr>
            </hr>
          <div  >
          <button className="btn btn-success   justify-center" onClick={handleAddToCart}>Add to Cart</button>
          </div>
          
          </div>
        </div>
      </div>
    
  );
}
 

      