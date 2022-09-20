import styled from "@emotion/styled";
import { exampleData } from "../utils/poke-data";
import { ReactComponent as PokedexLogo } from "../assets/pokeball-icon.svg";
import { ReactComponent as ArrowBackIcon } from "../assets/arrow-back.svg";
import { fonts, typography } from "../styles/typography";
import { capitalizeStr } from "../utils/utils";
// import pokedexLogo from "../assets/pokeball-icon.svg"

const LayoutContainer = styled.div`
  width: 360px;
  height: 640px;
  margin: auto;
  border-radius: 12px;
  background-color: violet;
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
  gap: 1rem;
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
`

const StyledDesc = styled.div`
    ${typography.text.xs};
    text-align: center;
    padding: 0 20px;
`
const StatsContainer = styled.div`
    padding: 0 20px;
    display: flex;
`

const StyledTxt01 = styled.div`
    ${typography.text.xs};
`

function PokemonProfilePage() {
  return (
    <LayoutContainer>
      <HeaderName>
        <ArrowBackIcon fill="white" />
        <h3>
          {capitalizeStr(exampleData.name)}
        </h3>
        {/* <div>
        </div> */}
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
          {exampleData.types.map((type) => (
            <StyledType>{capitalizeStr(type.type.name)}</StyledType>
          ))}
        </div>
        <div>About</div>
        <div>A</div>
        <StyledDesc>Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you.It is actually a GENGAR running past you, pretending to be your shadow.</StyledDesc>
        <div>Base Stats</div>
        <StatsContainer>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                {["HP","ATK","DEF","SATK","SDEF","SPD"].map(stat => (
                    <StyledTxt01>{stat}</StyledTxt01>
                ))}
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                {["","","","","",""].map(elm => (
                    <div style={{width:"1px", height:"100%", backgroundColor: "red"}}>""</div>
                ))}
            </div>
        </StatsContainer>
        
      </AboutSection>
    </LayoutContainer>
  );
}

export default PokemonProfilePage;
