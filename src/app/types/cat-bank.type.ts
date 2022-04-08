export interface CatBank {
    id: number;
    code: string;
    bestCode: string;
    name: string;
    inuse: boolean;
    bestInuse: boolean;
    creator: number;
    editor: number;
    deletor: number;
    createdate: Date;
    editdate: Date;
    deletedate: Date;
}