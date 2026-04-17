import { useState } from "react";
import { data } from "./data";
import Card from "./Card";
import imagemPokedexLogo from "./assets/imagemPokedexLogo.png";
import "./App.css";

function App() {
  const [termoBusca, setTermoBusca] = useState("");
  const [tiposSelecionados, setTiposSelecionados] = useState([]);
  const [fraquezasSelecionadas, setFraquezasSelecionadas] = useState([]);
  const [ordemSelecionada, setOrdemSelecionada] = useState("a-z");

  const tiposDisponiveis = [...new Set(data.flatMap((p) => p.tipo))].sort();
  const fraquezasPossiveis = [...new Set(data.flatMap((p) => p.fraqueza))].sort();

  const alternarTipo = (tipo) => {
    setTiposSelecionados((prev) =>
      prev.includes(tipo) ? prev.filter((t) => t !== tipo) : [...prev, tipo]
    );
  };

  const alternarFraqueza = (fraqueza) => {
    setFraquezasSelecionadas((prev) =>
      prev.includes(fraqueza) ? prev.filter((f) => f !== fraqueza) : [...prev, fraqueza]
    );
  };

  let listaFiltrada = data.filter((pokemon) => {
    const termo = termoBusca.toLowerCase().trim();
    if (termo !== "") {
      const nomeCombina = pokemon.name.toLowerCase().includes(termo);
      const idCombina = pokemon.id.toString().includes(termo);
      if (!nomeCombina && !idCombina) return false;
    }

    if (tiposSelecionados.length > 0) {
      const temTipo = pokemon.tipo.some((t) => tiposSelecionados.includes(t));
      if (!temTipo) return false;
    }

    if (fraquezasSelecionadas.length > 0) {
      const temFraqueza = pokemon.fraqueza.some((f) => fraquezasSelecionadas.includes(f));
      if (!temFraqueza) return false;
    }

    return true;
  });

  listaFiltrada = [...listaFiltrada].sort((a, b) => {
    switch (ordemSelecionada) {
      case "a-z": return a.name.localeCompare(b.name);
      case "z-a": return b.name.localeCompare(a.name);
      case "maior-id": return b.id - a.id;
      case "menor-id": return a.id - b.id;
      default: return 0;
    }
  });

  return (
    <>
      <img className="logoPokedex" src={imagemPokedexLogo} alt="logo Pokedex" />

      <input
        placeholder="Pesquisar por nome ou ID..."
        className="pesquisa"
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "25px", justifyContent: "center", marginTop: "25px", alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h4 style={{ marginBottom: "10px" }}>Filtrar por Tipo</h4>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", maxWidth: "800px" }}>
            {tiposDisponiveis.map((tipo) => {
              const selecionado = tiposSelecionados.includes(tipo);
              return (
                <button
                  key={tipo}
                  onClick={() => alternarTipo(tipo)}
                  style={{
                    padding: "12px 18px",
                    border: "2px solid #ccc",
                    borderRadius: "8px",
                    backgroundColor: selecionado ? "#007bff" : "#f8f9fa",
                    color: selecionado ? "white" : "#333",
                    fontWeight: selecionado ? "bold" : "normal",
                    cursor: "pointer",
                    minWidth: "80px",
                  }}
                >
                  {tipo}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h4 style={{ marginBottom: "10px" }}>Filtrar por Fraqueza</h4>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", maxWidth: "800px" }}>
            {fraquezasPossiveis.map((fraqueza) => {
              const selecionado = fraquezasSelecionadas.includes(fraqueza);
              return (
                <button
                  key={fraqueza}
                  onClick={() => alternarFraqueza(fraqueza)}
                  style={{
                    padding: "12px 18px",
                    border: "2px solid #ccc",
                    borderRadius: "8px",
                    backgroundColor: selecionado ? "#28a745" : "#f8f9fa",
                    color: selecionado ? "white" : "#333",
                    fontWeight: selecionado ? "bold" : "normal",
                    cursor: "pointer",
                    minWidth: "80px",
                  }}
                >
                  {fraqueza}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label style={{ marginRight: "10px", fontWeight: "bold" }}>Ordenar por:</label>
          <select value={ordemSelecionada} onChange={(e) => setOrdemSelecionada(e.target.value)} style={{ padding: "8px", borderRadius: "6px" }}>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="maior-id">Maior ID</option>
            <option value="menor-id">Menor ID</option>
          </select>
        </div>
      </div>

      <div className="container">
        {listaFiltrada.map((pokemon) => (
          <Card key={pokemon.id} imagem={pokemon.imagem} nome={pokemon.name} id={pokemon.id} tipo={pokemon.tipo} fraqueza={pokemon.fraqueza} />
        ))}
      </div>
    </>
  );
}

export default App;