import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Home.css';
import config from '../../hooks/config';

export default function Home() {
    const [user, setUser] = useState({});
   const navigate=useNavigate()
           
    useEffect(()=>{
    const id=config()
    if(!id){navigate("/login")}
    },[])
   
    return (
        <div className="container">
        <div className='heading'><h1 style={{ fontSize: '49px', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>YogaMate</h1>
            <p style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif', fontStyle: 'italic'}}>AI Powered Health Companion</p></div>
            
            <div className="btn-section">
                <Link to='/start'>
                    <button className="btn start-btn">Let's Start</button>
                </Link>
            </div>
        </div>
    );
}
