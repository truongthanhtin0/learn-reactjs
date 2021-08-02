import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const register = createAsyncThunk("user/register", async (payload) => {
  // Call Api
  const data = await userApi.register(payload);
  // Save Local storage
  localStorage.setItem("access_token", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));
  // return result
  return data.user;
});

export const login = createAsyncThunk("user/login", async (payload) => {
  // Call Api
  const data = await userApi.login(payload);
  // Save Local storage
  localStorage.setItem("access_token", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));
  // return result
  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: localStorage.getItem("user") || {},
    setting: {},
  },
  reducers: {
    logout(state) {
      // xóa localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
      //set lại current bằng object empty
      state.current = {};
    },
  },
  extraReducers: {
    //[register.fulfilled] là 1 chuỗi => 'register/fulfilled'
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
      //Cập nhật state, action.payload là giá trị trả về của function register createAsyncThunk ở trên.
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
      state.setting = { status: "login" };
      //Cập nhật state, action.payload là giá trị trả về của function register createAsyncThunk ở trên.
    },
  },
});

const { reducer, actions } = userSlice;
export const { logout } = actions;
export default reducer;
