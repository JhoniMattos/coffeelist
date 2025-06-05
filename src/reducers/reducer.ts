import { produce } from "immer";

type Quantities = {
  [coffeeId: number]: number;
};

type QuantityAction =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "REMOVE"; payload: number }
  | { type: "RESET" };

export function quantitiesReducer(
  state: Quantities,
  action: QuantityAction
): Quantities {
  return produce(state, (draft) => {
    switch (action.type) {
      case "INCREMENT": {
        const id = action.payload;
        draft[id] = (draft[id] ?? 1) + 1;
        break;
      }

      case "DECREMENT": {
        const id = action.payload;
        draft[id] = Math.max((draft[id] ?? 1) - 1, 1);
        break;
      }

      case "REMOVE": {
        const id = action.payload;
        delete draft[id];
        break;
      }

      case "RESET":
        Object.keys(draft).forEach((key) => {
          draft[+key] = 1;
        });
        break;
    }
  });
}
