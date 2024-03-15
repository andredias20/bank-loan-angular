export interface Loan {
  _id: number;
  date: Date;
  currency: string;
  total_value: number;
  conversion_tax: number;
  loan_expire_date: Date;
}
