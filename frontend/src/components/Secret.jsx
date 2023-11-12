import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Secret = () => {
  const logout=()=>{
    navigate('/')
    localStorage.removeItem('token')
  }
  const navigate=useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.post('http://localhost:80/api/routes/secret', {
            token
          });
          if (response.data.message){
            console.log("logged in")
          }
          else{
            navigate('/')
          }
        } else {
          navigate('/')
          console.log('No token found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Secret;
