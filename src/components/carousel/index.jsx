import "./index.css";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { addLista } from "../../utils/lista";

export default function Carousel({ imagens, onRemove, mostrarRemover }) {
  const [index, setIndex] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [itemWidth, setItemWidth] = useState(200);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    function updateWidth() {
      if (window.innerWidth <= 480) setItemWidth(130);
      else if (window.innerWidth <= 768) setItemWidth(160);
      else setItemWidth(200);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function getVisiveis() {
    if (window.innerWidth <= 480) return 2;
    if (window.innerWidth <= 768) return 3;
    return 5;
  }

  function next() {
    setIndex((prev) =>
      prev < imagens.length - getVisiveis() ? prev + 1 : prev,
    );
  }

  function prev() {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }

  function handleTouchStart(e) {
    setTouchStart(e.touches[0].clientX);
  }

  function handleTouchEnd(e) {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) next();
    if (diff < -50) prev();
  }

  function handleAdd(item) {
    addLista(item);
    setMensagem("Adicionado à minha lista!");
    setTimeout(() => {
      setMensagem("");
    }, 2000);
  }

  return (
    <div className="carousel">
      {mensagem && <p className="msg-lista">{mensagem}</p>}

      <button className="carousel-button left" onClick={prev}>
        <FaChevronLeft />
      </button>

      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * (itemWidth + 10)}px)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {imagens.map((img, i) => (
          <div key={i} className="carousel-item">
            <img src={img} alt={`Item ${i}`} />

            {mostrarRemover ? (
              <button className="btn-removeLista" onClick={() => onRemove(img)}>
                ❌ Remover
              </button>
            ) : (
              <button
                className="btn-adicionarLista"
                onClick={() => handleAdd(img)}
              >
                <BsPlusLg />
                <p>Minha lista</p>
              </button>
            )}
          </div>
        ))}
      </div>

      <button className="carousel-button right" onClick={next}>
        <FaChevronRight />
      </button>
    </div>
  );
}
