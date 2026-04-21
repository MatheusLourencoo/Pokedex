import Etiqueta from "./components/Etiqueta";
import { getCor } from "./components/cores";


const Card = ({ nome, imagem, id, tipo, fraqueza }) => {
  const tipoPrincipal = tipo[0].trim();

  return (
    <div
      className="card flex flex-col items-center px-4 max-w-[250px] w-full"
      style={{ backgroundColor: getCor(tipoPrincipal) + "cc" }}
    >
      <img src={imagem} alt={nome} />
      <h2 className="text-xl font-extrabold text-slate-800 capitalize mt-2 mb-0">{nome}</h2>
      <span className="text-sm font-bold text-slate-500 mb-4">Nº {id}</span>

      <div className="flex flex-col w-full gap-4">
        
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
            Tipo
          </span>
          <div className="flex flex-wrap justify-center gap-1.5">
            {tipo.map((t) => (
              <Etiqueta key={t} tipo={t} />
            ))}
          </div>
        </div>

        {/* Bloco de Fraqueza */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
            Fraquezas
          </span>
          <div className="flex flex-wrap justify-center gap-1.5">
            {fraqueza.map((t) => (
              <Etiqueta key={t} tipo={t} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;