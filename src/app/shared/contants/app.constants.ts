export const ResponseCode = {
  Success: 200,
  NoContent: 204,
  BadRequest: 400,
  NotFound: 404,
  Unauthorized: 401,
  Catch: -99,
  Error: -1,
  Duplicate: -1100,
  Expired: -101,
};

export enum ResponseCodeEnum {
  Success = 200,
  NoContent = 204,
  BadRequest = 400,
  NotFound = 404,
  Unauthorized = 401,
  Catch = -99,
  Error = -1,
  Duplicate = -1100,
  Expired = -101,
}

export const ResponseMessage = {
  Success: 'success',
  Duplicate: 'Data duplicate',
  EmailDuplicate: 'Email is already registered.',
  TellDuplicate: 'Mobile number is already registered.',
  NoContent: 'Content not found.',
  NotFound: 'Data not found.',
};

