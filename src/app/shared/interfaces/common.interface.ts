import { ResponseCodeEnum } from "../contants/app.constants";

export interface ActionLog {
  date: Date;
  by?: {
    staffId?: string;
    userId?: string;
    name?: string;
  };
  refData?: any;
  remark?: string;
}

export interface Picture {
  base64: string;
  width?: number;
  height?: number;
  size?: number;
  contentType: string;
  name: string;
}

export interface Criteria {
  pageNumber: number;
  totalPage?: number;
  pageSize?: number;
  sortObject?: {};
  sortBy: string;
  isAsc: boolean;
  skip?: number;
  filter?: any;
  keyword?: string;
  status?: string;
}

export interface Paging {
  currentPage: number;
  pages: number[];
  sortBy: string;
  isAsc: boolean;
  totalRecords: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
}

// export interface ResponseApi {
//   code: ResponseCodeEnum;
//   status: "success" | "error" | "duplicate";
//   message?: string;
//   error?: any;
//   data: {
//     total?: number;
//     pageNumber?: number;
//     pageSize?: number;
//     totalPage?: number;
//     items?: any[];
//     item?: any;
//   };
// }

export interface Authentication {
  token: string;
  role: string;
  username: string;
  ref?;
  perms?;
}

export interface AuthToken {
  accessToken: string;
  kind: string;
}

export interface PageInfo {
  offset?: number;
  pageSize?: number;
  limit?: number;
  count?: number;
}

export class Page {
  size = 0;
  totalElements = 0;
  totalPages = 0;
  pageNumber = 0;
}

export class PagedData<T> {
  data = new Array<T>();
  page = new Page();
}

export interface RoleMaster {
  _id?;
  code: string;
  name: string;
  defaultValue: boolean;
  remark: string;
  status: any;
  created?: ActionLog;
  updated?: ActionLog[];
  isSelected?: boolean;
}

export interface RoleDocument {
  _id?;
  code: string;
  name: string;
  permissions: any[];
  sequence: number;
  remark: string;
  status: any;
  created?: ActionLog;
  updated?: ActionLog[];
}

// export interface BaseInterface {
//   _id?;
//   remark: string;
//   status: Status;
//   created?: ActionLog;
//   updated?: ActionLog[];
// }

export interface Address {
  address: string,
  subdistrict: string;
  district: string,
  province: string,
  postalCode: string,
}

export interface Dropdown {
  value: string;
  text: string;
}

export interface ResponseApi {
  code: ResponseCodeEnum;
  status: "success" | "error" | "duplicate";
  message?: string;
  error?: any;
  data: {
    total?: number;
    pageNumber?: number;
    pageSize?: number;
    totalPage?: number;
    items?: any[];
    item?: any;
  };
}