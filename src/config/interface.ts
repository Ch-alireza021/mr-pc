export interface User {
  // [x: string]: string;
  role: string;
  address: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  username: string;
  _id: string;
}

export type Children = React.ReactNode;

export interface TableCol {
  id: number;
  label: string;
  renderCol: (row: Row) => any;
}

export interface Row {
  _id: string;
  [key: string]: any;
}

export interface ITableBody {
  columns: Array<TableCol> | [];
  rows: Array<Row> | [];
  page: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}
export interface ITable {
  columns: Array<TableCol> | [];
  rows: Array<Row> | [];
}

