import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as api from '../../App/api';
import { Res } from './types/User';

export default function Registration(): JSX.Element {
    const navigate = useNavigate();
    const {name} = useParams();
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');


    const rega = (e:React.FormEvent):void => {
        e.preventDefault();
        console.log(email, password, login);
          api.registration({ email, password, login, score: 0 }).then((res:Res) => {
            console.log(res.message);
            
            if (res.message === 'такой Email уже зарегистрирован') {
              navigate('/login');
            } else {
              dispatch({ type: 'REGISTRATION', payload: res });
              navigate('/');
            }
           });
        
      };

    return (
        <div className='container'>
            <form onSubmit={rega}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="exampleCheck1">Login</label>
                    <input 
                    onChange={(e) => setLogin(e.target.value)}
                    value={login}
                    name="login" 
                    type="text" 
                    className="form-control" 
                    />
                </div>
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
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                    onChange={(e) => setPassword2(e.target.value)}
                    value={password2} 
                    name="password2" 
                    type="password" 
                    className="form-control" 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
            </form>
        </div>

    )
}