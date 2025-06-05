export interface QuantityState {
  quantity: number;
  min: number;
  initial: number;
}

export enum QuantityActionTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
  SET = "SET",
  REMOVE = "REMOVE",
}

export type QuantityAction =
  | { type: QuantityActionTypes.INCREMENT }
  | { type: QuantityActionTypes.DECREMENT }
  | { type: QuantityActionTypes.RESET }
  | { type: QuantityActionTypes.REMOVE }
  | { type: QuantityActionTypes.SET; payload: number };
