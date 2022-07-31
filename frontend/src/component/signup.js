import React, {useState} from 'react'
import Navbar from './Navbar';

const Signup = () => {

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('');
    const [password, setPassword]=useState('');
    const submitForm = async (e) => {
        const response = await fetch('http://localhost:5000/api/user/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                password
            }),
        })

        const data = await response.json()
        if(data.user){
            alert("Signup Succesfull")
            window.location.href='/signin'
        }else{
            alert("error")
        }

    }
    return (
        <>
            <Navbar/>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="phone"  value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="phone" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}  className="form-control" id="password" />
            </div>
            <div className="mb-3">
                <button type="submit" onClick={submitForm} className="btn btn-primary mb-3">Signup</button>
            </div>
        </>
    )
}

export default Signup