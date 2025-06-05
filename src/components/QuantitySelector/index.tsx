import { Minus, Plus } from "phosphor-react";

import { Container } from "./styles";

interface QuantitySelectorProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function QuantitySelector({
  quantity,
  onIncrement,
  onDecrement,
}: QuantitySelectorProps) {
  return (
    <Container>
      <button onClick={onDecrement}>
        <Minus size={18} />
      </button>

      <span>{quantity.toString().padStart(2, "0")}</span>

      <button onClick={onIncrement}>
        <Plus size={18} />
      </button>
    </Container>
  );
}
