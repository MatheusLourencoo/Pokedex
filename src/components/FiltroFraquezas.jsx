function FiltroFraquezas({
  fraquezasPossiveis,
  fraquezasSelecionadas,
  alternarFraqueza,
  limparFraquezas,
}) {
  return (
    <div style={{ textAlign: "center" }}>
      <h4 style={{ marginBottom: "10px" }}>Filtrar por Fraqueza</h4>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "800px",
        }}
      >
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
                transition: "all 0.2s",
                minWidth: "80px",
              }}
            >
              {fraqueza}
            </button>
          );
        })}
      </div>

      <button
        onClick={limparFraquezas}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Limpar Fraquezas
      </button>
    </div>
  );
}

export default FiltroFraquezas;