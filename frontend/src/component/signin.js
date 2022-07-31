import React, {useState} from 'react'
import Navbar from './Navbar';
const Signin = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const signin = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email, 
                password
            })
        })
        const data = await res.json();
        console.log(data);
        if (data) {
            localStorage.setItem('token', data.token);
            window.location.href="/dashboard"
        } else {
            alert("Please Check Your Username and Password");
        }
    }
    return (
        <>
            <Navbar/>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}  className="form-control" id="password" />
            </div>
            <div className="mb-3">
                <button type="submit" onClick={signin} className="btn btn-primary mb-3">Signin</button>
            </div>
        </>
    )
}

export default Signin