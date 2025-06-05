import styled from "styled-components";

export const Container = styled.div`
  height: 8.7rem;
  padding: 2rem 10rem;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100%;
    object-fit: cover;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5.75rem 1.25rem;
  margin: 0 auto;
  gap: 2rem;

  img {
    max-width: 476px;
    height: auto;
  }

  @media (max-width: 1143px) {
    img {
      display: none;
    }
  }
`;

export const TextContent = styled.div`
  flex: 1;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    line-height: 1.2;

    color: ${(props) => props.theme["gray-800"]};
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 300;
    margin-top: 1rem;
  }
`;

export const BenefitsGrid = styled.div`
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.25rem;
    padding: 0;
    margin-top: 4.43rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .icon-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    color: white;
  }

  .cart {
    background: ${(props) => props.theme["yellow-500"]};
  }

  .timer {
    background: ${(props) => props.theme["yellow-300"]};
  }

  .package {
    background: ${(props) => props.theme["gray-300"]};
  }

  .coffee {
    background: ${(props) => props.theme["purple-400"]};
  }
`;

export const CoffeeList = styled.div`
  h1 {
    margin-bottom: 2.12rem;
  }
`;

export const CoffeeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2.5rem 2rem;
`;
