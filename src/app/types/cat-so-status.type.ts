export interface CatSoStatus {
    id: number;
    code: string;
    name: string;
    nameTh: string;
    nameEn: string;
    description: string;
    inuse: boolean;
    creator: number;
    editor: number;
    deletor: number;
    createdate: Date;
    editdate: Date;
    deletedate: Date;
}