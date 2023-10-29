import { useFormContext, Controller } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";

type RHFAutocompleteProps = {
  name: string;
  label: string;
  multiple?: boolean;
  freeSolo?: boolean;
  options?: any;
  ChipProps?: any;
  type?: string;
  InputProps?: any;
  helperText?: string;
};

const RHFAutocomplete = ({
  name,
  label,
  helperText,
  ...other
}: RHFAutocompleteProps) => {
  // Value of control prop is value of form
  const { control, setValue } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          options={[...other.options]}
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          onChange={(_, newValue) =>
            setValue(name, newValue, { shouldValidate: true })
          }
          // use other props like type, label, etc...
          {...other}
          renderInput={(params) => (
            <TextField
              label={label}
              error={!!error}
              helperText={error ? error.message : helperText}
              {...params}
            />
          )}
        />
      )}
    />
  );
};

export default RHFAutocomplete;
