import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme["white-300"]};
  color: ${(props) => props.theme["gray-300"]};

  border-radius: 0.25rem;
  border: 1px solid ${(props) => props.theme["gray-100"]};

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

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
