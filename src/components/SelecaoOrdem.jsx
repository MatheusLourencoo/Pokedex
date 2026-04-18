function SelecaoOrdem({ ordemSelecionada, setOrdemSelecionada }) {
  return (
    <div>
      <label style={{ marginRight: "10px", fontWeight: "bold" }}>
        Ordenar por:
      </label>
      <select
        value={ordemSelecionada}
        onChange={(e) => setOrdemSelecionada(e.target.value)}
        style={{ padding: "8px", borderRadius: "6px" }}
      >
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="maior-id">Maior ID</option>
        <option value="menor-id">Menor ID</option>
      </select>
    </div>
  );
}

export default SelecaoOrdem;