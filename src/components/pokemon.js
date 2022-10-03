import styled from "@emotion/styled";
import { ReactComponent as PokedexLogo } from "../assets/pokeball-icon.svg";
import { ReactComponent as ArrowBackIcon } from "../assets/arrow-back.svg";
import { ReactComponent as HeightIcon } from "../assets/height-icon.svg";
import { ReactComponent as WeightIcon } from "../assets/weight-icon.svg";
import { typography } from "../styles/typography";
import { capitalizeStr, unicodeTxt } from "../utils/utils";
import { colors, typeColors } from "../styles/colors";
import { getDescriptionPokemon, getPokemon } from "../services/pokeapi-service";
import { useState } from "react";
import { Link } from "react-router-dom";

const LayoutContainer = styled.div`
  width: 360px;
  height: 640px;
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

const HeaderName = styled.div`
  position: absolute;
  width: 85%;
  height: 20px;
  margin: 20px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  & h3 {
    ${typography.head.lg}
  }
`;

const AboutSection = styled.div`
  z-index: 1;
  background-color: white;
  border-radius: 8px;
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding-top: 45px;
`;

const AvatarContainer = styled.div`
  width: 320px;
  padding: 5px;
  position: absolute;
  top: 8%;
  left: 3%;
  z-index: 2;
`;

const PokedexLogoContainer = styled.div`
  height: 250px;
  margin: 4px;
`;

const BgPokemonName = styled.div`
  text-transform: uppercase;
  font-size: 100px;
  font-weight: 700;
  position: absolute;
  top: 30%;
  background-color: ${({color}) => color};
  opacity: 0.1;
`

const StyledType = styled.div`
  ${typography.text.md};
  font-weight: 700;
  color: white;
  background-color: blue;
  padding: 2px 8px;
  border-radius: 8px;
`;

const StyledDesc = styled.div`
  ${typography.text.sm};
  max-height: 85px;
  min-height: 60px;
  text-align: center;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;
const StatsContainer = styled.div`
  max-width: 500px;
  padding: 0 20px;
  display: flex;
  gap: 8px;
  width: 100%;
`;

const StyledTxt01 = styled.div`
  ${typography.text.md};
  font-weight: 700;
`;

const StyledTxt02 = styled.div`
  ${typography.text.md};
`;

const StyledTxt03 = styled.div`
  ${typography.text.lg};
  font-weight: 700;
  color: ${({color}) => color};
`;

const BarStatBg = styled.div`
  height: 12px;
  border-radius: 8px;
  margin: 6px 0;
  background-color: #ebebeb;
`;

const BarStatColor = styled.div`
  height: 12px;
  border-radius: 8px;
  background-color: ${({color}) => color};
`;

const AboutComp1 = styled.div`
  text-align: center;
  & h3 {
    ${typography.text.md};
    font-weight: 400;
  }
  & p {
    font-size: 12px;
    line-height: 10px;
    color: ${colors.gray.medium};
  }
`;

const AboutComp2 = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & p {
    font-size: 12px;
    line-height: 10px;
    color: ${colors.gray.medium};
  }
`;

const DivisorLine1 = styled.div`
  background-color: ${({color}) => color};
  width: 2.5px;
  height: 100%;
  margin: 0 24px;
`;

const DivisorLine2 = styled.div`
  background-color: ${({color}) => color};
  width: 2.5px;
  height: 24px;
  margin: 0 5px;
`;


function Pokemon({dataPokemon, pokemonColor}) {
  const [description, setDescription] = useState("");

  const desc = () => {
    getDescriptionPokemon(dataPokemon.id)
    .then((data) => {
      const desc = unicodeTxt(data.flavor_text_entries[1].flavor_text);
      setDescription(desc);
    });
  }

  desc();

  return (
    <>
      <HeaderName>
        <Link to="/search">
          {/* <ArrowBackIcon fill="white" /> */}
        </Link>
        <h3>{capitalizeStr(dataPokemon.name)}</h3>
        <p>#{dataPokemon.id}</p>
      </HeaderName>
      <PokedexLogoContainer>
        <PokedexLogo fill="white" opacity=".1" style={{height: "100%"}}/>
      </PokedexLogoContainer>
      <BgPokemonName color={pokemonColor}>{dataPokemon.name}</BgPokemonName>
      <AvatarContainer>
        <img
          src={dataPokemon.sprites.other["official-artwork"].front_default}
          alt={dataPokemon.name}
        />
      </AvatarContainer>
      <AboutSection>
        <div style={{ display: "flex", gap: "16px" }}>
          {dataPokemon.types.map((type) => {
            for (const color in typeColors) {
              if (color === type.type.name) {
                const selectedColor = typeColors[color];
                return (
                  <StyledType style={{ backgroundColor: selectedColor }}>
                    {capitalizeStr(type.type.name)}
                  </StyledType>
                );
              }
            }
          })}
        </div>
        <StyledTxt03 color={pokemonColor}>About</StyledTxt03>
        <div style={{ display: "flex" }}>
          <AboutComp1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                margin: "10px 0",
              }}
            >
              <WeightIcon style={{width: "1.5rem"}}/>
              <h3>{dataPokemon.weight/10} Kg</h3>
            </div>
            <p>Weight</p>
          </AboutComp1>
          <DivisorLine1 color={pokemonColor}/>
          <AboutComp1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                margin: "10px 0",
              }}
            >
              <HeightIcon style={{height: "1.5rem"}}/>
              <h3>{dataPokemon.height/10} m</h3>
            </div>
            <p>Height</p>
          </AboutComp1>
          <DivisorLine1 color={pokemonColor}/>
          <AboutComp2>
            {dataPokemon.abilities.map((elm) => (
              <StyledTxt02>{capitalizeStr(elm.ability.name)}</StyledTxt02>
            ))}
            <p>Moves</p>
          </AboutComp2>
        </div>
        <StyledDesc>{description}</StyledDesc>
        <StyledTxt03 color={pokemonColor}>Base Stats</StyledTxt03>
        <StatsContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            {["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"].map((stat) => (
              <StyledTxt01>{stat}</StyledTxt01>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {["", "", "", "", "", ""].map((elm) => (
              <DivisorLine2 color={pokemonColor} />
            ))}
          </div>
          <div>
            {dataPokemon.stats.map((stat) => (
              <StyledTxt02>{stat.base_stat}</StyledTxt02>
            ))}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            {dataPokemon.stats.map((elm) => (
              <BarStatBg>
                <BarStatColor style={{ width: `${elm.base_stat}px` }} color={pokemonColor}/>
              </BarStatBg>
            ))}
          </div>
        </StatsContainer>
      </AboutSection>
    </>
  );
}

export default Pokemon;
