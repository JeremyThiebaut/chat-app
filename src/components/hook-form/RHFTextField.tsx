import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

type THFTextFieldProps = {
  name: string;
  label: string;
  type?: string;
  InputProps?: any;
  helperText?: string;
};

const THFTextField = ({ name, helperText, ...other }: THFTextFieldProps) => {
  // Value of control prop is value of form
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          error={!!error}
          helperText={error ? error.message : helperText}
          // use other props like type, label, etc...
          {...other}
        />
      )}
    />
  );
};

export default THFTextField;
