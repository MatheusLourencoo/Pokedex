import { useState } from "react";
import { data } from "./data";
import Card from "./Card";
import imagemPokedexLogo from "./assets/imagemPokedexLogo.png";
import "./App.css";

//fiz errado o botão e tive que refazer tudo (revisar antes do checkpoint)
//lembrar de tirar comentários

function App() {
	const [pesquisa, setPesquisa] = useState("");
	const [categoriaAtiva, setCategoriaAtiva] = useState("name");

	const categorias = ["name", "id", "tipo", "fraqueza"];

	const listaFiltrada = data.filter((pokemon) => {
		const termo = pesquisa.toLowerCase().trim();
		if (termo === "") return true;

		const valorDaCategoria = pokemon[categoriaAtiva];

		if (Array.isArray(valorDaCategoria)) {
			return valorDaCategoria.some((item) =>
				item.toLowerCase().includes(termo),
			);
		}

		return valorDaCategoria.toString().toLowerCase().includes(termo);
	});

	return (
		<>
			<img className="logoPokedex" src={imagemPokedexLogo} alt="logo Pokedex" />

			<div className="filtros-container">
				<div className="botoes-categorias">
					{categorias.map((cat) => (
						<button
							key={cat}
							className={categoriaAtiva === cat ? "active" : ""}
							onClick={() => setCategoriaAtiva(cat)}
						>
							{cat.charAt(0).toUpperCase() + cat.slice(1)}
						</button>
					))}
				</div>

				<input
					placeholder={`Pesquisar por ${categoriaAtiva}...`}
					className="pesquisa"
					value={pesquisa}
					onChange={(e) => setPesquisa(e.target.value)}
				/>
 main


				<select
					className="botaoPesquisa"
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
 main
			</div>

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
		</>
	);
}

export default App;
