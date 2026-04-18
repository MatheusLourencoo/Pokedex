function BarraPesquisa({ termoBusca, setTermoBusca }) {
  return (
    <input
      placeholder="Pesquisar por nome ou ID..."
      className="pesquisa"
      value={termoBusca}
      onChange={(e) => setTermoBusca(e.target.value)}
    />
  );
}

export default BarraPesquisa;