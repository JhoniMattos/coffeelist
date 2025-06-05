import { useEffect, useState } from "react";
import { MapPin, CurrencyDollar, Timer } from "phosphor-react";
import { Container, OrderConfirmed } from "./styles";
import delivery from "../../../assets/delivery.svg";

const paymentMethodMap = {
  credit: "Cartão de Crédito",
  debit: "Cartão de Débito",
  cash: "Dinheiro",
};

interface Address {
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export function Confirmed() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [address, setAddress] = useState<Address | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("lastOrder");

    if (saved) {
      const parsed = JSON.parse(saved);

      const method = parsed?.order
        ?.paymentMethod as keyof typeof paymentMethodMap;
      if (method && paymentMethodMap[method]) {
        setPaymentMethod(paymentMethodMap[method]);
      }

      const addr = parsed?.order?.address;
      if (addr) {
        setAddress(addr);
      }
    }
  }, []);

  return (
    <Container>
      <OrderConfirmed>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <ul>
          <li>
            <div className="icon-circle map">
              <MapPin size={16} weight="fill" />
            </div>
            <div>
              Entrega em{" "}
              <strong>
                {address?.rua}, {address?.numero}
              </strong>
              <br />
              {address?.bairro} - {address?.cidade}, {address?.uf}
            </div>
          </li>
          <li>
            <div className="icon-circle timer">
              <Timer size={16} weight="fill" />
            </div>
            <div>
              Previsão de entrega
              <strong>
                <br />
                20 min - 30 min
              </strong>
            </div>
          </li>
          <li>
            <div className="icon-circle dollar">
              <CurrencyDollar size={16} weight="fill" />
            </div>
            <div>
              Pagamento na entrega <br />
              <strong>{paymentMethod}</strong>
            </div>
          </li>
        </ul>
      </OrderConfirmed>
      <img src={delivery} />
    </Container>
  );
}
