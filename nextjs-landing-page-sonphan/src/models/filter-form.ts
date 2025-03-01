export interface FilterFormFields {
    theme?: "Dark" | "Light" | "Colorful" | "Halloween";
    tier?: "Basic" | "Premium" | "Deluxe";
    time?: "LTH" | "HTL";
    price?: string;
    category?: Category;
}

export type Category =
    "All" |
    "Upper Body"
    | "Lower Body"
    | "Hat"
    | "Shoes"
    | "Accessory"
    | "Legendary"
    | "Mythic"
    | "Epic"
    | "Rare";

export interface IFilterTag {
    name: Category;
}