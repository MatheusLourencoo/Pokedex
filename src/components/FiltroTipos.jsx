function FiltroTipos({
  tiposDisponiveis,
  tiposSelecionados,
  alternarTipo,
  limparTipos,
}) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "800px",
        }}
      >
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
                transition: "all 0.2s",
                minWidth: "80px",
              }}
            >
              {tipo}
            </button>
          );
        })}
      </div>

      <button
        onClick={limparTipos}
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
        Limpar Tipos
      </button>
    </div>
  );
}

export default FiltroTipos;