import { Autocomplete, TextField } from "@mui/material";

type Props = {
  value: string;
  handleChange: any;
  options: any;
};
function AutoCompleteComponent({ value, handleChange, options }: Props) {
  return (
    <Autocomplete
      id="controlled-demo"
      value={value}
      onChange={handleChange}
      inputValue={value}
      //   onInputChange={(event, newInputValue) => {
      //     setValue(newInputValue);
      //   }}
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="controlled" variant="standard" />
      )}
    />
  );
}

export default AutoCompleteComponent;
