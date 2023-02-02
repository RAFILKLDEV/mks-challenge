export interface CardsType {
  cards: { name: string; photo: string; price: number }[];
  loading: boolean;
}

export interface ProductType {
  card: { name?: string; photo?: string; price: number; amount?: number };
  id: number;
}

export interface CardTypes {
  card: { name?: string; photo?: string; price: number; amount?: number };
  id?: number;
}

export interface ModalTypes {
  setModal: Function;
  modal: boolean;
}

export interface StateTypes {
  products: {
    name?: string;
    photo?: string;
    price: number;
    amount: number;
  }[];
  value: number;
  total: number[];
}

export interface CounterTypes {
  count?: number;
  setCount?: Function;
  id: number;
}

// type CardsType = {
//   // kek: { name: string }[];
//   kek23: Array<{ name: string }>;
// };
