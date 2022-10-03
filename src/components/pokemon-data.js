import  styled from '@emotion/styled';
import { typography } from '../styles';
import { colors } from './../styles/colors';
import { RiStarFill } from 'react-icons/ri';

function formatId(id) {
  return id.toString().padStart(3, "0");
}
const PokeImage = styled.img`
  max-width: 144px;
`;
const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${colors.gray.medium};
  border: none;
  border-radius: 0.8rem;
  padding: 0.5rem 1rem;
  font-family: ${typography.text};
  font-weight: bold;
  color: white;
`;

function PokemonData({ dataPokemon, onAddFavorite, isFavorite, onRemoveFavorite }) {
  const regularContent = (
    <>
      <RiStarFill color={colors.gray.light} />
      Mark as Favorite
    </>
  );
  const favoriteContent = (
    <>
      <RiStarFill color={colors.yellow[500]} />
      Remove Favorite
    </>
  );
  return (
    <div>
      <h2>{dataPokemon.name}</h2>
      <p>#{formatId(dataPokemon.id)}</p>
      <PokeImage
        src={dataPokemon.sprites.other["official-artwork"].front_default}
        alt={dataPokemon.name}
      />
      {dataPokemon.types.map((element) => (
        <p key={element.slot}>{element.type.name}</p>
      ))}
      <p>Height: {dataPokemon.height / 10} m </p>
      <p>Weight: {dataPokemon.weight / 10} kg</p>
      <FavoriteButton onClick={() => isFavorite ? onRemoveFavorite(dataPokemon) : onAddFavorite(dataPokemon)}>
        {isFavorite ? favoriteContent : regularContent}
      </FavoriteButton>
    </div>
  );
}
export default PokemonData;