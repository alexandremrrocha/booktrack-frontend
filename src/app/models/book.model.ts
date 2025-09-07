import { BookStatus } from "../modules/book/book-status.enum";
import { AuthorModel } from "./author.model";
import { CategoryModel } from "./category.model";

export interface BookModel {
    id: number;
    title: string;
    categoryId: number;
    authorId: number;
    status: BookStatus;
    pages?: number; 
    author: AuthorModel;   
    category: CategoryModel;
}