import React, { useState } from "react";
import Header from "../../../components/header/Header";
import "./FirstAdmin.css";
import "../../../components/header/Header.css";
import Photo from "../../../components/photo/Photo";
import Uploadsvg from "../../../assets/svg/Icon upload.svg";
import Button from "../../../components/Button/Button";
import colors from "../../../assets/svg/colors.png";
import Modal from "../../../components/modal/modal";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";

export default function FirstAdmin({ http, deleteFunc }) {
  const categoryIdAdmin = useSelector((state) => state.category.categoryId);
  const { data: collections } = useQuery({
    queryKey: ["getCollectionForAdmin ", categoryIdAdmin],
    queryFn: () =>
      axios
        .get(
          `http://localhost:8000/collection/${
            categoryIdAdmin !== 0 ? `category/${categoryIdAdmin}` : ""
          }`
        )
        .then(({ data }) => data),
  });
  const [value, setValue] = useState("");
  const [color, setColor] = useState("");
  console.log(value);
  const queryClient = useQueryClient();
  //Отправка Категорий
  const { mutate: createCategory, isLoading: isPostCategoryLoading } =
    useMutation({
      mutationKey: "createCategory",
      mutationFn: async (body) => {
        return await axios.post(`http://localhost:8000/category/`, body);
      },
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ["getCategory"] }),
    });
    const categoryId = useSelector(state => state.category.categoriy)

  return (
    <>
      <div className="content_admin">
        <Header isAdmin={true} />
        <p className="heading">Название и цвет раздела</p>
        <div className="input_and_circle">
          <input
            type="text"
            className="input_text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <label className="container_circle" htmlFor="color">
            <img src={colors} alt="" style={{ width: "32px" }} />
            <input
              type="color"
              name=""
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              style={{ width: "0", height: "0", display: "none" }}
            />
          </label>
        </div>

        <div className="container">
          <Link to="/AdminPage/TwoAdmin/:1">
            <div className="uploadsvg">
              <img src={Uploadsvg} alt="" />
              <p>добавить фото</p>
            </div>
          </Link>
          {collections?.map(({ img, id }) => (
            <Photo
              url={`http://localhost:8000/collection/img/${img}`}
              id={id}
              key={id}
            />
          ))}
        </div>
        <Button
          doneFunc={() =>
            createCategory({
              category_name: value,
              color: color,
            })
          }
          deleteFun={() => {}}
        />
        <Modal />
      </div>
    </>
  );
}
