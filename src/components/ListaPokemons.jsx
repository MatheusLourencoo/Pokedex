import Card from "../Card";

function ListaPokemons({ listaFiltrada }) {
  return (
    <div className="container">
      {listaFiltrada.map((pokemon) => (
        <Card
          key={pokemon.id}
          imagem={pokemon.imagem}
          nome={pokemon.name}
          id={pokemon.id}
          tipo={pokemon.tipo}
          fraqueza={pokemon.fraqueza}
        />
      ))}
    </div>
  );
}

export default ListaPokemons;