import { AuthorModel } from "./author.model";
import { CategoryModel } from "./category.model";

export interface BookModel {
    id: number;
    title: string;
    categoryId: number;
    authorId: number;
    status: string;
    pages?: number; 
    author?: AuthorModel;   // 👈 opcional, para vir do backend
    category?: CategoryModel;
}