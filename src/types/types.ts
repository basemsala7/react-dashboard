export interface UsersType {
  id: number;
  img: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  verified: boolean;
  activities: object[];
}
export interface ProductsType {
  id: number;
  img: string;
  title: string;
  color: string;
  price: string;
  createdAt: string;
  producer: string;
  inStock: boolean;
}
export interface RowTitleType {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  title7: string;
  title8: string;
  title9: string;
}

export interface TopDealsType {
  id: number;
  img: string;
  username: string;
  email: string;
  amount: string;
}

export interface BarChartType {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
}
