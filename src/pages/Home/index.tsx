import {
  BenefitsGrid,
  CoffeeList,
  Container,
  HeaderContainer,
  TextContent,
  CoffeeGrid,
} from "./styles";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import coffecup from "../../../public/assets/coffee-cup.svg";
import { CoffeeCards } from "./components/CoffeeCards";
import background from "../../../public/assets/background.png";

import { CoffeeList as coffee } from "../../@types/coffees";

export function Home() {
  return (
    <Container>
      <HeaderContainer>
        <TextContent>
          <h1>
            Encontre o café perfeito <br />
            para qualquer hora do dia
          </h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />
            qualquer hora
          </h3>

          <BenefitsGrid>
            <ul>
              <li>
                <span className="icon-circle cart">
                  <ShoppingCart weight="fill" />
                </span>
                Compra simples e segura
              </li>
              <li>
                <span className="icon-circle package">
                  <Package weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </li>
              <li>
                <span className="icon-circle timer">
                  <Timer weight="fill" />
                </span>
                Entrega rápida e rastreada
              </li>
              <li>
                <span className="icon-circle coffee">
                  <Coffee weight="fill" />
                </span>
                O café chega fresquinho até você
              </li>
            </ul>
          </BenefitsGrid>
        </TextContent>

        <img src={coffecup} />
      </HeaderContainer>
      <img src={background} className="background" />

      <CoffeeList>
        <h1>Nossos cafés</h1>
        <CoffeeGrid>
          {coffee.map((item) => (
            <CoffeeCards
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              tags={item.tags}
              image={item.image}
            />
          ))}
        </CoffeeGrid>
      </CoffeeList>
    </Container>
  );
}
