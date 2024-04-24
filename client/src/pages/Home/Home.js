import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

export default function Home() {
    const [user, setUser] = useState({});
   
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
