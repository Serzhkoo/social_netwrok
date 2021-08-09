import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

export function Header(props: HeaderPropsType) {

  return (
    <header className={style.header}>
      <img src='http://pngimg.com/uploads/eagle/eagle_PNG1229.png' alt=""/>
      <div className={style.loginBlock}>
        <NavLink to={'/login'}>{props.isAuth
          ? <div>{props.login} <button onClick={props.logout}>Log out</button>
          </div>
          : 'Login'}</NavLink>
      </div>
    </header>
  );
}