import { useState } from "react";
import type { Product } from "../types/Product.js";

function ProductCard({
  product,
  addToCart
}: {
  product: Product;
  addToCart: (product: Product, quantity: number) => void;
}) {
  
  const [quantity, setQuantity] = useState(1);
  
  return(
  <article>
    <p>{product.name}</p>
    <p>{product.price}</p>
    <img src={product.image} alt={product.name} />
    <p>{[1, 2, 3, 4, 5].map((star) => (
    star <= product.rating ? "⭐" : null
    ))}</p>
    <p>Reviews: {product.reviews}</p>
    <p>Quantity: 
    <button onClick={() => setQuantity(quantity + 1)}>+</button> 
      {quantity}
    <button onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}>-</button></p>
    <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
  </article>  
  );
}
export default ProductCard
