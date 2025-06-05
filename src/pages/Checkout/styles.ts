import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2.5rem 10rem;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme["gray-800"]};
    margin-bottom: 0.93rem;
  }
`;

export const FormSection = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
`;

export const InfoContainer = styled.div`
  width: 40rem;
  background: ${(props) => props.theme["white-200"]};
  padding: 2.5rem;
  border-radius: 6px;

  header {
    display: flex;

    svg {
      margin-right: 0.5rem;
      color: ${(props) => props.theme["yellow-500"]};
    }

    span {
      color: ${(props) => props.theme["gray-500"]};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-300"]};
      margin-bottom: 2rem;
      font-weight: 400;
    }
  }
`;

export const AdressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .cep {
    width: 12.5rem;
  }

  .number-complement,
  .hood-city-uf {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  .number {
    width: 12.5rem;
  }

  .complement {
    flex: 1;
  }

  .hood {
    width: 12.5rem;
  }

  .city {
    flex: 1;
  }

  .uf {
    width: 3.75rem;
  }
`;

export const PaymentContainer = styled.div`
  width: 40rem;
  background: ${(props) => props.theme["white-200"]};
  padding: 2.5rem;
  border-radius: 6px;
  margin-top: 0.75rem;

  header {
    display: flex;

    svg {
      margin-right: 0.5rem;
      color: ${(props) => props.theme["purple-400"]};
    }

    span {
      color: ${(props) => props.theme["gray-500"]};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-300"]};
      margin-bottom: 3.43rem;
      font-weight: 400;
    }
  }
`;
export const PaymentOptions = styled.div`
  display: flex;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme["purple-400"]};
  }
`;

export const InfoCoffees = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartTotal = styled.div`
  width: 33.5rem;
  background: ${(props) => props.theme["white-200"]};
  padding: 2.5rem;
  border-radius: 6px 44px;
`;

export const CartCoffee = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme["white-400"]};

  img {
    width: 4rem;
    height: 4rem;
  }

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;

    header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      p {
        font-size: 1rem;
        color: ${(props) => props.theme["gray-500"]};
        margin: 0;
      }

      .price {
        font-weight: bold;
        color: ${(props) => props.theme["gray-300"]};
      }
    }

    .actions {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      margin-top: 0.5rem;

      .remove-button {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background-color: ${(props) => props.theme["white-400"]};
        color: ${(props) => props.theme["gray-300"]};
        border: none;
        padding: 0.48rem;
        border-radius: 6px;
        font-size: 0.75rem;
        text-transform: uppercase;
        cursor: pointer;

        svg {
          color: ${(props) => props.theme["purple-400"]};
        }

        &:hover {
          background: ${(props) => props.theme["gray-100"]};
        }
      }
    }
  }
`;

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p,
    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-300"]};
    }

    h2 {
      font-size: 1.25rem;
      color: ${(props) => props.theme["gray-500"]};
    }

    &.total span {
      font-size: 1.25rem;
      color: ${(props) => props.theme["gray-500"]};
      font-weight: bold;
    }
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  padding: 1.5rem;
  border-radius: 4px;

  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.875rem;

  background: ${(props) => props.theme["yellow-300"]};
  color: ${(props) => props.theme["white"]};

  &:hover {
    background: ${(props) => props.theme["yellow-500"]};
  }
`;
