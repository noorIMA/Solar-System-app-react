import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"


function Register(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleRegister = () => {
        console.log('Registering With:',email,password);
    };

    const navigate= useNavigate();
    const loginPage= () => {
            navigate("/");
    }


    return(
        <div>
            <h2>Register</h2>
            <input 
                type="email"
                placeholder='Email'
                value={email} 
                onChange={(e)=> setEmail ( e.target.value )} 
                />

            <input 
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword (e.target.value)}
                />

            <button onClick={handleRegister}>Register</button>
            <button onClick={loginPage} >Back to Login </button>
        </div>
    );


}

export default  Register;