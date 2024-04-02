import React from "react";
import Button1 from "../../assets/svg/arrow.svg";
import Button2 from "../../assets/svg/delete.svg";
import Button3 from "../../assets/svg/done.svg";
import "./Button.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setClose } from "../../store/slices/closeSlice";

export default function Button({ doneFunc, deleteFun }) {
  const dispatch = useDispatch();

  const deleteFunc = () => {
    deleteFun();
    dispatch(setClose(true));
  };
  return (
    <div className="button_container">
      <Link to={-1}>
        <img src={Button1} alt="" style={{ display: "inline-block" }} />
      </Link>
      <img
        src={Button3}
        alt=""
        style={{ display: "inline-block" }}
        onClick={doneFunc}
      />
      <div className="button2">
        <img
          src={Button2}
          alt=""
          style={{ display: "inline-block" }}
          onClick={deleteFunc}
        />
      </div>
    </div>
  );
}
