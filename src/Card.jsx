const Card = ({ nome, imagem, id, tipo, fraqueza}) => {
  const tipoPrincipal = tipo[0].trim();

  return (
    <div
      className="card"
      style={{
        backgroundColor:
          tipoPrincipal === "Planta"
            ? "#4fac20"
            : tipoPrincipal === "Fogo"
            ? "#F08030"
            : tipoPrincipal === "Agua"
            ? "#6890F0"
            : tipoPrincipal === "Eletrico"
            ? "#ddcf3c"
            : tipoPrincipal === "Inseto"
            ? "#9bad35"
            : tipoPrincipal === "Normal"
            ? "#ccc"
            : tipoPrincipal === "Psiquico"
            ? "#f858dd"
            : "#69045b"
      }}
    >
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p>{id}</p>
      <p>Tipo: {tipo.join(", ")}</p>
      <p>Fraqueza: {fraqueza.join(", ")}</p>
      
    </div>
  );
};

export default Card;