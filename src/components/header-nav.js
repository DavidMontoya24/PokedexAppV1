import { Link } from "react-router-dom";
import { AiFillHome, AiFillStar } from "react-icons/ai"
import { IoLogOut } from "react-icons/io5"
import styled from "@emotion/styled";

const HeaderNavWrapper = styled.div`
  background-color: rgba(218, 218, 218, 0.075);
  /* height: 40px; */
  width: 600px;
  border-radius: 15px;
  padding: 10px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  & h3{
    font-weight: 500;
    color: #212121;
  }
`

const StyledNavLink = styled(Link)`
  height: 40px;
  min-width: 100px;
  background-color: rgba(218, 218, 218, 0.3);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.10);
  border-radius: 15px;
  padding: 5px 15px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export default function HeaderNav({onClickLogout}){
  return (
    <HeaderNavWrapper>
      <StyledNavLink to="/">
        <h3>Home</h3>
        <AiFillHome size="1.5rem" color="#212121"/>
      </StyledNavLink>
      <StyledNavLink to="favorites">
        <h3>Favorites</h3>
        <AiFillStar size="1.5rem" color="#212121"/>
      </StyledNavLink>
      <StyledNavLink onClick={onClickLogout}>
        <h3>Logout</h3>
        <IoLogOut size="1.5rem" color="#212121"/>
      </StyledNavLink>
    </HeaderNavWrapper>
  )
};
