import { IProduct } from "@/models/product.model";

export interface CartItem extends IProduct {
  quantity: string;
}
