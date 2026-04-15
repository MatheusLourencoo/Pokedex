import { getCor } from "./cores";

const Etiqueta = ({ tipo }) => (
  <span
    style={{
      backgroundColor: getCor(tipo),
      borderRadius: "20px",
      padding: "2px 10px",
      marginLeft: "5px",
      fontWeight: "bold",
      fontSize: "12px",
      color: "#fff",
    }}
  >
    {tipo}
  </span>
);

export default Etiqueta;