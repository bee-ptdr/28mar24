import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  const navigate  = useNavigate()
  
  
  const [logUser, setLogUser] = useState({ email: "", password: "" });
  const [logUserArray, setLoguserArray] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/signUser").then((res)=>{
        setLoguserArray(res.data)
        // console.log(res.data)
    })
  })

  const handleChange = (e) => {
    setLogUser({ ...logUser, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let matchData = logUserArray.filter((ele)=>{
        return ele.email === logUser.email && ele.password === logUser.password
    });
    if(logUser.email === "" && logUser.password === ""){
        alert("You must write something")
    }else if(matchData.length === 0){
        alert("Invalid Entry")
        
    }else{
        axios.post("http://localhost:3000/loginUser",logUser);
        setLogUser({ email: "", password: "" });
        setTimeout(()=>{
            navigate('/')

        },900)
    }
    
    
  }
  
  return (
    <>
      <div className="container">
        <h4 className='text-center'>Join With US</h4>
        <div className="logContainer">
          <h3 className='text-primary text-center'>Login</h3>
          <form>
            <label className='form-label' htmlFor="">E-mail</label>
            <input className='form-control' name='email' value={logUser.email} type="text" placeholder='Enter Your Email' onChange={handleChange} />
            <label className='form-label' htmlFor="">Password</label>
            <input className='form-control' name='password' value={logUser.password} type="password" placeholder='Enter Your Password' onChange={handleChange} />
            <p className='text-center mt-2'>Don't have account ?<Link to="/signUp">Signup</Link></p>
            <button onClick={handleSubmit} className='btn btn-primary mt-2'>Login</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Login
