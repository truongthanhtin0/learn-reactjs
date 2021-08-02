import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/Auth/userSlice";
import RegisterForm from "../RegisterForm";

function Register(props) {
  const { handleClose, showModalLogin } = props;

  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  // const showNotiSnackBar = (x, y) => {
  //   enqueueSnackbar(x, { variant: y });
  // };

  const handleSubmit = async (values) => {
    try {
      values.username = values.email;
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log("Log :  New state user", user);

      //Close dialog
      if (handleClose) handleClose();

      //show thông báo đăng ký thành công
      enqueueSnackbar("Register Successfully!", { variant: "Success" });
    } catch (error) {
      console.log("Log :  Fail to register =>", error.message);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} showModalLogin={showModalLogin} />
    </div>
  );
}

export default Register;
