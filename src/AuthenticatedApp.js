import FavoritesPage from "./pages/favorites-page";
import SearchPage from "./pages/search-page";
import { useState, useEffect } from "react";
import {
  createFavorite,
  getFavorites,
  removeFavorite,
} from "./services/favorites-service";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/auth-context";

const AuthenticatedApp = () => {
  const [favorites, setFavorites] = useState([]);
  const { logout } = useAuth();
  
  useEffect(() => {
    getFavorites()
      .then((fav) => setFavorites(fav))
      .catch((error) => console.log(error));
  }, []);

  function handleAddFavorite(pokemon) {
    const data = {
      pokemon_name: pokemon.name,
      pokemon_id: pokemon.id,
      pokemon_type: pokemon.types[0].type.name,
      pokemon_avatar_url:
        pokemon.sprites.other["official-artwork"].front_default,
    };
    createFavorite(data)
      .then((newFavorite) => setFavorites([...favorites, newFavorite]))
      .catch((error) => console.log(error));
  }
  function handleRemoveFavorite(pokemon) {
    const favorite = favorites.find((fav) => fav.pokemon_name === pokemon.name);
    removeFavorite(favorite.id).then(() => {
      const newFavorites = favorites.filter(
        (fav) => fav.pokemon_name !== pokemon.name
      );
      setFavorites(newFavorites);
    });
  }

  return (
    <div>
      <button onClick={logout}>Log out</button>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SearchPage
                favorites={favorites}
                onAddFavorites={handleAddFavorite}
                onRemoveFavorite={handleRemoveFavorite}
              />
            }
          />
          <Route
            path="favorites"
            element={<FavoritesPage favorites={favorites} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AuthenticatedApp;