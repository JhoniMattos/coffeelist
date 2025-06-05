import { produce } from "immer";

export enum OrderActionTypes {
  CHECKOUT_CART = "CHECKOUT_CART",
  SET_ERRORS = "SET_ERRORS",
}

interface CheckoutPayload {
  order: {
    address: Record<string, string>;
    paymentMethod: string;
    items: { id: number; quantity: number }[];
  };
}

type OrderAction =
  | {
      type: OrderActionTypes.CHECKOUT_CART;
      payload: CheckoutPayload;
    }
  | {
      type: OrderActionTypes.SET_ERRORS;
      payload: string[];
    };

interface OrderState {
  errors: string[];
  orders: any[];
}

const initialState: OrderState = {
  errors: [],
  orders: [],
};

export function orderReducer(
  state = initialState,
  action: OrderAction
): OrderState {
  return produce(state, (draft) => {
    switch (action.type) {
      case OrderActionTypes.SET_ERRORS: {
        draft.errors = action.payload;
        break;
      }

      case OrderActionTypes.CHECKOUT_CART: {
        const { order } = action.payload;
        draft.orders.push({
          id: Date.now(),
          ...order,
        });
        draft.errors = [];
        break;
      }

      default:
        return draft;
    }
  });
}