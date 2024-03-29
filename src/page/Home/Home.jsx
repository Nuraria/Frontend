import React from "react";
import Header from "../../components/header/Header";
import Photo from "../../components/photo/Photo";

export default function Home() {
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

  return (
    <div className="App">
      <Header position={position} isAdmin={false} />
      <div className="container">
        {photo.map((item) => (
          <Photo url={item} key={item} />
        ))}
      </div>
    </div>
  );
}
