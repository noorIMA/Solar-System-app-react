import React,{useState} from "react";
// import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'


function Login() {
    const [email,setEmail]= useState('');
    const [password,setPassword] = useState('');
    
    const navigate=useNavigate();

    const RegistorPage=() => {
        navigate("/rigistor")
    }

    const handleLogin = async () => {
        // try{
        //     const response = await fakeAuthentication(email, password);
        //     if(response.success){
        //         console.log('login success');
        //     }else {
        //         console.log('login failed')
        //     }
        
        // } catch (error){
        //     console.log("Error during login:",error);
        // }
    };

    // const fakeAuthentication = (email,password) => {
    //     return new Promise((resolve , reject )=>{
    //         setTimeout(() => {
    //             if (email === 'user@example.com' && password === 'password'){
    //                 resolve({ success: true});
    //             }else{
    //                 resolve({success:false});
    //             }
    //         },1000);
    //         });
    // };

    return(
        <div>
            <h2>Login</h2>
            <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            
            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword ( e.target.value )}
                />

            <button onClick={handleLogin}>Login</button>
            <button onClick={RegistorPage}>Registor</button>
        </div>
    );



}

export default  Login;