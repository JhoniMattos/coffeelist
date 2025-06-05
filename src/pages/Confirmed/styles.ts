import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem 10rem;
  gap: 6.3rem;
`;

export const OrderConfirmed = styled.div`
  width: 32.8rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme["yellow-500"]};
  }

  p {
    font-size: 1.1rem;
    color: ${(props) => props.theme["gray-500"]};
    margin-bottom: 2.5rem;
  }

  ul {
    list-style: none;
    padding: 2.5rem;
    margin: 0;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    border: 1px solid transparent;
    border-radius: 8px;

    background: linear-gradient(
          ${(props) => props.theme["white-100"]},
          ${(props) => props.theme["white-100"]}
        )
        padding-box,
      linear-gradient(
          90deg,
          ${(props) => props.theme["yellow-300"]},
          ${(props) => props.theme["purple-400"]}
        )
        border-box;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${(props) => props.theme["gray-300"]};
    text-align: left;
  }

  .icon-circle {
    width: 32px;
    height: 32px;
    min-width: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .map {
    background-color: ${(props) => props.theme["purple-400"]};
  }

  .timer {
    background-color: ${(props) => props.theme["yellow-300"]};
  }

  .dollar {
    background-color: ${(props) => props.theme["yellow-500"]};
  }
`;
