import React from "react";
import "./AutoAdmin.css";
import { Link } from "react-router-dom";
//import React, { useState } from "react";

export default function AutoAdmin() {
  return (
    <>
      <div className="card">
        <p>Пароль:</p>
        <p>Логин:</p>
      </div>
      <button className="button">Войти</button>
      <Link too={-1} className="text">напомнить пароль</Link>
    </>
  );
}
