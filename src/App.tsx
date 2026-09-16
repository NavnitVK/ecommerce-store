import { useState } from "react";
import Header
 from "./components/Header.js";
import ProductList from "./components/ProductList.js";
import Cart from "./components/Cart.js";
import type { Product } from "./types/Product.js";
import type { CartItem } from "./types/CartItem.js";

function App() {

const [cart, setCart] = useState<CartItem[]>([]);

function addToCart(product: Product,      quantity: number) {
    setCart((previousCart) => {
      const existingItem = previousCart.find(
        (item) => item.id === product.id
      );
  if (existingItem) {
    return previousCart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity
          };

      }

      return item;

    });
  }  else {
    return [
  ...previousCart,
  {
    ...product,
    quantity
  }
];
  
}

      
  });

}

function removeFromCart(id: number) {
  setCart((previousCart) => {
    return previousCart.filter((item) => item.id !== id);
  });

}

function increaseQuantity(id: number) {
  setCart((previousCart) => {
    return previousCart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }

      return item;
    });
  });

}

function decreaseQuantity(id: number) {
  setCart((previousCart) => {
    return previousCart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity > 1
            ? item.quantity - 1
            : item.quantity
        };
      }

      return item;
    });
  });


}

  return (
    <><h1>My Store</h1>
    <Header />
    <ProductList addToCart={addToCart} />
    <Cart 
      cart={cart}
      removeFromCart={removeFromCart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity} />
    </>
  
  );
}

export default App;