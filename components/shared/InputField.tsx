import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import { ChangeEvent } from "react";

interface InputTypes {
  name: string;
  label?: string;
  value: string;
  helperText?: string;
  errors?: boolean;
  type: string;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleBlur?: any;
  placeholder?: string;
  onKeyDown?: any;
  showAndornment?: any;
}
const InputField: React.FC<InputTypes> = ({
  name,
  label,
  value,
  type,
  helperText,
  errors,
  handleChange,
  handleBlur,
  placeholder,
  onKeyDown,
  showAndornment,
}) => {
  return (
    <TextField
      placeholder={placeholder}
      fullWidth
      name={name}
      value={value}
      label={label}
      type={type}
      variant="outlined"
      onBlur={handleBlur}
      onChange={handleChange}
      helperText={helperText}
      error={errors}
      onKeyDown={onKeyDown}
      InputProps={
        showAndornment && {
          endAdornment: (
            <InputAdornment position="end">{showAndornment}</InputAdornment>
          ),
        }
      }
    />
  );
};

export default InputField;
