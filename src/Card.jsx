import Etiqueta from "./components/Etiqueta";
import { getCor } from "./components/cores";

const Card = ({ nome, imagem, id, tipo, fraqueza }) => {
  const tipoPrincipal = tipo[0].trim();

  return (
    <div
      className="card"
      style={{ backgroundColor: getCor(tipoPrincipal) }}
    >
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p>{id}</p>

      <p>
        Tipo: {tipo.map((t) => <Etiqueta key={t} tipo={t} />)}
      </p>

      <p style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        Fraqueza: {fraqueza.map((t) => <Etiqueta key={t} tipo={t} />)}
      </p>
    </div>
  );
};

export default Card;