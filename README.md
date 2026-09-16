# E-Commerce Store

A responsive e-commerce storefront built with **React, TypeScript, and Vite** as part of my front-end development portfolio.

The project focuses on building a practical shopping experience while applying modern React patterns, TypeScript type safety, component-based architecture, and immutable state management.

## 🚀 Features

### Product Catalog
- Displays products with:
  - Product name
  - Product ID
  - Price
  - Product image
  - Star rating
  - Review count
- Reusable `ProductCard` component
- Product data is strongly typed with TypeScript

### Shopping Cart
- Add products to the cart
- Add multiple quantities of the same product
- Automatically combine duplicate products
- Increase product quantity
- Decrease product quantity
- Remove products from the cart
- Calculate individual item totals
- Calculate the overall cart total
- Currency values displayed to two decimal places

### TypeScript
The project has been migrated from JavaScript/JSX to TypeScript/TSX.

TypeScript is currently used for:
- Product data models
- Cart item types
- React component props
- Function parameters
- React state
- Type-safe imports

## 🛠️ Technologies

- **React**
- **TypeScript**
- **Vite**
- **HTML5**
- **CSS3**
- **JavaScript / ES6+**
- **Git & GitHub**

## 📁 Project Structure

```text
src/
├── components/
│   ├── Cart.tsx
│   ├── Header.tsx
│   ├── ProductCard.tsx
│   └── ProductList.tsx
│
├── types/
│   ├── CartItem.ts
│   └── Product.ts
│
├── App.tsx
└── main.tsx
```

## 🧩 Component Overview

### `App.tsx`

The main application component and central location for shared cart state.

Responsibilities include:
- Managing cart state
- Adding products
- Removing products
- Increasing quantities
- Decreasing quantities
- Passing cart data and functions to child components

### `ProductList.tsx`

Responsible for displaying the available products and passing product information to individual product cards.

### `ProductCard.tsx`

A reusable component representing an individual product.

It handles:
- Product information
- Product rating
- Quantity selection
- Add-to-cart interaction

### `Cart.tsx`

Displays the current shopping cart and handles the cart interface.

It displays:
- Products currently in the cart
- Quantity controls
- Product prices
- Individual item totals
- Cart total
- Remove buttons

### `Product.ts`

Defines the structure of a product:

```ts
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
};
```

### `CartItem.ts`

Extends the `Product` type with a quantity:

```ts
export type CartItem = Product & {
  quantity: number;
};
```

## 🧠 React Concepts Practiced

This project has been used to practice and reinforce several core React concepts:

- Functional components
- Props
- State management with `useState`
- Sharing state between components
- Passing functions through props
- Rendering lists with `.map()`
- Searching arrays with `.find()`
- Filtering arrays with `.filter()`
- Calculating values with `.reduce()`
- Conditional rendering
- Event handling
- Immutable state updates
- Object and array spread syntax

## 🔷 TypeScript Concepts Practiced

The TypeScript migration has introduced practical type-safety concepts including:

- Type aliases
- Intersection types
- Typed React state
- Typed component props
- Typed function parameters
- `import type`
- Type inference
- TypeScript with React components
- TSX

## 🛒 Current Products

The current catalog contains three example products:

| Product | ID | Price | Rating | Reviews |
|---|---:|---:|---:|---:|
| Soccer Ball | 101 | $29.99 | ⭐ 4.5 | 126 |
| Rugby Ball | 102 | $32.99 | ⭐ 4.0 | 115 |
| Cricket Ball | 103 | $19.99 | ⭐ 3.5 | 126 |

## ⚙️ Running the Project Locally

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd ecommerce-store
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, normally:

```text
http://localhost:5173/
```

## 📌 Current Development Status

The project is currently under active development.

The core product and shopping-cart functionality has been implemented, and the project has been migrated to TypeScript.

### Completed

- [x] React/Vite project setup
- [x] Product catalog
- [x] Reusable product cards
- [x] Product ratings and reviews
- [x] Quantity selection
- [x] Add to cart
- [x] Duplicate product quantity handling
- [x] Remove from cart
- [x] Increase cart quantity
- [x] Decrease cart quantity
- [x] Individual item totals
- [x] Cart total
- [x] TypeScript migration
- [x] Type-safe product and cart models
- [x] Type-safe component props

### Planned Improvements

- [ ] Prevent cart quantity from falling below 1
- [ ] Improve overall UI and responsive styling
- [ ] Product categories
- [ ] Product filtering
- [ ] Product search
- [ ] Product detail pages
- [ ] Persistent cart using local storage
- [ ] Checkout interface
- [ ] Order summary
- [ ] Form validation
- [ ] More realistic product data
- [ ] Backend/API integration
- [ ] Database integration
- [ ] Authentication

## 🎯 Purpose

This project is part of my ongoing front-end development portfolio.

The goal is to build increasingly practical applications while developing a strong understanding of:

- React
- TypeScript
- Modern JavaScript
- Front-end architecture
- State management
- API integration
- Software development practices

The project will continue to evolve as new functionality and technologies are introduced.

## 👨‍💻 Author

**Vinit Navnit Kumar**

Front-End Developer in training, focused on React, TypeScript, JavaScript, HTML, CSS, and modern web development.