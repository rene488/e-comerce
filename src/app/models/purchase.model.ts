import { Product } from "./product.model";

export interface Purchase{
    id: string;
    idUser: string;
    img: string;
    date: number;
    products: Product[];
    total: number;    
}