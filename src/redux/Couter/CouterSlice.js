import { createSlice } from "@reduxjs/toolkit";

const CouterSlice = createSlice({
    name: "count",
    initialState: 0,
    reducers: {
        increase(state){
            return state + 1;
        },
        decrease(state) {
            return state - 1;
        },
    },
});

const { actions, reducer } = CouterSlice;
export const { increase, decrease } = actions;
export default reducer;