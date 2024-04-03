import React, { useState } from "react";
import "./Auth.scss";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Auth = () => {
  const [value, setValue] = useState({
    login: null,
    password: "",
  });
  const { mutate: addUser } = useMutation({
    mutationKey: "postUser",
    mutationFn: () =>
      axios
        .post("http://45.89.190.42:8000/user/validate/", value)
        .then(({ data }) => {
          localStorage.setItem("user", JSON.stringify(data[0]));
          return data;
        }),
  });
  if (localStorage.getItem("user")) {
    return <Navigate to={"/AdminPage/FirstAdmin/:1"} />;
  }

  return (
    <div className="root-auth">
      <div className="logo"></div>
      <div className="form">
        <div className="form--inputs">
          <input
            className="form__element"
            type="text"
            placeholder="Логин"
            value={value.phone}
            onChange={(e) => setValue({ ...value, login: e.target.value })}
          />
          <hr />
          <input
            className="form__element"
            type="password"
            placeholder="Пароль"
            value={value.password}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
        </div>
        <div className="form--buttons">
          <button className="form__element" type="submit" onClick={addUser}>
            Войти
          </button>
          <input
            className="form__element"
            type="submit"
            value="напомнить пароль"
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
