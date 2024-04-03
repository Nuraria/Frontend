import React, { useRef, useState } from "react";
import "./Composition.css";
import Arrow from "../../assets/svg/Icon arrow back ios new.svg";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Button from "../../components/Button/Button";

export default function Composition() {
  const { id } = useParams();
  const { data: composition = [] } = useQuery({
    queryKey: "getComposition",
    queryFn: () =>
      axios
        .get(`http://localhost:8000/collection/${id}`)
        .then(({ data }) => data),
  });
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);
  const [value, setValue] = useState({
    name: "",
    description: "",
    price: 0,
  });
  const ref = useRef(null);
  const { mutate } = useMutation({
    mutationKey: "postPoint",
    mutationFn: () =>
      axios.post("http://localhost:8000/product/", {
        parent_collection: id,
        name: "string",
        description: "string",
        price: value.price,
        positionx: x / ref.current.offsetWidth,
        positiony: y / ref.current.offsetHeight,
      }),
  });
  const { data = [] } = useQuery({
    queryKey: "getCollectionWithPoint",
    queryFn: () =>
      axios.get(`http://localhost:8000/product/${id}`).then(({ data }) => data),
  });
  console.log(data);

  const { mutate: deleteProduct } = useMutation({
    mutationKey: "delete",
    mutationFn: () =>
      axios.delete(`http://localhost:8000/product/${productId}`),
  });
  const [productId, setProductId] = useState(null);
  return (
    <div>
      <Link to={-1}>
        <img src={Arrow} alt="" className="arrow" />
      </Link>
      <div className="ob_container">
        <div
          onClick={(e) => {
            if (e.target.id === "id") {
              setX(e.nativeEvent.offsetX);
              setY(e.nativeEvent.offsetY);
            }
            if (e.target.id === "id2") {
            }
          }}
          className="container_photo"
          style={{ position: "relative" }}
          ref={ref}
        >
          {data.map(({ id, positiony, positionx }) => (
            <div
              id={id}
              style={{
                position: "absolute",
                width: "20px",
                height: "20px",
                backgroundColor: "red",
                top: positiony * ref.current?.offsetHeight,
                left: positionx * ref.current?.offsetWidth,
                transform: "translate(-50%, -50%)",
                zIndex: 50,
                borderRadius: "50%",
              }}
              onClick={() => setProductId(id)}
            ></div>
          ))}
          {data.length <= 5 && (
            <div
              id={id}
              style={{
                position: "absolute",
                width: "20px",
                height: "20px",
                backgroundColor: "blue",
                top: y,
                left: x,
                transform: "translate(-50%, -50%)",
                zIndex: 50,
                borderRadius: "50%",
              }}
            ></div>
          )}
          <img
            id="id"
            src={`http://localhost:8000/collection/img/${composition[0]?.img}`}
            alt=""
            className="container_photo"
          />
        </div>

        {localStorage.getItem("user") && (
          <div className="glav_text">
            <div className="group">
              <label
                className="bottom_photo"
                style={{ backgroundColor: "#e1e1e1e1" }}
                htmlFor="file"
              >
                {/* <img src={Uploadsvg} alt="" className="bottom_photo_in" /> */}
                <p>добавить фото</p>
                <input
                  type="file"
                  name=""
                  id="file"
                  style={{ display: "none" }}
                />
              </label>
              <div className="padd">
                <p>Название, описание, прайс</p>
                <input
                  className="input_text"
                  onChange={(e) => setValue({ ...value, name: e.target.value })}
                  placeholder="Название"
                />
                <input
                  type="number"
                  className="input_text"
                  value={value.price}
                  onChange={(e) =>
                    setValue({ ...value, price: e.target.value })
                  }
                  placeholder="Стоимость"
                />
              </div>
            </div>
            <textarea
              className="input_text"
              cols="30"
              rows="10"
              onChange={(e) =>
                setValue({ ...value, description: e.target.value })
              }
              placeholder="Состав/описание"
            ></textarea>
            <Button doneFunc={mutate} deleteFun={deleteProduct} />
          </div>
        )}
      </div>
    </div>
  );
}
