import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/Auth/userSlice";
import LoginForm from "../LoginForm";

function Login(props) {
  const { handleClose, showModalRegister } = props;

  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log("Log :  New state user", user);

      //Close dialog
      if (handleClose) handleClose();

      //show thông báo đăng ký thành công
      enqueueSnackbar("Login Successfully!", { variant: "Success" });
    } catch (error) {
      console.log("Log :  Fail to register =>", error.message);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} showModalRegister={showModalRegister} />
    </div>
  );
}

export default Login;
