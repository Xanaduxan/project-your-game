import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as api from '../../App/api';
import { Res } from './types/User';


export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logo = (e:React.FormEvent):void => {
    e.preventDefault();
    console.log(email, password);
    
      api.login({email, password}).then((res:Res) => {
        if (res.message === 'Ваш login или password указаны не верно') {
          console.log(email, password);
          
          navigate('/login');
        } else {
          dispatch({ type: 'REGISTRATION', payload: res });
          navigate('/');
        }
       });
    
  };

  return (
    <div className='container'>
<form onSubmit={logo}>
    <div className="mb-3">
      <label className="form-label" htmlFor="exampleCheck1">Email</label>
      <input 
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      name="email" 
      type="email" 
      className="form-control" 
      />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input 
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      name="password" 
      type="password" 
      className="form-control" 
      />
    </div>
    <button type="submit" className="btn btn-primary">Войти</button>
  </form>
    </div>
    
  )
}