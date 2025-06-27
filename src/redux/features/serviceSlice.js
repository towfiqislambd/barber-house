// redux/features/serviceSlice.js
import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    selectedServices: [],
  },
  reducers: {
    toggleService: (state, action) => {
      const { service, bookingType } = action.payload;

      if (bookingType === "single") {
        // If already selected, unselect it
        const isSame = state.selectedServices[0]?.id === service.id;
        state.selectedServices = isSame ? [] : [service];
      } else {
        const exists = state.selectedServices.find((s) => s.id === service.id);
        if (exists) {
          state.selectedServices = state.selectedServices.filter(
            (s) => s.id !== service.id
          );
        } else {
          state.selectedServices.push(service);
        }
      }
    },
    clearServices: (state) => {
      state.selectedServices = [];
    },
  },
});

export const { toggleService, clearServices } = serviceSlice.actions;
export default serviceSlice.reducer;
