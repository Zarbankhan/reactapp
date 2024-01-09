import React,{useState,useEffect} from 'react'
import Cards from './Cards'
import './Style.css'
const Fakeapi = () => {
const [data,setData]=useState(null)


useEffect(()=>{
    const fetchData =async()=> {

    
        const resp=await fetch('https://fakestoreapi.com/products')
      const result= await resp.json()
    console.log(result)
    setData(result)
    } 
    fetchData()
},[])
   
  return (
    <>
    <div className='row justify-content-center g-0 rowcolor'>
    {data ? (data.map((items)=>(<div className='col-lg-3 m-3 '> <Cards key={items.id} image={items.image} title={items.title}/></div>)
))
:(<p>Loding...</p>)
}j
   

    </div>
 </>
  )
}

export default Fakeapi
