import { useState } from "react";
import { Link, Navigate, redirect } from "react-router-dom";
import Input from "../components/input";
import { getPokemon } from "../services/pokeapi-service";
import PokemonData from '../components/pokemon-data';
import PokemonProfilePage from "./poke-profile-page";
import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";

const LayoutContainer = styled.div`
  /* width: 360px; */
  height: 100vh;
  margin: auto;
  /* border-radius: 12px; */
  background-color: red;
  padding: 4px;
`;

const SearchPage2 = ({favorites, onAddFavorites , onRemoveFavorite}) => {
  const { logout } = useAuth();
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
        setState({ status: "success", data: data, error: null });
      })
      .catch((error) => {
        setState({
          status: "error",
          data: null,
          error: "Pokemon not found",
        });
        console.log(error);
      });
  }

  // useEffect(() => {
  //   console.log("Favorites ", favorites);
  // }, [favorites]);

  // const isFavorite = favorites.find((fav) => fav.pokemon_name === pokemon?.name)
  //   ? true
  //   : false;

  return (
    <LayoutContainer>
      <button onClick={logout}>Log out</button>
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
        <PokemonProfilePage
          dataPokemon={pokemon}
        />
      )}
      {status === "error" && <p style={{ color: "red" }}>{error}</p>}
    </LayoutContainer>
  );
};

export default SearchPage2;
