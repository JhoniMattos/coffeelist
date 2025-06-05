import styled from "styled-components";

export const Container = styled.div`
  width: 16rem;
  padding: 0 1.25rem 1.25rem;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  text-align: center;

  background-color: ${(props) => props.theme["white-200"]};

  img {
    margin-top: -1.25rem;
    max-width: 7.5rem;
    max-height: 7.5rem;
    align-self: center;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  justify-content: center;
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  span {
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    font-size: 0.62rem;
    font-weight: 700;

    background-color: ${(props) => props.theme["yellow-100"]};
    color: ${(props) => props.theme["yellow-500"]};
  }
`;

export const ContainerTitle = styled.div`
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme["gray-500"]};
    margin: 0;
  }

  p {
    font-size: 0.87rem;
    font-weight: 300;

    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
`;
export const Buy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;

  img {
    color: red;
  }
`;

export const Order = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.8rem;
  background-color: ${(props) => props.theme["white-400"]};
  border-radius: 6px;

  > button {
    display: flex;
    color: ${(props) => props.theme["purple-400"]};
    border-radius: 6px;
    padding: 0.5rem;

    transition: background-color 0.2s;

    &:hover {
      color: ${(props) => props.theme["purple-800"]};
    }
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    color: ${(props) => props.theme["gray-500"]};
  }

  span:last-child {
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const CartIcon = styled.button`
  background-color: ${(props) => props.theme["purple-800"]};
  color: ${(props) => props.theme["white"]};
  padding: 8px;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme["purple-400"]};
  }
`;
