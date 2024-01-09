import React, {useEffect, useState} from 'react'


const Usestatname = () => {
    const [color, setColor] =useState("pink")

// useEffect..........................
    useEffect(()=>{
      alert("pink")
     
    },[])
  return (
    <>
      <h1> My favrioute color is {color}!</h1>
      <button type='button'onClick={() => setColor("Red")}> BLue </button>
      <button type='button'onClick={() => setColor("Black")}> BLue </button>
      <button type='button'onClick={() => setColor("Green")}> BLue </button>

    </>
  )
}

export default Usestatname;

