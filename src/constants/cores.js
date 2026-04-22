export const cores = {
  Planta: "#72c64a",
  Fogo: "#ae0707",
  Agua: "#6390F0",
  Elétrico: "#eee364",
  Inseto: "#A2C11C",
  Normal: "#A8A878",
  Psiquico: "#cb34b2",
  Sombrio: "#400134",
  Venenoso: "#a04291",
  Voador: "#89AAE3",
  Terra: "#573808",
  Pedra: "#565555",
  Gelo: "#1ed1ec",
  Fantasma: "#7f0665",
  Fada: "#ff8be0",
  Dragão: "#6F35FC",
  Aço: "#AAABB8"
};

export const getCor = (tipo) => cores[tipo] ?? "#ff7700";