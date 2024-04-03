import "./Header.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import cart from "../../assets/svg/group.svg";
import smile from "../../assets/svg/smile.svg";
import add from "../../assets/svg/add.svg";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../store/slices/categorySlice";

function Header({ position, isAdmin }) {
  const categoryId = useSelector((state) => state.category.categoryId);
  const [id, setId] = useState(-1);
  const dispatch = useDispatch();
  const setCategory = (index) => {
    dispatch(setCategoryId(index + 1));
    setId(index);
  };
  const { data: category } = useQuery({
    queryKey: ["getCategory"],
    queryFn: async () => {
      return await axios
        .get("http://localhost:8000/category/")
        .then(({ data }) => data);
    },
  });
  return (
    <header>
      <div className="bg-cart">
        <div className="cart">
          <img src={cart} alt="" />
          <span className="text">Корзина</span>
        </div>
      </div>
      <div style={{ paddingLeft: "70px", display: "flex", gap: "20px" }}>
        <div
          className="block_header"
          onClick={() => {
            setId(-1);
            dispatch(setCategoryId(0));
          }}
        >
          <img
            src={categoryId === 0 ? smile : ""}
            className="store"
            style={{
              backgroundColor: categoryId === 0 ? "white" : "red",
              textIndent: "-999px",
            }}
          />
          <span className="text active">все</span>
        </div>
        {category?.map(({ category_name, color }, index) => (
          <div
            key={index}
            className="block_header"
            onClick={() => setCategory(index)}
          >
            <img
              className="store"
              src={index === id ? smile : ""}
              style={{
                backgroundColor: index === id ? "white" : color,
                textIndent: "-9999px",
              }}
            />
            <span className={index === categoryId ? "text active" : "text"}>
              {category_name}
            </span>
          </div>
        ))}
      </div>
      {isAdmin && (
        <div className="block_header">
          <div className="store" style={{ backgroundColor: "transparent" }}>
            <img className="addImg" src={add} alt="" />
          </div>
          <Link to="#" className="text">
            Добавить
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
