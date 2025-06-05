import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
`;

export const LocaleAndBuy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  h1 {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme["purple-100"]};
    color: ${(props) => props.theme["purple-400"]};
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 400;
    padding: 0.5rem;
    text-align: center;
  }
`;

export const CartButton = styled(NavLink)`
  display: flex;
  background: ${(props) => props.theme["yellow-100"]};
  color: ${(props) => props.theme["yellow-500"]};
  padding: 0.82rem;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  z-index: 1;

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    background: ${(props) => props.theme["yellow-500"]};
    color: ${(props) => props.theme["white"]};
    font-size: 0.75rem;
    font-weight: bold;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
