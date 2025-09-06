export interface BookModel {
    id: number;
    title: string;
    categoryId: number;
    authorId: number;
    status: string;
    pages?: number; 
}