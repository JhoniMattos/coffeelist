import { MapPin, ShoppingCart } from "phosphor-react";
import { CartButton, HeaderContainer, LocaleAndBuy } from "./styles";

import logocoffedelivery from "../../../assets/logo-coffeedelivery.svg";
import { useCart } from "../../contexts/CartContext";

import { NavLink } from "react-router-dom";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logocoffedelivery} alt="Logo Coffee Delivery" />
      </NavLink>
      <LocaleAndBuy>
        <h1>
          <MapPin size={28} weight="fill" /> Porto Alegre, RS
        </h1>
        <CartButton to="/checkout">
          <ShoppingCart size={20} weight="fill" />
          {cartQuantity > 0 && <span>{cartQuantity}</span>}
        </CartButton>
      </LocaleAndBuy>
    </HeaderContainer>
  );
}
