import styled from "@emotion/styled";
import { typeColors } from "../styles/colors";
import Pokemon from "../components/pokemon";

const LayoutContainer = styled.section`
  max-width: 750px;
  height: 750px;
  margin: auto;
  border-radius: 12px;
  background-color: ${({color}) => color};
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
`;

function PokemonProfilePage({dataPokemon}) {
  let pokemonColor;
  for (const color in typeColors) {
    if (color === dataPokemon.types[0].type.name) {
      pokemonColor = typeColors[color];
    }
  }

  return (
    <LayoutContainer color={pokemonColor}>
      <Pokemon dataPokemon={dataPokemon} pokemonColor={pokemonColor}/>
    </LayoutContainer>
  );
}

export default PokemonProfilePage;
