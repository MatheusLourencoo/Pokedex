import { useState } from "react";
import { data } from "./data";
import Card from "./Card";
import imagemPokedexLogo from "./assets/imagemPokedexLogo.png";
import "./App.css";

function App() {
	const [filtro, setFiltro] = useState("");
	const [categoria, setCategoria] = useState("Todos");

	const listaFiltrada = data.filter((pokemon) => {
		const textoDigitado = filtro.toLowerCase().trim();

		const filtroNome = pokemon.name.toLowerCase().includes(textoDigitado);
		const filtroId = pokemon.id.toString().includes(textoDigitado);
		const filtroElemento = pokemon.tipo.some((elemento) => {
			return elemento.toLowerCase().includes(textoDigitado);
		});

		const passaFiltroTexto =
			textoDigitado === "" || filtroNome || filtroId || filtroElemento;

		const passaFiltroCategoria =
			categoria === "Todos" ||
			pokemon.tipo.some((tipo) => tipo.trim() === categoria);

		return passaFiltroTexto && passaFiltroCategoria;
	});

	return (
		<>
			<img className="logoPokedex" src={imagemPokedexLogo} alt="logo Pokedex" />

			<div className="filtros-container">
				<input
					placeholder="Adicione a sua pesquisa"
					className="pesquisa"
					value={filtro}
					onChange={(evento) => setFiltro(evento.target.value)}
				/>

				<select
					className="select-categoria"
					value={categoria}
					onChange={(evento) => setCategoria(evento.target.value)}
				>
					<option value="Todos">Todos os Tipos</option>
					<option value="Planta">Planta</option>
					<option value="Venenoso">Venenoso</option>
					<option value="Fogo">Fogo</option>
					<option value="Agua">Agua</option>
					<option value="Inseto">Inseto</option>
					<option value="Voador">Voador</option>
					<option value="Normal">Normal</option>
					<option value="Eletrico">Eletrico</option>
					<option value="Sombrio">Sombrio</option>
					<option value="Psiquico">Psiquico</option>
				</select>
			</div>

			<div className="container">
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
	);
}

export default App;
