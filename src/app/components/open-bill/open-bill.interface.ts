export interface OpenBill {
    count : number;
    entries : [];
}

export interface AddProduct {
    customerId : number;
    codeProduct: string;
    price: number;
    amount: number;
    comment: string;
  }

  