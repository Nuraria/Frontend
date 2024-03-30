import React from 'react';
import './Auth.scss';

const Auth = () => {
  return (
    <div className="root-auth">
      <div className="logo"></div>
      <div className="form">
        <div className="form--inputs">
          <input className="form__element" type="text" placeholder="Номер телефона" />
          <hr />
          <input className="form__element" type="password" placeholder="Пароль" />
        </div>
        <div className="form--buttons">
          <input className="form__element" type="submit" value="Войти" />
          <input className="form__element" type="submit" value="напомнить пароль" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
