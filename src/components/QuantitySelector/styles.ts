import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
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
