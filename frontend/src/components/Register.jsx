import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const [value,setValue]=useState({
      email:'',
      password:''
    })
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.post('http://localhost:80/api/routes/register',{
          email:value.email,
          password:value.password
        })
        console.log(response.data)
    }
  return (
    <>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' onChange={(e)=>{setValue({...value,[e.target.name]:e.target.value})}} value={value.email} required/><br /> <br />
        <label htmlFor="password">Password</label>
        <input type="password" name='password' onChange={(e)=>{setValue({...value,[e.target.name]:e.target.value})}} value={value.password} required/><br /> <br />
        <button style={{cursor:"pointer"}}>submit</button>
        <br /><br />
        <h4>Already have an account <Link to='/'>Login here</Link></h4>
      </form>
    </>
  )
}

export default Register
