export interface SetMessage {
    id: number;
    typeId: number;
    message: string;
    shopId: number;
    isActive: number;
    picture: string;
    creator: number;
    editor: number;
    deletor: number;
    createdate: Date;
    editdate: Date;
    deletedate: Date;
}