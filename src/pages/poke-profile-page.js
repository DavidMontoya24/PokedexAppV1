import styled from "@emotion/styled";
import { exampleData } from "../utils/poke-data";
import { ReactComponent as PokedexLogo } from "../assets/pokeball-icon.svg";
import { ReactComponent as ArrowBackIcon } from "../assets/arrow-back.svg";
import { ReactComponent as HeightIcon } from "../assets/height-icon.svg";
import { ReactComponent as WeightIcon } from "../assets/weight-icon.svg";
import { typography } from "../styles/typography";
import { capitalizeStr } from "../utils/utils";
import { colors, typeColors } from "../styles/colors";
// import pokedexLogo from "../assets/pokeball-icon.svg"

let baseColor;
const setBaseColor = () => {
  for (const color in typeColors) {
    if (color === exampleData.types[0].type.name) {
      baseColor = typeColors[color];
    }
  }
}
setBaseColor();

const LayoutContainer = styled.div`
  width: 360px;
  height: 640px;
  margin: auto;
  border-radius: 12px;
  background-color: ${baseColor};
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
    ${typography.head.sm}
  }
`;

const AboutSection = styled.div`
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
  width: 230px;
  padding: 5px;
  position: absolute;
  top: 8%;
  left: 18%;
  z-index: 1;
`;

const PokedexLogoContainer = styled.div`
  width: 208px;
  height: 208px;
  margin: 4px;
`;

const StyledType = styled.div`
  ${typography.text.xs};
  font-weight: 700;
  color: white;
  background-color: blue;
  padding: 2px 8px;
  border-radius: 8px;
`;

const StyledDesc = styled.div`
  ${typography.text.xs};
  text-align: center;
  padding: 0 20px;
`;
const StatsContainer = styled.div`
  padding: 0 20px;
  display: flex;
  gap: 8px;
  width: 100%;
`;

const StyledTxt01 = styled.div`
  ${typography.text.xs};
  font-weight: 700;
`;

const StyledTxt02 = styled.div`
  ${typography.text.xs};
`;

const StyledTxt03 = styled.div`
  ${typography.text.sm};
  font-weight: 700;
  color: ${baseColor};
`;

const BarStatBg = styled.div`
  height: 4px;
  border-radius: 4px;
  margin: 6px 0;
  background-color: lightgray;
`;

const BarStatColor = styled.div`
  height: 4px;
  border-radius: 4px;
  background-color: ${baseColor};
`;

const AboutComp1 = styled.div`
  text-align: center;
  & h3 {
    ${typography.text.xs};
    font-weight: 400;
  }
  & p {
    font-size: 8px;
    line-height: 12px;
    color: ${colors.gray.medium};
  }
`;

const AboutComp2 = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & p {
    font-size: 8px;
    line-height: 12px;
    color: ${colors.gray.medium};
  }
`;

const DivisorLine = styled.div`
  background-color: ${baseColor};
  width: 1px;
  height: 100%;
  margin: 0 24px;
`;

function PokemonProfilePage() {
  return (
    <LayoutContainer>
      <HeaderName>
        <ArrowBackIcon fill="white" />
        <h3>{capitalizeStr(exampleData.name)}</h3>
        <p>#{exampleData.id}</p>
      </HeaderName>
      <PokedexLogoContainer>
        <PokedexLogo fill="white" opacity=".1" />
      </PokedexLogoContainer>
      <AvatarContainer>
        <img
          src={exampleData.sprites.other["official-artwork"].front_default}
          alt={exampleData.name}
        />
      </AvatarContainer>
      <AboutSection>
        <div style={{ display: "flex", gap: "16px" }}>
          {exampleData.types.map((type) => {
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
        <StyledTxt03>About</StyledTxt03>
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
              <WeightIcon />
              <h3>{exampleData.weight}</h3>
            </div>
            <p>Weight</p>
          </AboutComp1>
          <DivisorLine />
          <AboutComp1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                margin: "10px 0",
              }}
            >
              <HeightIcon />
              <h3>{exampleData.height}</h3>
            </div>
            <p>Height</p>
          </AboutComp1>
          <DivisorLine />
          <AboutComp2>
            {exampleData.abilities.map((elm) => (
              <StyledTxt02>{capitalizeStr(elm.ability.name)}</StyledTxt02>
            ))}
            <p>Moves</p>
          </AboutComp2>
        </div>
        <StyledDesc>
          Sometimes, on a dark night, your shadow thrown by a streetlight will
          suddenly and startlingly overtake you.It is actually a GENGAR running
          past you, pretending to be your shadow.
        </StyledDesc>
        <StyledTxt03>Base Stats</StyledTxt03>
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
              <div
                style={{
                  width: "1px",
                  height: "16px",
                  margin: "0px 5px",
                  backgroundColor: `${baseColor}`,
                }}
              ></div>
            ))}
          </div>
          <div>
            {exampleData.stats.map((stat) => (
              <StyledTxt02>{stat.base_stat}</StyledTxt02>
            ))}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            {exampleData.stats.map((elm) => (
              <BarStatBg>
                <BarStatColor style={{ width: `${elm.base_stat}px` }} />
              </BarStatBg>
            ))}
          </div>
        </StatsContainer>
      </AboutSection>
    </LayoutContainer>
  );
}

export default PokemonProfilePage;
