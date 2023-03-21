import React from 'react'

export default function MyOrderData(props) {

     let savedData= props.data.order_data

     let totalprice= savedData.reduce((total,food)=>{
        return total+ food.price
    },0)
  return (
    <div>
         <div className='container m-auto mt-5 table-responsive table-responsive-sm table-seponsive-md'>
     <div className='fs-2 text-center mb-3 bg-info'>
      <h4>Date:{props.data.date}</h4>   
     <h4> id: {props.data._id}</h4>
   
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
