import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";

import {
  AdressForm,
  CartTotal,
  CartCoffee,
  CartTotalInfo,
  CheckoutButton,
  Container,
  InfoCoffees,
  InfoContainer,
  PaymentContainer,
  PaymentOptions,
  FormSection,
} from "./styles";

import { Input } from "./components/Inputs/Input";
import { Select } from "./components/Select";

import { QuantitySelector } from "../../components/QuantitySelector";
import { CoffeeList } from "../../@types/coffees";
import { useCart } from "../../contexts/CartContext";
import { OrderActionTypes, orderReducer } from "../../reducers/orderReducer";

export function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(orderReducer, {
    errors: [],
    orders: [],
  });

  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart,
    setPaymentMethod,
  } = useCart();

  const deliveryFee = 3.5;

  const itemsTotal = cartItems.reduce((acc, item) => {
    const coffee = CoffeeList.find((c) => c.id === item.id);
    return coffee ? acc + coffee.price * item.quantity : acc;
  }, 0);

  const total = itemsTotal + deliveryFee;

  function handleSelectPayment(method: string) {
    setSelectedPayment(method);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const address = {
      cep: formData.get("cep")?.toString() ?? "",
      rua: formData.get("rua")?.toString() ?? "",
      numero: formData.get("numero")?.toString() ?? "",
      complemento: formData.get("complemento")?.toString() ?? "",
      bairro: formData.get("bairro")?.toString() ?? "",
      cidade: formData.get("cidade")?.toString() ?? "",
      uf: formData.get("uf")?.toString()?.toUpperCase() ?? "",
    };

    const errors: string[] = [];

    if (!address.cep) errors.push("CEP é obrigatório.");
    if (!address.rua) errors.push("Rua é obrigatória.");
    if (!address.numero) errors.push("Número é obrigatório.");
    if (!address.bairro) errors.push("Bairro é obrigatório.");
    if (!address.cidade) errors.push("Cidade é obrigatória.");
    if (!address.uf) errors.push("UF é obrigatória.");
    if (!selectedPayment) errors.push("Selecione uma forma de pagamento.");
    if (cartItems.length === 0) errors.push("O carrinho está vazio.");

    if (errors.length > 0) {
      dispatch({ type: OrderActionTypes.SET_ERRORS, payload: errors });
      return;
    }

    setPaymentMethod(selectedPayment as "credit" | "debit" | "cash");

    dispatch({
      type: OrderActionTypes.CHECKOUT_CART,
      payload: {
        order: {
          address,
          paymentMethod: selectedPayment!,
          items: cartItems,
        },
      },
    });

    localStorage.setItem(
      "lastOrder",
      JSON.stringify({
        order: {
          address,
          paymentMethod: selectedPayment,
          items: cartItems,
        },
      })
    );

    clearCart();

    navigate("/confirmed");
  }

  return (
    <Container>
      <FormSection onSubmit={handleSubmit}>
        <div>
          <h1>Complete seu pedido</h1>

          <InfoContainer>
            <header>
              <MapPinLine size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </header>

            <AdressForm>
              <Input
                name="cep"
                className="cep"
                type="number"
                placeholder="CEP"
              />
              <Input name="rua" placeholder="Rua" />
              <div className="number-complement">
                <Input
                  name="numero"
                  className="number"
                  type="number"
                  placeholder="Número"
                />
                <Input
                  name="complemento"
                  className="complement"
                  type="text"
                  placeholder="Complemento"
                />
              </div>
              <div className="hood-city-uf">
                <Input
                  name="bairro"
                  className="hood"
                  type="text"
                  placeholder="Bairro"
                />
                <Input
                  name="cidade"
                  className="city"
                  type="text"
                  placeholder="Cidade"
                />
                <Input
                  name="uf"
                  className="uf"
                  type="text"
                  maxLength={2}
                  placeholder="UF"
                />
              </div>
            </AdressForm>
          </InfoContainer>

          <PaymentContainer>
            <header>
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>

            <PaymentOptions>
              <Select
                type="button"
                className={selectedPayment === "credit" ? "selected" : ""}
                onClick={() => handleSelectPayment("credit")}
              >
                <CreditCard size={16} />
                Cartão de crédito
              </Select>

              <Select
                type="button"
                className={selectedPayment === "debit" ? "selected" : ""}
                onClick={() => handleSelectPayment("debit")}
              >
                <Bank size={16} />
                Cartão de débito
              </Select>

              <Select
                type="button"
                className={selectedPayment === "cash" ? "selected" : ""}
                onClick={() => handleSelectPayment("cash")}
              >
                <Money size={16} />
                Dinheiro
              </Select>
            </PaymentOptions>
          </PaymentContainer>
          {state.errors.length > 0 && (
            <ul
              className="error-list"
              style={{ color: "red", marginTop: "1rem" }}
            >
              {state.errors.map((err, idx) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <InfoCoffees>
            <h1>Cafés Selecionados</h1>

            <CartTotal>
              {cartItems.map((item) => {
                const coffee = CoffeeList.find((c) => c.id === item.id);
                if (!coffee) return null;

                return (
                  <CartCoffee key={coffee.id}>
                    <img src={coffee.image} alt={coffee.title} />
                    <div className="info">
                      <header>
                        <p>{coffee.title}</p>
                        <span className="price">
                          R$ {coffee.price.toFixed(2)}
                        </span>
                      </header>

                      <div className="actions">
                        <QuantitySelector
                          quantity={item.quantity}
                          onIncrement={() => incrementQuantity(coffee.id)}
                          onDecrement={() => decrementQuantity(coffee.id)}
                        />
                        <button
                          className="remove-button"
                          onClick={() => removeFromCart(coffee.id)}
                        >
                          <Trash size={18} /> Remover
                        </button>
                      </div>
                    </div>
                  </CartCoffee>
                );
              })}

              <CartTotalInfo>
                <div className="itensTotal">
                  <p>Total de itens</p>
                  <div className="price">
                    <span>R$</span>
                    <span>{itemsTotal.toFixed(2)}</span>
                  </div>
                </div>
                <div className="delivery">
                  <p>Entrega</p>
                  <div className="price">
                    <span>R$</span>
                    <span>{deliveryFee.toFixed(2)}</span>
                  </div>
                </div>
                <div className="total">
                  <h2>Total</h2>
                  <div className="price">
                    <span>R$</span>
                    <span>{total.toFixed(2)}</span>
                  </div>
                </div>
              </CartTotalInfo>

              <CheckoutButton as="button" type="submit">
                Confirmar pedido
              </CheckoutButton>
            </CartTotal>
          </InfoCoffees>
        </div>
      </FormSection>
    </Container>
  );
}
