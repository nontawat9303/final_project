export interface SapPaymentSlip {
    id: number;
    name: string;
    path: string;
    soId: number;
    inuse: boolean;
    creator: number;
    editor: number;
    deletor: number;
    createdate: Date;
    editdate: Date;
    deletedate: Date;
}