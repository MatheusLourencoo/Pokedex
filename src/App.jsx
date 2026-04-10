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
