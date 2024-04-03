import React from "react";
import Header from "../../components/header/Header";
import Photo from "../../components/photo/Photo";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Home() {
  const categoryId = useSelector((state) => state.category.categoryId);
  const { data: collections } = useQuery({
    queryKey: ["getCollection", categoryId],
    queryFn: () =>
      axios
        .get(
          `http://localhost:8000/collection/${
            categoryId !== 0 ? `category/${categoryId}` : ""
          }`
        )
        .then(({ data }) => data),
  });
  return (
    <div className="App">
      <Header isAdmin={false} />
      <div className="container">
        {collections?.map(({ img, id }) => (
          <Photo
            url={`http://localhost:8000/collection/img/${img}`}
            id={id}
            key={id}
          />
        ))}
      </div>
    </div>
  );
}
