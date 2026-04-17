import { useState, useEffect } from "react";
import { data } from "./data";
import Card from "./Card";
import imagemPokedexLogo from "./assets/imagemPokedexLogo.png";
import "./App.css";

function App() {
  const [termoBusca, setTermoBusca] = useState("");
  const [tipoSelecionado, setTipoSelecionado] = useState("Todos");
  const [fraquezaSelecionada, setFraquezaSelecionada] = useState("Todas");
  const [ordemSelecionada, setOrdemSelecionada] = useState("a-z");

  const tiposDisponiveis = [...new Set(data.flatMap((p) => p.tipo))].sort();
  const fraquezasPossiveis = [...new Set(data.flatMap((p) => p.fraqueza))].sort();

  useEffect(() => {
    if (
      fraquezaSelecionada !== "Todas" &&
      !fraquezasPossiveis.includes(fraquezaSelecionada)
    ) {
      setFraquezaSelecionada("Todas");
    }
  }, [tipoSelecionado, fraquezasPossiveis, fraquezaSelecionada]);

  let listaFiltrada = data.filter((pokemon) => {
    const termo = termoBusca.toLowerCase().trim();
    if (termo !== "") {
      const nomeCombina = pokemon.name.toLowerCase().includes(termo);
      const idCombina = pokemon.id.toString().includes(termo);
      if (!nomeCombina && !idCombina) return false;
    }

    if (tipoSelecionado !== "Todos") {
      if (!pokemon.tipo.includes(tipoSelecionado)) return false;
    }

    if (fraquezaSelecionada !== "Todas") {
      if (!pokemon.fraqueza.includes(fraquezaSelecionada)) return false;
    }

    return true;
  });

  listaFiltrada = [...listaFiltrada].sort((a, b) => {
    switch (ordemSelecionada) {
      case "a-z":
        return a.name.localeCompare(b.name);
      case "z-a":
        return b.name.localeCompare(a.name);
      case "maior-id":
        return b.id - a.id;
      case "menor-id":
        return a.id - b.id;
      default:
        return 0;
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

      <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "25px", flexWrap: "wrap" }}>
        <select value={tipoSelecionado} onChange={(e) => setTipoSelecionado(e.target.value)}>
          <option value="Todos">Todos os Tipos</option>
          {tiposDisponiveis.map((tipo) => (
            <option key={tipo} value={tipo}>{tipo}</option>
          ))}
        </select>

        <select value={fraquezaSelecionada} onChange={(e) => setFraquezaSelecionada(e.target.value)}>
          <option value="Todas">Todas as Fraquezas</option>
          {fraquezasPossiveis.map((fraqueza) => (
            <option key={fraqueza} value={fraqueza}>{fraqueza}</option>
          ))}
        </select>

        <select value={ordemSelecionada} onChange={(e) => setOrdemSelecionada(e.target.value)}>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="maior-id">Maior ID</option>
          <option value="menor-id">Menor ID</option>
        </select>
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