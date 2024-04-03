import React, { useState } from "react";
import "./TwoAdmin.css";
import { Link, useNavigate } from "react-router-dom";
import Arrow from "../../../assets/svg/Icon arrow back ios new.svg";
import Uploadsvg from "../../../assets/svg/Icon upload.svg";
import Button from "../../../components/Button/Button";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function TwoAdmin() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [image, setImage] = useState(null);
  const formData = new FormData();
  formData.append("file", image);
  formData.append("category_id", value);
  const { data: category } = useQuery({
    queryKey: ["getCategoryForAdmin"],
    queryFn: async () => {
      return await axios
        .get("http://localhost:8000/category/")
        .then(({ data }) => data);
    },
  });
  const navigate = useNavigate();
  const { mutate: addPhoto } = useMutation({
    mutationKey: "addCollection",
    mutationFn: () =>
      axios
        .post("http://localhost:8000/collection/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => navigate(-1)),
  });
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
            <label className="bottom_photo" htmlFor="file">
              <img src={Uploadsvg} alt="" className="bottom_photo_in" />
              <p>добавить фото</p>
              <input
                type="file"
                name=""
                id="file"
                onChange={(e) => setImage(e.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
            <div className="padd">
              <p>Название, описание, прайс</p>
              <select
                onChange={(e) => setValue(e.target.value)}
                className="input_text"
              >
                <option>Выберите категорию</option>
                {category?.map(({ category_name }, i) => (
                  <option value={i}>{category_name}</option>
                ))}
              </select>
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
            placeholder="Состав/описание"
          ></textarea>
          <Button doneFunc={addPhoto} />
        </div>
      </div>
    </div>
  );
}
