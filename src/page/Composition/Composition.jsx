import React from "react";
import "./Composition.css";
import Arrow from "../../assets/svg/Icon arrow back ios new.svg";
import { Link } from "react-router-dom";

export default function Composition() {
  return (
    <div>
      <Link to={-1}>
        <img src={Arrow} alt="" className="arrow" />
      </Link>
      <div className="ob_container">
        <div className="container_photo">
          <img
            src="https://get.pxhere.com/photo/man-person-girl-woman-camera-photography-portrait-spring-red-lens-color-autumn-canon-romance-season-taking-photo-photograph-beauty-emotion-photo-shoot-portrait-photography-1169775.jpg"
            alt=""
            className="container_photo"
          />
        </div>

        <div className="glav_text">
          <div className="bottom_photo">
            <img
              src="https://get.pxhere.com/photo/man-person-girl-woman-camera-photography-portrait-spring-red-lens-color-autumn-canon-romance-season-taking-photo-photograph-beauty-emotion-photo-shoot-portrait-photography-1169775.jpg"
              alt=""
              className="bottom_photo"
            />
          </div>
          <div className="padd">
            <h3>Delicious Menu</h3>
            <p>Tasty Creations</p>
            <p>$12.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}
