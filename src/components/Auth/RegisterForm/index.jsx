import { yupResolver } from "@hookform/resolvers/yup";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../form-control/InputField";
import PasswordField from "../../form-control/PasswordField";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function RegisterForm(props) {
  const { onSubmit, showModalLogin } = props;

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Vui lòng nhập Full Name!")
      .test("Nên nhập 2 kí tự", "Full Name phải từ 2 kí tự trở lên!", (value) => {
        return value.split(" ").length >= 2;
      }),
    email: yup.string().required("Vui lòng nhập Email!").email("Email chưa đúng định dạng!"),
    password: yup.string().required("Vui lòng nhập Password!").min(6, "Password phải ít nhất 6 kí tự!"),
    retypePassword: yup
      .string()
      .required("Vui lòng nhập RetypePassword!")
      .oneOf([yup.ref("password")], "RetypePasswork không hợp lệ!"),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
    form.reset();
  };

  const { isSubmitting } = form.formState;

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      {isSubmitting && <LinearProgress />}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create An Account
        </Typography>
        <form className={classes.form} onSubmit={form.handleSubmit(handleSubmitForm)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputField name="fullName" label="Full Name" form={form} />
            </Grid>
            <Grid item xs={12}>
              <InputField name="email" label="Email Address" form={form} />
            </Grid>
            <Grid item xs={12}>
              <PasswordField name="password" label="Password" form={form} />
            </Grid>
            <Grid item xs={12}>
              <PasswordField name="retypePassword" label="Retype Password" form={form} />
            </Grid>
          </Grid>
          <Button
            disabled={isSubmitting}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button color="primary" onClick={showModalLogin}>
                Already have an account? Sign in
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default RegisterForm;
