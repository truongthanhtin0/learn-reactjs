
import { createSlice } from '@reduxjs/toolkit';

const swapSlice = createSlice({
    name: "swap",
    initialState: 0,
    reducers: {
        swapAction(state){
            if(state === 0)
                return 1;
            else return 0;
        },
    },
});

const { actions, reducer } = swapSlice;
export const { swapAction } = actions;
export default reducer;