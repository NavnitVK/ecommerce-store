import type { CartItem } from "../types/CartItem.js";

function Cart({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
}: {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}) {

  const cartTotal = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

  return (
    <>
    <h2>Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <>
      {cart.map((item) => (
      <article key={item.id}>
      <p>{item.name}</p>
      <p>
        Quantity:
        <button onClick={() => increaseQuantity(item.id)}>+</button>
        {item.quantity} <button onClick={() => decreaseQuantity(item.id)}>-</button>
      </p>
      <p>Price: ${item.price.toFixed(2)}</p>
      <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      <button onClick={() => removeFromCart(item.id)}>
       Remove
      </button>
      </article>
      ))}
     <p>Cart Total: ${cartTotal.toFixed(2)}</p>
     </>
    )}
    

    </>
  );
}

export default Cart;
