import styled from "@emotion/styled";
import { useState } from "react";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";
import { colors } from "./styles";

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
    <div>
      <h2>Welcome to Poke Colection</h2>
      {showLogin ? (
        <LoginForm />
      ) : (
        <SignupForm />
      )}
      <CustomLink onClick={handleClick}>
        {showLogin ? "Create Account" : "Log in"}
      </CustomLink>
    </div>
  );
};

export default UnauthenticatedApp;