import { useState } from "react";
import { data } from "./data";
import imagemPokedexLogo from "./assets/imagemPokedexLogo.png";
import "./App.css";

import BarraPesquisa from "./components/BarraPesquisa";
import ListaPokemons from "./components/ListaPokemons";
import SelecaoOrdem from "./components/SelecaoOrdem";
import FiltroTipos from "./components/FiltroTipos";
import FiltroFraquezas from "./components/FiltroFraquezas";


function App() {
  const [termoBusca, setTermoBusca] = useState("");
  const [tiposSelecionados, setTiposSelecionados] = useState([]);
  const [fraquezasSelecionadas, setFraquezasSelecionadas] = useState([]);
  const [ordemSelecionada, setOrdemSelecionada] = useState("a-z");

  const tiposDisponiveis = [...new Set(data.flatMap((p) => p.tipo))].sort();
  const fraquezasPossiveis = [...new Set(data.flatMap((p) => p.fraqueza))].sort();

  const alternarTipo = (tipo) => {
    setTiposSelecionados((prev) => prev.includes(tipo) ? prev.filter((t) => t !== tipo) : [...prev, tipo]);
  };

  const alternarFraqueza = (fraqueza) => {
    setFraquezasSelecionadas((prev) => prev.includes(fraqueza) ? prev.filter((f) => f !== fraqueza) : [...prev, fraqueza]);
  };

  const limparTipos = () => setTiposSelecionados([]);
  const limparFraquezas = () => setFraquezasSelecionadas([]);

  let listaFiltrada = data.filter((pokemon) => {
    const termo = termoBusca.toLowerCase().trim();
    if (termo !== "") {
      if (!pokemon.name.toLowerCase().includes(termo) && !pokemon.id.toString().includes(termo)) return false;
    }
    if (tiposSelecionados.length > 0 && !pokemon.tipo.some(t => tiposSelecionados.includes(t))) return false;
    if (fraquezasSelecionadas.length > 0 && !pokemon.fraqueza.some(f => fraquezasSelecionadas.includes(f))) return false;
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
      <BarraPesquisa termoBusca={termoBusca} setTermoBusca={setTermoBusca} />
            <FiltroTipos
        tiposDisponiveis={tiposDisponiveis}
        tiposSelecionados={tiposSelecionados}
        alternarTipo={alternarTipo}
        limparTipos={limparTipos}
      />
      <FiltroFraquezas
        fraquezasPossiveis={fraquezasPossiveis}
        fraquezasSelecionadas={fraquezasSelecionadas}
        alternarFraqueza={alternarFraqueza}
        limparFraquezas={limparFraquezas}
      />
      <SelecaoOrdem ordemSelecionada={ordemSelecionada} setOrdemSelecionada={setOrdemSelecionada} />
      
      <div style={{ display: "flex", flexDirection: "column", gap: "30px", marginTop: "30px", alignItems: "center" }}>
       
      </div>
      <ListaPokemons listaFiltrada={listaFiltrada} />
    </>
  );
}

export default App;