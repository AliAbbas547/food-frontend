import React from 'react';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import axios from "axios"
import { Link } from 'react-router-dom';



export default function Cart() {

let data= useCart() ;

const checkOut= async()=>{
    try{

        let cartData={order_data:data,email:localStorage.getItem("email")}
        let t1=  await  axios.post("http://localhost:5000/order",cartData)
        data.length=0
        console.log(cartData)
    }
    catch(err){
        alert(err.message)
        console.log(err.message)
    }
}




    console.log(data)
    let dispatch=useDispatchCart()
    if(data.length===0){
        return(
            <div>
                <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!!</div>
            </div>
        )
    }

    let totalprice= data.reduce((total,food)=>{
        return total+ food.price
    },0)
  return (
    <div>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-seponsive-md'>
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
   {data.map((food,index)=>{
    return(
        <tr>
        <th scope="row">{index+1}</th>
        <td>{food.name}</td>
        <td>{food.qty}</td>
        <td>{food.size}</td>
        <td>{food.price}</td>
        <td><button type='button' className='btn p-0'> <img src="http://cdn.onlinewebfonts.com/svg/img_416864.png" style={{height:"20px"}} alt="delete" onClick={()=>dispatch({type:"REMOVE",index:index})
        }/></button></td>
      </tr>
    )
   })}
    
   
  </tbody>
</table>
<div><h1 className='fs-2'> Total Price: {totalprice}/-</h1></div>
<div>
    <Link to="/"><button className='btn bg-success mt-5' onClick={checkOut}>Check Out</button></Link>
</div>
      </div>

    </div>
  )
}
