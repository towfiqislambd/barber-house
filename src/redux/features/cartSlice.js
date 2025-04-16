import { createSlice } from "@reduxjs/toolkit";

const availableSerivices = [
  {
    id: 1,
    tittle: "Nails",
    subTittle: "SAR 55.00",
  },
  {
    id: 2,
    tittle: "Haircut",
    subTittle: "SAR 55.00",
  },
  {
    id: 3,
    tittle: "Nails",
    subTittle: "SAR 55.00",
  },
  {
    id: 4,
    tittle: "Haricut",
    subTittle: "SAR 55.00",
  },
  {
    id: 5,
    tittle: "Nails",
    subTittle: "SAR 55.00",
  },
  {
    id: 6,
    tittle: "Haircut",
    subTittle: "SAR 55.00",
  },
  {
    id: 7,
    tittle: "Nails",
    subTittle: "SAR 55.00",
  },
  {
    id: 8,
    tittle: "Haircut",
    subTittle: "SAR 55.00",
  },
];

const initialState = {
  Services: availableSerivices,
  selectedServices: [],
};

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: initialState,
  reducers: {
    addSelectedServices: (state, actions) => {
      const item = actions.payload;
      const exists = state.selectedServices.some(
        service => service.id === item.id
      );

      if (exists) {
        state.selectedServices = state.selectedServices.filter(
          service => service.id !== item.id
        );
      } else {
        state.selectedServices.push(item);
      }
    },
  },
});

export const { addSelectedServices } = CartSlice.actions;
export default CartSlice.reducer;
