import "./index.css";

import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";

export default function Main() {
  return (
    <main>
      <div className="filme-principal">
        <div className="container">
          <h1 className="title">BREAKING BAD</h1>
          <p className="description">
            Ao saber que tem câncer, um professor passa a fabricar metanfetamina
            pelo futuro da família, mudando o destino de todos.
          </p>
        </div>

        <div className="buttons">
          <button className="button">
            <FaPlay />
            ASSISTIR AGORA
          </button>
          <button className="button">
            <IoIosInformationCircle />
            MAIS INFORMAÇÕES
          </button>
        </div>
      </div>
    </main>
  );
}
