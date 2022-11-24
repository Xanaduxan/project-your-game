import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Header.css'



function Header(): JSX.Element {
  return (
      < div className="app__container"><nav className="header__nav">
        <div className="header__container">
          <ul className="header__menu">
            <li>
              <NavLink className="header__item" to="/main">
                Главная
              </NavLink>
            </li>

            <li>
              <NavLink className="header__item" to="/results">
                Результаты
              </NavLink>
            </li><></>
            <><li>
              <NavLink className="header__item" to="/registration">
                Регистрация
              </NavLink>
            </li>
            <li>
              <NavLink className="header__item" to="/login">
                Войти
              </NavLink>
            </li>
            </><li>
              <NavLink className="header__item" to="/logout">
                Выйти
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
      </div>
      
    
    
  );
}

export default Header;