import { useState } from "react";
import { data } from "./data";
import imagemPokedexLogo from "./assets/imagemPokedexLogo.png";
import "./App.css";
import BarraPesquisa from "./components/BarraPesquisa";
import ListaPokemons from "./components/ListaPokemons";
import SelecaoOrdem from "./components/SelecaoOrdem";
import FiltroTipos from "./components/FiltroTipos";
import FiltroFraquezas from "./components/FiltroFraquezas";
import { useFiltroPokemons } from "./components/useFiltroPokemons";


function App() {
  const {termoBusca, setTermoBusca,
    tiposSelecionados, alternarTipo, limparTipos,
    fraquezasSelecionadas, alternarFraqueza, limparFraquezas,
    ordemSelecionada, setOrdemSelecionada,
    listaFiltrada,
    tiposDisponiveis,     
    fraquezasPossiveis,
  } = useFiltroPokemons();

  return (
    <>

      <header className="cabecalho">
        <img className="logoPokedex" src={imagemPokedexLogo} alt="logo Pokedex" />
        <BarraPesquisa termoBusca={termoBusca} setTermoBusca={setTermoBusca} />
      </header>
      
      <div className="app-container">

        <div className="botao-ordenar">
          <SelecaoOrdem
            ordemSelecionada={ordemSelecionada}
            setOrdemSelecionada={setOrdemSelecionada} />
        </div>

        <div className="area-filtros">
          <div className="secao-filtro">
            <h2>Filtrar por Tipo</h2>
              <FiltroTipos tiposDisponiveis={tiposDisponiveis} tiposSelecionados={tiposSelecionados} alternarTipo={alternarTipo} limparTipos={limparTipos} />
          </div>

          <div className="secao-filtro">
            <h2>Filtrar por Fraqueza</h2>
              <FiltroFraquezas fraquezasPossiveis={fraquezasPossiveis} fraquezasSelecionadas={fraquezasSelecionadas} alternarFraqueza={alternarFraqueza} limparFraquezas={limparFraquezas} />
          </div>
        </div>

        <main className="area-cards">
          <ListaPokemons listaFiltrada={listaFiltrada} />
        </main>

      </div>

    </>
  );
}

export default App;