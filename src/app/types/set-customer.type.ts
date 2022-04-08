export interface SetCustomer {
    id: number;
    code: string;
    name: string;
    fbId: string;
    address: string;
    soi: string;
    road: string;
    tambon: string;
    amphurId: number;
    provinceId: number;
    zipCode: string;
    tel: string;
    receiverName: string;
    email: string;
    blackList: number;
    shopId: number;
    customerTypeId: number;
    customerTyprId: number;
    inuse: boolean;
    creator: number;
    editor: number;
    deletor: number;
    createdate: Date;
    editdate: Date;
    deletedate: Date;
}