import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface CartItem {
  id: number;
  quantity: number;
}

type PaymentMethod = "credit" | "debit" | "cash" | "";

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
  addToCart: (id: number, quantity: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "coffeeDelivery:cart";

interface StoredCartData {
  cartItems: CartItem[];
  paymentMethod: PaymentMethod;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed: StoredCartData = JSON.parse(stored);
      setCartItems(parsed.cartItems || []);
      setPaymentMethod(parsed.paymentMethod || "");
    }
  }, []);

  useEffect(() => {
    const data: StoredCartData = {
      cartItems,
      paymentMethod,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [cartItems, paymentMethod]);

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  function addToCart(id: number, quantity: number) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { id, quantity }];
      }
    });
  }

  function incrementQuantity(id: number) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrementQuantity(id: number) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function removeFromCart(id: number) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCartItems([]);
    setPaymentMethod("");
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        paymentMethod,
        setPaymentMethod,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
