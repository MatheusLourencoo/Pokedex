const Card = ({ nome, imagem, id, tipo }) => {
  const tipoPrincipal = tipo[0].trim();

  return (
    <div
      className="card"
      style={{
        backgroundColor:
          tipoPrincipal === "Planta"
            ? "#78C850"
            : tipoPrincipal === "Fogo"
            ? "#F08030"
            : tipoPrincipal === "Agua"
            ? "#6890F0"
            : tipoPrincipal === "Eletrico"
            ? "#ddcf3c"
            : tipoPrincipal === "Inseto"
            ? "#616c25"
            : tipoPrincipal === "Normal"
            ? "#ccc"
            : tipoPrincipal === "Psiquico"
            ? "#F85888"
            : "#360630"
      }}
    >
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p>{id}</p>
      <p>{tipo.join(", ")}</p>
    </div>
  );
};

export default Card;