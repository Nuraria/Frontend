import React from "react";
import "./Photo.css";
import svg from "../../assets/svg/Icon heart.svg";
import { Link } from "react-router-dom";
export default function Photo({ url, id }) {
  return (
    <Link to={`/composition/${id}`} className="photo_position">
      <img src={svg} alt="" className="svg" />
      <img src={url} className="photo" />
    </Link>
  );
}
