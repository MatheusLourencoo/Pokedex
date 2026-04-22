import { useState, useRef, useEffect } from "react";

function SelecaoOrdem({ ordemSelecionada, setOrdemSelecionada }) {
  const [aberto, setAberto] = useState(false);
  const ref = useRef();

  const opcoes = [
    { value: "menor-id", label: "Menor número primeiro" },
    { value: "maior-id", label: "Maior número primeiro" },
    { value: "a-z", label: "A-Z" },
    { value: "z-a", label: "Z-A" },
  ];

  const selecionado = opcoes.find(o => o.value === ordemSelecionada);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setAberto(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      
      <span
        style={{
          color: "#aaa",
          fontSize: "24px",
          fontWeight: "600",
        }}
      >
        Organizar por
      </span>

      <div ref={ref} style={{ position: "relative", width: "260px" }}>
        
        
        <div
          onClick={() => setAberto(!aberto)}
          style={{
            padding: "12px 16px",
            borderRadius: "20px",
            background: "#2f2f2f",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {selecionado?.label}
          <span>▼</span>
        </div>

        {aberto && (
          <div
            style={{
              position: "absolute",
              top: "110%",
              width: "100%",
              background: "#444",
              borderRadius: "10px",
              overflow: "hidden",
              zIndex: 10,
            }}
          >
            {opcoes.map((op) => (
              <div
                key={op.value}
                onClick={() => {
                  setOrdemSelecionada(op.value);
                  setAberto(false);
                }}
                style={{
                  padding: "12px",
                  cursor: "pointer",
                  borderBottom: "1px solid #555",
                  color: "#fff", 
                }}
                onMouseEnter={(e) =>
                  (e.target.style.background = "#555")
                }
                onMouseLeave={(e) =>
                  (e.target.style.background = "transparent")
                }
              >
                {op.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SelecaoOrdem;