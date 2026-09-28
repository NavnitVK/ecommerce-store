import { useState } from "react";
import type { Product } from "../types/Product.js";
import ProductCard from "./ProductCard.js";

function ProductList({ addToCart }: { addToCart: (product: Product, quantity: number) => void }) {

const [searchTerm, setSearchTerm] = useState("");
const [selectedCategory, setSelectedCategory] = useState("all");
const [sortOption, setSortOption] = useState("default");
const products: Product[] = [
 {
  id: 101,
  name: "Soccer Ball",
  price: 29.99,
  image: "soccer-ball.jpg",
  rating: 4.5,
  reviews: 126,
  category: "Football"
 },
 {
  id: 102,
  name: "Rugby Ball",
  price: 32.99,
  image: "rugby-ball.jpg",
  rating: 4.0,
  reviews: 115,
  category: "Rugby"
 },
 {
  id: 103,
  name: "Cricket Ball",
  price: 19.99,
  image: "cricket-ball.jpg",
  rating: 3.5,
  reviews: 126,
  category: "Cricket"
 }
];

 const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "all" ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

 const sortedProducts = [...filteredProducts];
    if (sortOption === "price-low") {
    sortedProducts.sort((productA, productB) => {
      return productA.price - productB.price;
    });
  }
    if (sortOption === "price-high") {
      sortedProducts.sort((productA, productB) => {
        return productB.price - productA.price;
    });
  }
    if (sortOption === "name-az") {
    sortedProducts.sort((productA, productB) => {
      return productA.name.localeCompare(productB.name);
    });
  }
    if (sortOption === "name-za") {
    sortedProducts.sort((productA, productB) => {
      return productB.name.localeCompare(productA.name);
    });
  }
  return (
    <>
    <h2>Products</h2>
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
    />
    <select
      value={selectedCategory}
      onChange={(event) => setSelectedCategory(event.target.value)}
    >
      <option value="all">All</option>
      <option value="Football">Football</option>
      <option value="Rugby">Rugby</option>
      <option value="Cricket">Cricket</option>
    </select>

    <select
      value={sortOption}
      onChange={(event) => setSortOption(event.target.value)}
    >
      <option value="default">Sort By</option>
      <option value="price-low">Price: Low → High</option>
      <option value="price-high">Price: High → Low</option>
      <option value="name-az">Name: A → Z</option>
      <option value="name-za">Name: Z → A</option>
    </select>
    {filteredProducts.length === 0 ? (
      <p>No products found.</p>
    ) : (
      sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      
      ))
    )}
    </>
  );
}

export default ProductList;