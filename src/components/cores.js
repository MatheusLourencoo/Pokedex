export const cores = {
  Planta: "#72c64a",
  Fogo: "#be5810",
  Agua: "#96b2f3",
  Eletrico: "#eee364",
  Inseto: "#cce928",
  Normal: "#c1c0c0",
  Psiquico: "#cb34b2",
  Sombrio: "#400134",
  Venenoso: "#a04291",
  Voador: "#41647e",
  Terra: "#573808",
  Pedra: "#565555",
  Gelo: "#1ed1ec",
  Fantasma: "#7f0665",
};

export const getCor = (tipo) => cores[tipo] ?? "#ff7700";