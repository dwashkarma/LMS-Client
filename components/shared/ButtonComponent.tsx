import { Button } from "@mui/material";

interface ButtonPropTypes {
  handleClick: () => void;
  children: React.ReactNode;
  disable?: boolean;
}
const ButtonComponent: React.FC<ButtonPropTypes> = ({
  handleClick,
  children,
  disable,
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
      color="primary"
      className="text-white"
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
