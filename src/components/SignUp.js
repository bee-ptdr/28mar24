import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate()
    const [signUser, setSignuser] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setSignuser({ ...signUser, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(signUser.name === "" && signUser.email === "" && signUser.password === ""){
            alert("You Must Write Somethind")
        }else{
            axios.post("http://localhost:3000/signUser",signUser)
            setSignuser({ name: "", email: "", password: "" });
            setTimeout(()=>{
                navigate('/')
            },500)
        }
    }
    return (
        <>
            <div className="container">
                <h4 className='text-center'>Join With US</h4>
                <div className="logContainer">
                    <h3 className='text-primary text-center'>SignUp</h3>
                    <form>
                        <label className='form-label' htmlFor="">Full Name</label>
                        <input className='form-control' name='name' value={signUser.name} type="text" placeholder='Enter Your Full Name' onChange={handleChange} />
                        <label className='form-label' htmlFor="">E-mail</label>
                        <input className='form-control' name='email' value={signUser.email} type="text" placeholder='Enter Your Email' onChange={handleChange} />
                        <label className='form-label' htmlFor="">Password</label>
                        <input className='form-control' name='password' value={signUser.password} type="password" placeholder='Enter Your Password' onChange={handleChange} />
                        <p className='text-center mt-2'>Already have account ?<Link to="/Login">Login</Link></p>
                        <button className='btn btn-primary mt-2' onClick={handleSubmit}>SignUp</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
