import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 1rem;

  background-color: ${(props) => props.theme["white-400"]};
  color: ${(props) => props.theme["gray-300"]};

  border-radius: 0.25rem;
  font-size: 0.75rem;
  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme["gray-100"]};
  }

  &.selected {
    background: ${(props) => props.theme["purple-100"]};
    border: 1px solid ${(props) => props.theme["purple-400"]};
  }

  gap: 0.75rem;

  > input {
    width: 100%;
    height: 2.6rem;

    padding: 0.75rem;

    color: ${(props) => props.theme["gray-300"]};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${(props) => props.theme["gray-200"]};
      display: flex;
      align-items: center;
      justify-content: end;
    }
  }
`;
