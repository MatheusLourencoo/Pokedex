import { useState } from 'react'
import { data } from './data'
import Card from './Card'
import imagemPokedexLogo from './assets/imagemPokedexLogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <img className='logoPokedex' src={imagemPokedexLogo} alt='logo Pokedex'/>

    <input placeholder='Adicione a sua pesquisa' className='pesquisa'></input>

    <div className='container' >
      {data.map((pokemon) => (
        <Card key={pokemon.id}
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