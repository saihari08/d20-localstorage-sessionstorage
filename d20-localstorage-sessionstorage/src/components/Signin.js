import React, { useEffect, useRef } from 'react'
import {Link, useNavigate} from "react-router-dom";

function Signin() {

  let navigate=useNavigate();
  let emailInputRef=useRef();
  let PasswordInputRef=useRef();


useEffect(()=>{
  emailInputRef.current.value=localStorage.getItem("email");
    
  PasswordInputRef.current.value=localStorage.getItem("password");

  if(localStorage.getItem("email")&& localStorage.getItem("password")){
    validiateCredentials();
  }   
},[]);

  let validiateCredentials=()=>{
    if(emailInputRef.current.value=="saihari@gmail.com" && 
      PasswordInputRef.current.value=="saihari"){
    localStorage.setItem("email",emailInputRef.current.value)
    localStorage.setItem("password",PasswordInputRef.current.value)
    
    sessionStorage.setItem("email",emailInputRef.current.value)
    sessionStorage.setItem("password",PasswordInputRef.current.value)
    navigate("/dashboard");
  }else{
    alert("invalid email or password");
  }
  }

  return (
<div className='App'>
<form>
    <h2 style={{backgroundColor:"grey",borderRadius:"25px",color:"black",
      boxShadow:"10px 10px 10px black"
    }}>Login</h2>
    
    <div> 
      <input ref={emailInputRef} type="text" placeholder='Email-id' ></input>
    </div>
        
    <div> 
      <input ref={PasswordInputRef} type="text" placeholder='Password' ></input>
    </div>
    

<div>  
  <button type="button" onClick={()=>{
   validiateCredentials();
  }}>Login</button>   
  </div>

 <br></br>
 <Link to="/signup">Create Account</Link>
 
 </form>
</div>
  )
}
export default Signin


