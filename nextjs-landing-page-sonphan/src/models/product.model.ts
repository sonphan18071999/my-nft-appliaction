import { IAuthor } from "@/models/author.model";

export interface IProduct {
  id: string;
  title: string;
  category:
    | "Upper Body"
    | "Lower Body"
    | "Hat"
    | "Shoes"
    | "Accessory"
    | "Legendary"
    | "Mythic"
    | "Epic"
    | "Rare";
  price: number;
  isFavorite: boolean;
  createdAt: number;
  theme: "Dark" | "Light" | "Colorful" | "Halloween";
  tier: "Basic" | "Premium" | "Deluxe";
  imageId: number;
  author: IAuthor;
}
