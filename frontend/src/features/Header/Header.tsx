import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import * as api from '../../App/api';
import { Res } from '../Registration/types/User';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';



function Header(): JSX.Element {
  const { user } = useSelector((state: RootState) => state.userState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleLogout(): void {
    console.log(1);

    api.logout().then((res: Res) => res.message === 'Session destroy' && dispatch({ type: 'LOGOUT' }));
    navigate('/');
  }

  return (

    < div className="app__container">
      <nav className="header__nav">
        <div className="header__container">
          <ul className="header__menu">
            {user ? (
              <>
           <li>
              <NavLink className="header__item" to="/">
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink className="header__item" to="/results">
                Результаты
              </NavLink>
            </li>
             <li>
             <NavLink className="header__item" to="/" onClick={handleLogout}>
               Выйти
             </NavLink>
           </li>
           </>
            ) : (
              <>
              <li>
              <NavLink className="header__item" to="/registration">
                Регистрация
              </NavLink>
            </li>
            <li>
              <NavLink className="header__item" to="/login">
                Войти
              </NavLink>
            </li></>
            )}


          </ul>
        </div>
      </nav>
    </div>



  );
}

export default Header;