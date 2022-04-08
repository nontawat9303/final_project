export interface CatShopType {
    id: number;
    code: string;
    name: string;
    inuse: boolean;
    creator: number;
    editor: number;
    deletor: number;
    createdate: Date;
    editdate: Date;
    deletedate: Date;
}