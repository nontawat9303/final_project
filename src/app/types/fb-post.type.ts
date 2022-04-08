export interface FBPost {
    id: number;
    shopId: number;
    title: string;
    fbPost: string;
    fbPage: string;
    inuse: boolean;
    isActive: boolean;
    creator: number;
    editor: number;
    deletor: number;
    createdate: Date;
    editdate: Date;
    deletedate: Date;
}

export interface FBPostItems {
    id: number;
    postId: number;
    itemId: number;
    code: string;
    price: number;
    additionalPrice: number;
    isActive: boolean;
    creator: number;
    editor: number;
    deletor: number;
    createdate: Date;
    editdate: Date;
    deletedate: Date;
}
