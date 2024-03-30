import React, { useState } from 'react';
import './TwoAdmin.css';
import { Link } from 'react-router-dom';
import Arrow from '../../../assets/svg/Icon arrow back ios new.svg';
import Uploadsvg from '../../../assets/svg/Icon upload.svg';
import Button from '../../../components/Button/Button';

export default function TwoAdmin() {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');

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
          <div className="group">
            <div className="bottom_photo">
              <img src={Uploadsvg} alt="" className="bottom_photo_in" />
              <p>добавить фото</p>
            </div>
            <div className="padd">
              <p>Название, описание, прайс</p>

              <input
                type="text"
                className="input_text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Название"
              />
              <input
                type="text"
                className="input_text"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                placeholder="Стоимость"
              />
            </div>
          </div>
          <textarea
            className="input_text"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Состав/описание"></textarea>
          <Button />
        </div>
      </div>
    </div>
  );
}
