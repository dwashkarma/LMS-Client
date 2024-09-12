import { Button } from "@mui/material";

interface ButtonPropTypes {
  handleClick: () => void;
  children: React.ReactNode;
  disable?: boolean;
  color?: "primary" | "secondary" | "info" | "error" | "success";
}
const ButtonComponent: React.FC<ButtonPropTypes> = ({
  handleClick,
  children,
  disable,
  color = "primary",
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <Button
      disabled={disable}
      onClick={handleClick}
      onKeyDown={() => handleKeyDown}
      variant="contained"
      color={color}
      className="text-white"
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
