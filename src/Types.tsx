export interface ProductsTypes {
  photo: string;
  name: string;
  price: number;
  description: string;
}

export interface CardsType {
  cards: { name: string; photo: string; price: number; description: string }[];
}

export interface CardTypes {
  card: { photo: string; name: string; price: number; description: string };
}

export interface ModalTypes {
  setModal: Function;
  modal: boolean;
}

// type CardsType = {
//   // kek: { name: string }[];
//   kek23: Array<{ name: string }>;
// };
