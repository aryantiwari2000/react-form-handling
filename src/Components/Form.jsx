import React, { useState } from 'react'
import "../Components/Formcss.css"
const Form = () => {

     const[user,setUser]=useState({username:"",email:"",password:"",confirmPassword:""})
     const[error,setError]=useState({})
     const[flag,setFlag]=useState(false)

     const handleChange=(e)=>{
     setUser({...user, [e.target.name]:e.target.value})
     }

     const handleSubmit=(e)=>{

      e.preventDefault();
    //  console.log(e)

    const newError={}

    if(user.username==""){
      // setError({username:"please enter username"})
      newError.username="please enter username";
    }else if(user.username.length<=2 || user.username.length>=10){
      newError.username="username not must be 2 and 10"
    }
    if(user.email==""){
      // setError({email:"please enter email"})
      newError.email="please enter email";
    }else if(user.email.indexOf("@")<=0){
      newError.email="@ position not valid"
    }else if(user.email.charAt((user.email.length-4) !='.') &&  (user.email.charAt(user.email.length-3) !='.')){
      newError.email=". is ivalid position" 
    }
    if(user.password==""){
      // setError({password:"please enter password"})
      newError.password="please enter password";
    }else if(isNaN(user.password)){
      newError.password="please fill your pass only digit";
    }
    if(user.confirmPassword==""){
      // setError({ConfirmPassword:"please enter password"})
      newError.ConfirmPassword="please enter ConfirmPassword ";
    }else if(user.password!=user.confirmPassword){
       newError.ConfirmPassword="Password must be match"
    }
    else{
      setFlag(true)
    }
    setError(newError);
     }
  return (
    <div> 
  <div className="container">
    <h1>{flag?<p>{user.username}You have register successfully</p>:""}</h1>
    <form action="#" method="post" onSubmit={handleSubmit}>
        <input type="text" name="username" value={user.username} placeholder="Username" onChange={handleChange} />
        <span style={{color:"red"}}>{error.username}</span>
        <input type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange} />
        <span style={{color:"red"}}>{error.email}</span>
        <input type="text" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
        <span style={{color:"red"}}>{error.password}</span>
        <input type="password" name="confirmPassword" value={user.confirmPassword} placeholder="ConfirmPassword" onChange={handleChange} />
        <span style={{color:"red"}}>{error.ConfirmPassword}</span>
        <input type="submit" value="Sign Up"/>
    </form>
</div>
    </div>
  )
}
export default Form

