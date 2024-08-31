import { IconButton, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ChangeEvent, KeyboardEventHandler } from "react";
interface InputTypes {
  name: string;
  label: string;
  value: string;
  helperText?: string;
  errors?: boolean;
  type: string;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleBlur?: any;
  handleClickPassword?: any;
  onKeyDownCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
}
const PasswordField: React.FC<InputTypes> = ({
  name,
  label,
  value,
  type,
  helperText,
  errors,
  handleChange,
  handleBlur,
  handleClickPassword,
  onKeyDownCapture,
}) => {
  return (
    <TextField
      fullWidth
      name={name}
      value={value}
      label={label}
      type={type}
      variant="outlined"
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDownCapture={onKeyDownCapture}
      helperText={helperText}
      error={errors}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClickPassword}>
              {type === "text" ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;
