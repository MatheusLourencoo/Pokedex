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
import SemResultados from "./components/SemResultados";

function App() {
  const { 
    termoBusca, setTermoBusca,
    tiposSelecionados, alternarTipo, limparTipos,
    fraquezasSelecionadas, alternarFraqueza, limparFraquezas,
    ordemSelecionada, setOrdemSelecionada,
    listaFiltrada,
    tiposDisponiveis,
    fraquezasPossiveis,
  } = useFiltroPokemons();

  let tituloFraqueza = "Filtrar por Fraqueza";
  const qtdTipos = tiposSelecionados.length;

  if (qtdTipos === 1) {
    tituloFraqueza = `Fraquezas do tipo: ${tiposSelecionados[0]}`;
  } else if (qtdTipos === 2) {
    tituloFraqueza = `Fraquezas dos tipos: ${tiposSelecionados[0]} e ${tiposSelecionados[1]}`;
  } else if (qtdTipos > 2) {
    tituloFraqueza = "Fraquezas dos tipos selecionados";
  }

  const temFiltroAtivo = tiposSelecionados.length > 0 || fraquezasSelecionadas.length > 0 || termoBusca.trim() !== "";

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
            setOrdemSelecionada={setOrdemSelecionada} 
          />
        </div>

        <div className="area-filtros">
          <div className="secao-filtro">
            <h2>Filtrar por Tipo</h2>
            <FiltroTipos 
              tiposDisponiveis={tiposDisponiveis} 
              tiposSelecionados={tiposSelecionados} 
              alternarTipo={alternarTipo} 
              limparTipos={limparTipos} 
            />
          </div>

          <div className="secao-filtro">
            <h2>{tituloFraqueza}</h2>
            
            {fraquezasPossiveis.length > 0 ? (
              <FiltroFraquezas 
                fraquezasPossiveis={fraquezasPossiveis} 
                fraquezasSelecionadas={fraquezasSelecionadas} 
                alternarFraqueza={alternarFraqueza} 
                limparFraquezas={limparFraquezas} 
              />
            ) : (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '40px'
              }}>
                <span style={{
                  color: '#94a3b8',
                  fontWeight: '500',
                  fontSize: '14px',
                  textAlign: 'center',
                  padding: '0 16px'
                }}>
                  Nenhuma fraqueza em comum para esta combinação de tipos
                </span>
              </div>
            )}
          </div>
        </div>

        <main className="area-cards">
          
          {temFiltroAtivo && (
            <div style={{ 
              textAlign: 'center', 
              marginBottom: '24px',
              marginTop: '16px' 
            }}>
              <span style={{ 
                color: '#666', 
                fontWeight: '600', 
                fontSize: '17px' 
              }}>
                {listaFiltrada.length} {listaFiltrada.length === 1 ? 'Pokémon encontrado' : 'Pokémons encontrados'}
              </span>
            </div>
          )}

          {listaFiltrada.length > 0 ? (
            <ListaPokemons listaFiltrada={listaFiltrada} />
          ) : temFiltroAtivo ? (
            <SemResultados />  
          ) : (
            <ListaPokemons listaFiltrada={listaFiltrada} />
          )}

        </main>

      </div>
    </>
  );
}

export default App;