import React, { useEffect, useState } from 'react'

const UserDashboard =  () => {
    const [userData, setUserData]=useState({});
    const Details=async()=>{
        const res=await fetch("http://localhost:5000/api/user/getDetails",{
            headers:{
                'x-access-token':localStorage.getItem('token')
            },
        })
        const data= await res.json();
        console.log(data);
        if(data.status==='ok'){
            setUserData(data.user);
        }else{
            alert(data.error);
        }
    }

    useEffect(()=>{
        Details();
    },[]);
  return (
    <>
        <h1>{userData.name}</h1>
        <h1>{userData.email}</h1>
        <h1>{userData.phone}</h1>
    </>
  )
}

export default UserDashboard;