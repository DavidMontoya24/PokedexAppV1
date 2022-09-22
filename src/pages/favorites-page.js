import styled from '@emotion/styled';
import React from 'react'
import { Link } from 'react-router-dom';
import { typeColors } from '../styles/colors';

const PokeCard = styled.div`
  border: 2px solid ${({type}) => typeColors[type]}
`;
const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  gap: 1rem;
`;
const FavoritesPage = ({favorites}) => {
  return (
    <Wrapper>
      <Link to="/">Search</Link>
      {
        favorites.map((fav)=> (
          <PokeCard key={fav.id} type={fav.pokemon_type}>
              <p>{fav.pokemon_name}</p>
              <img src={fav.pokemon_avatar_url} alt="pokemon" />
          </PokeCard>
        ))
      }
    </Wrapper>
  )
}

export default FavoritesPage