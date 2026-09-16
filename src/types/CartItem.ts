import type { Product } from "./Product.js";

export type CartItem = Product & {
  quantity: number;
};