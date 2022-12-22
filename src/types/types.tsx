export interface User {
  name: string;
  email: string;
  accounts: Account[];
}

export interface Account {
  type: string;
  balance: number;
}

export interface Transaction {
  type: string;
  amount: number;
  account?: string;
  fromAccount?: string;
  toAccount?: string;
}

export interface Friend {
  name: string;
  email: string;
}
