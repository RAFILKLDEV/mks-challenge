import { createSlice } from "@reduxjs/toolkit";
import { StateTypes } from "../Types";

const initialState: StateTypes = {
  value: 0,
  products: [],
  total: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setProducts: ({ products }, { payload }): void => {
      let adicionar = true;

      if (products[0] === undefined) {
        products.push(payload);
        return;
      } else {
        products.map((e) => {
          if (e.name === payload.name) {
            adicionar = false;
          }
        });
        if (adicionar) {
          products.push(payload);
          return;
        }
      }
    },
    removeProduct: ({ products }, { payload }): void => {
      products.splice(payload, 1);
    },
    setAmount: ({ products }, { payload }): void => {
      products.splice(payload.id, 1, payload.arr);
    },
  },
});

export const { setValue, setProducts, removeProduct, setAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
