import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    let firstNameInputRef=useRef();
    let lastNameInputRef=useRef();
    let stateSelectRef=useRef();
    let msgLabelRef=useRef();
    let selectedGender;
    let salutation;
    let MaritalStatus;
    let maleRBRef=useRef();
    let femaleRBRef=useRef();
    let ageinputRef=useRef();
    let LanguageKnown={
        telugu:false,
        tamil:false,
        kannada:false,
        malayalam:false,
        hindi:false
    };

 let [ProfilePic,setProfilePic]=useState("./images/noimage.png");   
let onCreateAccountClick=()=>{
   if(selectedGender=="male"){
      salutation="Mr.";
}else{
    if(MaritalStatus=="single"){
      salutation="Miss.";
    }else{
        salutation="Mrs.";
    }            
}
console.log(LanguageKnown);
    msgLabelRef.current.innerHTML= `${salutation}
    ${firstNameInputRef.current.value} ${lastNameInputRef.current.value} 
    from ${stateSelectRef.current.value},
    your account has been created.And you knows ${
    LanguageKnown.telugu==true?"telugu":""}
    ${LanguageKnown.tamil==true?"tamil":""}
    ${LanguageKnown.kannada==true?"kannada":""}
    ${LanguageKnown.malayalam==true?"malayalam":""}
    ${LanguageKnown.hindi==true?"hindi":""
    }`;
    };
  return (
<div className='App'>
<form>
    <h2 style={{backgroundColor:"grey",borderRadius:"25px",color:"black",
      boxShadow:"10px 10px 10px black"}}>Signup</h2>
    
       <div> 
        
        <input ref={firstNameInputRef} type="text" placeholder='FirstName'></input>
    

        <input ref={lastNameInputRef} type="text" placeholder='lastName'></input>
        
       </div>   

    <div> 
     
    <input type="text" placeholder='email' ></input>
   
    
    <input type="text" placeholder='password'></input>
    </div>
    
    <div> 
    <input type="text" placeholder='phone-no'></input>

        <ladel>State</ladel>
        <select ref={stateSelectRef}>
            <option value="AP">Andhra Pradesh</option>
            <option>Telangana</option>
            <option>Karnataka</option>
            <option value="TN">TamilNadu</option>
            <option>Kerala</option>
        </select>
        </div>

    <div>   
     
    <input type="text" placeholder='address'></input>

    
    <input ref={ageinputRef} type="text" placeholder='age' onChange={()=>{
            let age=Number(ageinputRef.current.value);

            if(age <5){
                console.log(`infant`);
            } else 
            if(age>=5 && age <=10){
                console.log(`kid`);
            } else 
            if(age>10 && age<=15){
                console.log(`Teen`);
            } else 
            if(age >15 && age <25){
                console.log(`youth`);
            } else 
            if(age >30 && age <50){
                console.log(`middle aged`)
            }else 
            if(age >50 && age <70){
                console.log(`old aged`)
            }else
                console.log(`not a valid age`);
        }}></input>
   </div>
     
     <div> 
        <label>Gender</label>
        <input type="radio" name="gender" ref={maleRBRef} onChange={()=>{
            if(maleRBRef.current.checked==true){
                selectedGender="male"
            }
        }}></input>
        <label style={{width:"auto"}}>Male</label>
        <input type="radio" name="gender" ref={femaleRBRef}
        onChange={()=>{
            if(femaleRBRef.current.checked==true){
                selectedGender="female"
            }
        }}></input>
        <label style={{width:"auto"}}>Female</label>
        </div>

   <div> 
        <label>MaritalStatus</label>
        <input type="radio" name="ms" ref={maleRBRef} onChange={(eventObj)=>{
            console.log(eventObj);
            if(eventObj.target.checked==true){
                MaritalStatus="single"
            }
        }}></input>

        <label style={{width:"auto"}}>single</label>
        <input type="radio" name="ms" ref={femaleRBRef}
        onChange={(eventObj)=>{
            console.log(eventObj);
            if(eventObj.target.checked==true){
                MaritalStatus="married"
            }
        }}></input>
        <label style={{width:"auto"}}>Married</label>

    </div>
    
     <div>
         <label>Language Known</label>
         <input type="checkbox"onChange={(e)=>{
            LanguageKnown.telugu=e.target.checked;
         }}></input>
         <label>Telugu</label>
         <input type="checkbox"onChange={(e)=>{
            LanguageKnown.tamil=e.target.checked;
         }}></input>
         <label>Tamil</label>
         <input type="checkbox" onChange={(e)=>{
            LanguageKnown.kannada=e.target.checked;
         }}></input>
         <label>Kannada</label>
         <input type="checkbox" onChange={(e)=>{
            LanguageKnown.malayalam=e.target.checked;
         }}></input>
         <label>malayalam</label>
         <input type="checkbox"onChange={(e)=>{
            LanguageKnown.hindi=e.target.checked;
         }}></input>
         <label>Hindi</label>
   </div> 

   <div>
    <label>ProfilePic</label>
    <input type="file" accept="image/*"onChange={(eo)=>{
        console.log(eo.target.files);
    let selectedimagepath=URL.createObjectURL(eo.target.files[0])
    setProfilePic(selectedimagepath)
    console.log(selectedimagepath)
    }}></input>
    <br></br>
    <img src={ProfilePic} className="profileviewer"></img>
   </div>


<div> 
<button type="button" onClick={()=>{
    onCreateAccountClick();
}}>Create Account</button>
</div>

<div>
    <label ref={msgLabelRef}></label>
</div>

<br></br>
    <Link to="/">Signin</Link> 
</form>
</div>
  )
}

export default Signup
