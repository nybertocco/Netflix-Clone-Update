import Header from "../components/header";
import Main from "../components/main";
import "./index.css";

import Carousel from "../components/carousel";

import serie1 from "../assets/serie1.webp";
import serie2 from "../assets/serie2.webp";
import serie3 from "../assets/serie3.webp";
import serie4 from "../assets/serie4.webp";
import serie5 from "../assets/serie5.webp";
import serie6 from "../assets/serie6.webp";
import serie7 from "../assets/serie7.webp";
import serie8 from "../assets/serie8.webp";
import serie9 from "../assets/serie9.webp";
import serie10 from "../assets/serie10.webp";
import serie11 from "../assets/serie11.webp";
import serie12 from "../assets/serie12.webp";

export default function Series() {
  const series = [
    serie1,
    serie2,
    serie3,
    serie4,
    serie5,
    serie6,
    serie7,
    serie8,
    serie9,
    serie10,
    serie11,
    serie12,
  ];

  return (
    <div>
      <Header />
      <Main />

      <h2>Séries</h2>
      <Carousel titulo="Séries" imagens={series} />
    </div>
  );
}
