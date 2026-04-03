import { useState } from 'react'
import { data } from './data'
import Card from './Card'
import imagemPokedexLogo from './assets/imagemPokedexLogo.png'
import './App.css'

function App() {
  

  // filtro da busca dos pokemons
  const [filtro, setFiltro] = useState("");

  const listaFiltrada = data.filter((pokemon) => {

    const textoDigitado = filtro.toLowerCase().trim();

    //serve para transformar o texto em minusculo e tirar espaços em brancos
    if(textoDigitado === ""){
      return true;
    }
    
    const filtroNome = pokemon.name.toLowerCase().includes(textoDigitado);
    
    const filtroId = pokemon.id.toString().includes(textoDigitado);

    const filtroElemento = pokemon.tipo.some((elemento) => {
      return elemento.toLowerCase().includes(textoDigitado);
    });

    //vai retornar uma das 3 categorias na busca feito pelo usuario
    return filtroNome || filtroId || filtroElemento;
  }); 

  return (
    <>
      <img className='logoPokedex' src={imagemPokedexLogo} alt='logo Pokedex'/>

      {}
      <input 
        placeholder='Adicione a sua pesquisa' 
        className='pesquisa'
        value={filtro}
        onChange={(evento) => setFiltro(evento.target.value)}
      />

      <div className='container' >
        {}
        {listaFiltrada.map((pokemon) => (
          <Card 
            key={pokemon.id}
            imagem={pokemon.imagem} 
            nome={pokemon.name}
            id={pokemon.id}
            tipo={pokemon.tipo}
          />
        ))}
      </div>
    </>
  )
}

export default App