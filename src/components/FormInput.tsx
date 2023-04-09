import { TextField, TextFieldProps } from "@mui/material";

const FormInput = (props: TextFieldProps) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      {...props}
    />
  );
};

export { FormInput };
