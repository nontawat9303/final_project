export interface SysAmphur {
    amphurId: number;
    amphurCode: string;
    amphurName: string;
    amphurNameEng: string;
    geoId: number;
    provinceId: number;
    isMark: number;

}

export interface SysCallCourierLog {
    id: number;
    shopId: number;
    ticketPickupId: number;
    result: number;
    type: number;
    couriererName: string;
    coutiererTel: string;
    courierId: number;
    soId: number;
    amount: number;
    remark: string;
    response: string;
    createdate: Date;
    creator: number;

}

export interface SysDeliverMothod {
    id: number;
    name: number;
    link: string;
    canTrack: number;
    logo: string;
    connected: boolean;

}

export interface SysKBankSlipTrans {
    id: number;
    shopId: number;
    transactionId: string;
    reqUid: string;
    bankCode: string;
    payAmount: boolean;
    response: string;
    isDev: boolean;
    createdate: Date;
    creator: number;

}

export interface LoginLog {
    id: number;
    username: string;
    remoteaddress: string;
    logdate: Date;
    inuse: boolean;

}

export interface SysProvince {
    provinceId: number;
    provinceCode: string;
    provinceName: string;
    provinceNameEng: string;
    geoId: number;
    zone: string;

}

export interface SysRole {
    id: number;
    name: string;
    inuse: boolean;
    creator: number;
    editor: number;
    deletor: number;
    createdate: Date;
    editdate: Date;
    deletedate: Date;

}

export interface SysRunning {
    id: number;
    pref: string;
    suff: string;
    running: number;
    sect: string;
    inuse: boolean;
    creator: number;
    editor: number;
    deletor: number;
    createdate: Date;
    editdate: Date;
    deletedate: Date;

}

export interface SysTambon {
    tambonId: number;
    provinceId: number;
    amphurId: number;
    tambonName: number;
    creator: string;
    createdate: Date;

}

export interface SysUser {
    id: number;
    shopId: number;
    username: string;
    password: string;
    siteId: number;
    roleId: number;
    name: string;
    tel: string;
    email: string;
    logSession: string;
    inuse: boolean;
    creator: number;
    editor: number;
    deletor: number;
    createdate: Date;
    editdate: Date;
    deletedate: Date;
    isReadNoti: number;
    server: string;
}

export interface SysWalletLogs {
    id: number;
    walletLogTypeId: number;
    soId: number;
    shopId: number;
    amount: number;
    netAmount: number;
    discountPercent: number;
    netProfit: number;
    latestBalance: number;
    ownerBalance: number;
    createdate: Date;
    creator: number;
    isDev: number;
    editor: number;
    editdate: Date;

}

export interface SysZipcode {
    zipId: number;
    provinceId: number;
    amphurId: number;
    zipCode: string;
    creator: number;
    createdate: Date;
    remoteZone: number;

}