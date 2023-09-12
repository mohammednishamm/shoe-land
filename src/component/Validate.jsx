import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Perform validation here, e.g., checking against a database or hardcoded values
    // if (username === 'user' && password === 'password') {
    //   // Successful login, redirect to a protected page
    //   window.location.href = '/protected-page'; 
    // } 
    if(!username || !password){
    
      setError('full fill');
      return
    }if(username.length<8){
        setError("user name must be 8character");
        return
    }
     
    if(password.length<8){
    setError("password  must be 8character");
    return
}


  };

  return (
    <div className='loop'>
      <h2 className='welcome'>WELCOME</h2>
      {error && <p>{error}</p>}
      
      <div className='liik'>
        <label className='true'>Username</label>
        <input className='liiik'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='liik'>
        <label className='true meee'>Password</label>
        <input className='liiik '
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='look'>
      <button className='look1' onClick={handleLogin}>Login</button>
      <label><a className='href' href="">Forgot Password</a></label>
      <span className='not'>Not a member?<a className='not1' href="">Sigup here</a></span>
      </div>
    </div>
  );
};

export default Login;
