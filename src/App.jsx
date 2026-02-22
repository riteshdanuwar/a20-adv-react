// import React, {Fragment, useState } from "react";
import { useState } from "react";

const App=() => {
  // const name ="Barcelona";
  const [typedName,setTypedName]= useState("");
  const[name, setName]=useState("");
  const[password,setPassword]=useState("");

  console.log(password,"----psss");

  // console.log(typedName);

  const changeTypedName=(name)=>{
    setTypedName(name);
  };
  const changeName =()=>{
    setName(typedName);
  }
  const disableButton = typedName.length ===0 || password.length ===0;
  return (
    <>
    <div>
     <p>{name}</p>
     <input placeholder="Enter your name"
     onChange = {(event)=>changeTypedName(event.target.value)}
     />
     <input type="password"
     placeholder="Enter your password"
     onChange={(e)=> setPassword(e.target.value)}
     />
     <button 
     disabled ={disableButton}
     onClick={changeName}>Change name</button>
    </div>
    </>
  )
};

export default App;