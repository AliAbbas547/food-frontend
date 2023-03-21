
import React ,{useState,useEffect}from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

import axios from "axios"


export default function Home() {
  const[search,setSearch]= useState("")
  const [foodCat,setFoodCat]=useState([])
  const [foodItems,setfoodItems]=useState([])

  const loadData= async ()=>{
    try{
      let data= await axios.get("http://localhost:5000/foodData",{headers:{"x-auth-key":localStorage.getItem("token")}})
      
      setfoodItems(data.data[0])
      setFoodCat(data.data[1])
   
     

    }
    catch(err){
      
      console.log(err.message)
    }
  }
  
useEffect(()=>{
  loadData()
},[])


  return (
    <div>
      <div><Navbar/></div>
      <div> <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id="carousel">
    <div className='carousel-caption' style={{zIndex:"10"}}>
    <div className="d-flex justify-content-center">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
    {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
  </div>
    </div>
    <div className="carousel-item active">
      <img src="https://wallpapercave.com/dwp1x/wp3053211.jpg" className="d-block w-100" style= {{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://c4.wallpaperflare.com/wallpaper/741/599/723/pizza-food-vegetables-fruit-wallpaper-preview.jpg" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://wallpapercave.com/dwp1x/wp10053451.jpg" className="d-block w-100"style= {{filter:"brightness(30%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></div>
      <div className="container">
      {
        foodCat!==[]?
        foodCat.map((x,index)=>{
          return (
            <div className="row mb-3">
              <div key={index} className="fs-3 m-3"> {x.CategoryName}
              </div>
              <hr/>
              {foodItems!==[]?
              foodItems.filter((items)=>x.CategoryName===items.CategoryName&& items.name.toLowerCase().includes(search.toLowerCase())).map((data)=>{
                return (
                  
                     <div key={data._id} className="col-12 col-md-6 col-lg-3"> <Card foodItems={data}
                     options={data.options[0]} 
                     />
              </div>    
                  
                )
              })
              :""
              }
            </div>
          )
        })
        :""
      }
   
      
      </div>
      <div><Footer/></div>
    </div>
  )
}
