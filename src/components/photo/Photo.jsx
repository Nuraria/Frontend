import React from "react";
import "./Photo.css";
import svg from "../../assets/svg/Icon heart.svg";
import { Link } from "react-router-dom";
export default function Photo({ url }) {
  return (
    <Link to={"/composition/1"} className="photo_position">
      <img src={svg} alt="" className="svg" />
      <img src={url} className="photo" />
    </Link>
  );
}
