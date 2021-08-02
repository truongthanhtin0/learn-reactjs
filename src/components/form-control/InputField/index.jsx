import { TextField } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";

function InputField(props) {
  const { form, name, label, disabled } = props;
  const { formState } = form;
  const { errors } = formState;
  const hasError = errors[name];

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          margin="normal"
          variant="outlined"
          label={label}
          error={!!hasError}
          helperText={errors[name]?.message}
          disabled={disabled}
        />
      )}
      // as={TextField}
    />
  );
}

export default InputField;
