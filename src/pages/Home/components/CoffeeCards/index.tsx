import { useState } from "react";

import { ShoppingCart } from "phosphor-react";
import {
  Container,
  Tags,
  Price,
  Buy,
  ContainerTitle,
  CartIcon,
} from "./styles";

import { useCart } from "../../../../contexts/CartContext";
import { QuantitySelector } from "../../../../components/QuantitySelector";

interface CoffeeProps {
  id: number;
  title: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
}

export function CoffeeCards({
  id,
  title,
  description,
  price,
  tags,
  image,
}: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart(id, quantity)
    setQuantity(1);
  }

  function handleIncrease() {
    setQuantity(quantity + 1);
  }

  function handleDecrease() {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  }

  return (
    <Container>
      <img src={image} alt={title} />

      <Tags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <ContainerTitle>
        <h1>{title}</h1>
        <p>{description}</p>
      </ContainerTitle>

      <Buy>
        <Price>
          <span>R$</span>
          <span>{price.toFixed(2)}</span>
        </Price>

        <QuantitySelector
          quantity={quantity}
          onIncrement={handleIncrease}
          onDecrement={handleDecrease}
        />

        <CartIcon onClick={handleAddToCart}>
          <ShoppingCart size={20} weight="fill" />
        </CartIcon>
      </Buy>
    </Container>
  );
}
