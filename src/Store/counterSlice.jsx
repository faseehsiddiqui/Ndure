import { createSlice } from "@reduxjs/toolkit";
import Men from "../Men/men";
import Women from "../Women/Women";
import kid from "../Kids/Kid";
const initialState = {
  Men: Men,
  Women: Women,
  kid: kid,
  lastproductdata: null,
};

export const counterSlice = createSlice({
  name: "Menapi",
  initialState,
  reducers: {
    storedata: (state, action) => {
      state.lastproductdata = action.payload;
    },
  },
  //   incrementByAmount: (state, action) => {
  //     state.last = action.payload;
  //   },
});

// Action creators are generated for each case reducer function
export const { storedata } = counterSlice.actions;
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;
