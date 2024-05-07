import React,{useState} from 'react'
import './login.css';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const navigate=useNavigate()
    const [username,setUsername]=useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age,setAge]=useState('')
    const[user,setUser]=useState({})
    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:8800/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username,email, password,age }),
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
        const responseData = await response.json();
        setUser(responseData)
        localStorage.clear();
        const user = JSON.stringify(responseData);
        localStorage.setItem('user', user);
        console.log('Login successful');
        if(responseData._id)
        {
          
          navigate('/')
        }
      } catch (error) {
        console.error('Login error:', error.message);
        
      } 
     
    };
  


  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>SignIn</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
       
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Signup