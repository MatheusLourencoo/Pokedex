import { useState } from "react";
import { data } from "./data";
import Card from "./Card";
import imagemPokedexLogo from "./assets/imagemPokedexLogo.png";
import "./App.css";

function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("name");

  const categorias = ["name", "id", "tipo", "fraqueza"];

  const listaFiltrada = data.filter((pokemon) => {
    const termo = pesquisa.toLowerCase().trim();
    if (termo === "") return true;

    const valorDaCategoria = pokemon[categoriaAtiva];

    if (Array.isArray(valorDaCategoria)) {
      return valorDaCategoria.some((item) =>
        item.toLowerCase().includes(termo),
      );
    }

    return valorDaCategoria.toString().toLowerCase().includes(termo);
  });

  return (
    <>
      <img className="logoPokedex" src={imagemPokedexLogo} alt="logo Pokedex" />

      <div>
        <input
          placeholder={`Pesquisar por ${categoriaAtiva}...`}
          className="pesquisa"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />

        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          {categorias.map((i) => (
            <button
              key={i}
              className={categoriaAtiva === i ? "active" : ""}
              onClick={() => setCategoriaAtiva(i)}
            >
              {i.charAt(0).toUpperCase() + i.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        {listaFiltrada.map((pokemon) => (
          <Card
            key={pokemon.id}
            imagem={pokemon.imagem}
            nome={pokemon.name}
            id={pokemon.id}
            tipo={pokemon.tipo}
            fraqueza={pokemon.fraqueza}
          />
        ))}
      </div>
    </>
  );
}

export default App;
