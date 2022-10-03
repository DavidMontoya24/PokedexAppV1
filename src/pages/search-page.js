import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/input";
import { getPokemon } from "../services/pokeapi-service";
import PokemonData from './../components/pokemon-data';


const SearchPage = ({favorites, onAddFavorites , onRemoveFavorite}) => {
  const [query, setQuery] = useState("");
  const [state, setState] = useState({
    status: "idle", //success, error, pending
    data: null,
    error: null,
  });
  const { status, data: pokemon, error } = state;



  function handleSubmit(event) {
    event.preventDefault();
    if (query.length === 0) return;
    setState({ status:"pending", data:null, error:null});
    getPokemon(query)
      .then((data) => {
        console.log(data);
        setState({ status: "success", data: data, error: null });
      })
      .catch((error) => {
        setState({
          status: "error",
          data: null,
          error: "El pokemon no existe! Intente de nuevo",
        });
        console.log(error);
      });
  }

  // useEffect(() => {
  //   console.log("Favorites ", favorites);
  // }, [favorites]);

  const isFavorite = favorites.find((fav) => fav.pokemon_name === pokemon?.name)
    ? true
    : false;
  return (
    <div>
      <Link to="/favorites">Go to Favorites</Link>
      <form onSubmit={handleSubmit}>
        <Input
          name="query"
          placeholder="pokemon name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {status === "idle" && "Ready to Search"}
      {status === "pending" && "Loading..."}
      {status === "success" && (
        <PokemonData
          dataPokemon={pokemon}
          onAddFavorite={onAddFavorites}
          onRemoveFavorite={onRemoveFavorite}
          isFavorite={isFavorite}
        />
      )}
      {status === "error" && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SearchPage;
