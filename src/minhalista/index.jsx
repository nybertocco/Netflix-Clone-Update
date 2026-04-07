import { useEffect, useState } from "react";
import { getLista, removeLista } from "../utils/lista";
import "./index.css";

import Header from "../components/header";
import Carousel from "../components/carousel";

export default function MinhaLista() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    setLista(getLista());
  }, []);

  function handleRemove(item) {
    removeLista(item);
    setLista(getLista());
  }

  if (lista.length === 0) {
    return (
      <div className="minhaLista">
        <Header />
        <h1>Minha Lista</h1>
        <p className="listaVazia">Sua lista está vazia.</p>
      </div>
    );
  } else {
    return (
      <div className="minhaLista">
        <Header />
        <h1>Minha Lista</h1>

        <Carousel
          imagens={lista}
          onRemove={handleRemove}
          mostrarRemover={true}
        />
      </div>
    );
  }
}
