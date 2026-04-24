import { useState } from "react";
import { data } from "../data";

export function useFiltroPokemons() {
  const [termoBusca, setTermoBusca] = useState("");
  const [tiposSelecionados, setTiposSelecionados] = useState([]);
  const [fraquezasSelecionadas, setFraquezasSelecionadas] = useState([]);
  const [ordemSelecionada, setOrdemSelecionada] = useState("a-z");
  
  const tiposDisponiveis = [...new Set(data.flatMap((p) => p.tipo))].sort();

  let fraquezasPossiveis = [];
  
  if (tiposSelecionados.length === 0) {
    fraquezasPossiveis = [...new Set(data.flatMap((p) => p.fraqueza))].sort();
  } else {
    const pokemonsFiltradosPorTipo = data.filter((pokemon) => 
      tiposSelecionados.every((t) => pokemon.tipo.includes(t))
    );
    fraquezasPossiveis = [...new Set(pokemonsFiltradosPorTipo.flatMap((p) => p.fraqueza))].sort();
  }

  const alternarTipo = (tipo) =>
    setTiposSelecionados((prev) =>
      prev.includes(tipo) ? prev.filter((t) => t !== tipo) : [...prev, tipo]
    );

  const alternarFraqueza = (fraqueza) =>
    setFraquezasSelecionadas((prev) =>
      prev.includes(fraqueza) ? prev.filter((f) => f !== fraqueza) : [...prev, fraqueza]
    );

  let listaFiltrada = data.filter((pokemon) => {
    const termo = termoBusca.toLowerCase().trim();
    if (termo !== "" && !pokemon.name.toLowerCase().includes(termo) && !pokemon.id.toString().includes(termo)) return false;
    if (tiposSelecionados.length > 0 && !tiposSelecionados.every(t => pokemon.tipo.includes(t))) return false;
    if (fraquezasSelecionadas.length > 0 && !fraquezasSelecionadas.every(f => pokemon.fraqueza.includes(f))) return false;
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

  return {
    termoBusca, setTermoBusca,
    tiposSelecionados, alternarTipo, limparTipos: () => setTiposSelecionados([]),
    fraquezasSelecionadas, alternarFraqueza, limparFraquezas: () => setFraquezasSelecionadas([]),
    ordemSelecionada, setOrdemSelecionada,
    listaFiltrada,
    tiposDisponiveis,   
    fraquezasPossiveis,
  };
}