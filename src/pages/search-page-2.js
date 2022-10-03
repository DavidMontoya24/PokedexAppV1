import { useState } from "react";
import { Link, Navigate, redirect } from "react-router-dom";
import Input from "../components/input";
import { getPokemon } from "../services/pokeapi-service";
import PokemonData from '../components/pokemon-data';
import PokemonProfilePage from "./poke-profile-page";
import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";
import { typeColors } from "../styles/colors";
import { BiSearch } from 'react-icons/bi';
import SearchInput from "../components/search-input";
import HeaderNav from "../components/header-nav";

const LayoutContainer = styled.div`
  height: 100vh;
  margin: auto;
  padding: 50px 0;
`;

const Header = styled.div`
  max-width: 750px;
  margin: 30px auto;
  /* margin-bottom: 50px; */
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
`

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

  let pokemonColor;
  for (const color in typeColors) {
    if(pokemon) {
      if (color === pokemon.types[0].type.name) {
        pokemonColor = typeColors[color];
      }
    }
  }

  // useEffect(() => {
  //   console.log("Favorites ", favorites);
  // }, [favorites]);

  // const isFavorite = favorites.find((fav) => fav.pokemon_name === pokemon?.name)
  //   ? true
  //   : false;

  return (
    <LayoutContainer  style={{backgroundColor: pokemonColor || "white"}}>
      <HeaderNav onClickLogout={logout} />
      <Header>
        <SearchInput
          onSubmit={handleSubmit}
          name="query"
          placeholder="pikachu"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          iconRight={<BiSearch size="1.5rem"/>}
        />
        {/* <Link to="/favorites">Go to Favorites</Link>
        <button onClick={logout}>Log out</button> */}
      </Header>
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
