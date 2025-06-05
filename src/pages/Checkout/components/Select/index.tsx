import type { ButtonHTMLAttributes, ReactNode } from "react";

import { Container } from "./styles";

interface SelectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Select({ children, ...rest }: SelectProps) {
  return <Container {...rest}>{children}</Container>;
}
