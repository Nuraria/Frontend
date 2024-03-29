import React, { useState } from "react";
import Header from "../../../components/header/Header";
import "./FirstAdmin.css";
import "../../../components/header/Header.css";
import { Link } from "react-router-dom";
import Home from "../../Home/Home";
import Photo from "../../../components/photo/Photo";
import Uploadsvg from "../../../assets/svg/Icon upload.svg";
import Button from "./Button/Button";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function FirstAdmin() {
  const position = [
    {
      title: "Завтрак",
      color: "#ae88f1",
    },
    {
      title: "Обед",
      color: "#c3f2cb",
    },
    {
      title: "Ужин",
      color: "#ffcc00",
    },

    {
      title: "Гастро",
      color: "#4cd964",
    },

    {
      title: "Алк",
      color: "#ff2d55",
    },

    {
      color: "#ffbeba",
    },
  ];
  const photo = [
    "https://get.pxhere.com/photo/man-person-girl-woman-camera-photography-portrait-spring-red-lens-color-autumn-canon-romance-season-taking-photo-photograph-beauty-emotion-photo-shoot-portrait-photography-1169775.jpg",
    "https://ogorodniku.com/uploads/posts/2023-01/1674192794_ogorodniku-com-p-peizazhi-prirodi-foto-1.jpg",
    "https://urgi-stv.ru/wp-content/uploads/2/c/a/2ca07ff0390ccfd7fc4392f6c5416bbc.jpeg",
    "https://img2.akspic.ru/attachments/originals/1/3/9/8/2/128931-flora-peyzash-okruzhayushchaya_sreda-gora-prirodnyj_landshaft-3840x2400.jpg",
    "https://cdt-khibiny.ru/wp-content/uploads/2022/02/fotokross-molodye-kadry.jpg",
    "https://images.hdqwalls.com/download/alberta-canada-4i-3840x2400.jpg",
    "https://urgi-stv.ru/wp-content/uploads/e/3/3/e33601cff70ac629ed2e0c140171ac6a.jpeg",
    "https://get.pxhere.com/photo/landscape-mountain-camera-photography-bicycle-dslr-vehicle-taking-photo-tripod-965509.jpg",
    "http://vsegda-pomnim.com/uploads/posts/2022-04/1650916178_25-vsegda-pomnim-com-p-krasivie-peizazhi-gor-foto-32.jpg ",
  ];
  const [value, setValue] = useState("");
  //Отправка Категорий
  const { mutate: createCategory, isLoading: isPostCategoryLoading } =
    useMutation({
      mutationKey: "createCategory",
      mutationFn: async (body) => {
        return await axios.post(`${http}category/`, body);
      },
      onSuccess: () => refetchCategories(),
    });

  return (
    <>
      <div className="content_admin">
        <Header position={position} isAdmin={true} />
        <p className="heading">Название и цвет раздела</p>
        <div className="input_and_circle">
          <input
            type="text"
            className="input_text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <div className="container_circle">
            {position.map(({ color }) => (
              <button
                className="circle_one block_circle"
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="uploadsvg">
            <img src={Uploadsvg} alt="" />
            <p>добавить фото</p>
          </div>
          {photo.map((item) => (
            <Photo url={item} key={item} isAdmin={true} />
          ))}
        </div>
        <Button />
      </div>
    </>
  );
}
