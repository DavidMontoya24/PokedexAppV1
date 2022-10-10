import styled from "@emotion/styled";
import { useState } from "react";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";
import { colors } from "./styles";
import myimg from "./assets/bg/pokemon-wallpaper01.jpg"

const BgPage = styled.div`
  /* background-color: #cccccc; */
  height: 100vh;
  padding: 100px 0;
  background-image: url(${myimg});
  /* background-repeat: round; */
  background-size: cover;
`

const Container = styled.div`
  max-width: 480px;
  border-radius: 50px;
  padding: 50px 0;
  height: 600px;
  margin: 150px auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  & h2{
    font-size: 40px;
    line-height: 40px;
    max-width: 350px;
    text-align: center;
  }
`;

const CustomLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${colors.pink[400]};
  }
`;

const UnauthenticatedApp = () => {
  const [showLogin, setShowLogin] = useState(true);
  function handleClick(event) {
    // event.preventDefault();
    setShowLogin(!showLogin);
  }
  return (
    <BgPage>
      <Container>
        <div >
          <h2>Welcome to Poke Colection</h2>
        </div>
        {showLogin ? (
          <LoginForm />
          ) : (
            <SignupForm />
            )}
        <CustomLink onClick={handleClick}>
          {showLogin ? "Create Account" : "Log in"}
        </CustomLink>
      </Container>
    </BgPage>
  );
};

export default UnauthenticatedApp;