import type { Product } from "../types/Product.js";
import ProductCard from "./ProductCard.js";

function ProductList({ addToCart }: { addToCart: (product: Product, quantity: number) => void }) {

const products: Product[] = [
 {
  id: 101,
  name: "Soccer Ball",
  price: 29.99,
  image: "soccer-ball.jpg",
  rating: 4.5,
  reviews: 126
 },
 {
  id: 102,
  name: "Rugby Ball",
  price: 32.99,
  image: "rugby-ball.jpg",
  rating: 4.0,
  reviews: 115
 },
 {
  id: 103,
  name: "Cricket Ball",
  price: 19.99,
  image: "cricket-ball.jpg",
  rating: 3.5,
  reviews: 126
 }
];

  
  return (
    <>
    <h2>Products</h2>
    {products.map((product) => (
    <ProductCard key={product.id} product={product} addToCart={addToCart} />
    )
    )}
    </>
  );
}

export default ProductList;