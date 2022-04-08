export interface LiveMsg {
    id: number;
    recipient: string;
    msg: string;
    fbLiveId: number;
    shopId: number;
    msgStatusId: number;
    attemp: number;
    soId: number;
    inuse: boolean;
    isActive: boolean;
    creator: number;
    editor: number;
    deletor: number;
    createdate: Date;
    editdate: Date;
    deletedate: Date;
}