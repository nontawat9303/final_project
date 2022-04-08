export interface FBLive {
    id: number;
    title: string;
    shopId: number;
    shopLiveId: number;
    inuse: boolean;
    creator: number;
    editor: number;
    deletor: number;
    createdate: Date;
    editdate: Date;
    deletedate: Date;
}

export interface FBLiveItems {
    id: number;
    fbLiveTmpId: number;
    itemId: number;
    code: string;
    price: number;
    additionalPrice: number;
    matchAmount: number;
    matchDetail: string;
    inuse: boolean;
    creator: number;
    editor: number;
    deletor: number;
    createdate: Date;
    editdate: Date;
    deletedate: Date;
}