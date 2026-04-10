const Card = ({ nome, imagem, id, tipo, fraqueza}) => {
  const tipoPrincipal = tipo[0].trim();

  return (
    <div
      className="card"
      style={{
        backgroundColor:
          tipoPrincipal === "Planta"
            ? "#5cb72f"
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

      <p>Tipo: {tipo.map((t) => (
  <span
    key={t}
    style={{
      backgroundColor:
        t.trim() === "Planta" ? "#72c64a"
        : t.trim() === "Fogo" ? "#be5810"
        : t.trim() === "Agua" ? "#96b2f3"
        : t.trim() === "Eletrico" ? "#eee364"
        : t.trim() === "Inseto" ? "#cce928"
        : t.trim() === "Normal" ? "#777575"
        : t.trim() === "Psiquico" ? "#cb34b2"
        : t.trim() === "Sombrio" ? "#060105"
        : t.trim() === "Venenoso" ? "#a04291"
        : "#41647e",
      borderRadius: "20px",
      padding: "2px 10px",
      marginLeft: "5px",
      color: "#fff",
      fontWeight: "bold",
      fontSize: "12px"
    }}
  >
    {t}
  </span>
))}</p>

      <p style={{display: "flex", flexWrap: "wrap", gap: "5px"}}>
        Fraqueza: {fraqueza.map((t) => (
        <span key={t} 
        style={{
          backgroundColor:
          t === "Planta" ? "#205407"
          : t === "Fogo" ? "#be5810"
          : t === "Terra" ? "#573808"
          : t === "Pedra" ? "#565555"
          : t === "Agua" ? "#96b2f3"
          : t === "Inseto" ? "#cce928"
          : t === "Gelo" ? "#1ed1ec"
          : t === "Voador" ? "#41647e"
          : t === "Eletrico" ? "#eee364"
          : t === "Fantasma" ? "#7f0665"
          : t === "Psiquico" ? "#cb34b2"
          : t === "Sombrio" ? "#060105"
          : "#ff7700",
          borderRadius: "20px",
          padding: "2px 10px",
          marginLeft: "5px",
          fontWeight: "bolder",
          fontSize:"12px",
          color: "#fff"
        }}>
         {t}
        </span>
      ))}</p>
      
    </div>
  );
};

export default Card;