export interface SetBankAccount {
    id: number;
    code: string;
    name: string;
    account: string;
    bankId: string;
    shopId: number;
    inuse: boolean;
    creator: number;
    editor: number;
    deletor: number;
    createdate: Date;
    editdate: Date;
    deletedate: Date;
}