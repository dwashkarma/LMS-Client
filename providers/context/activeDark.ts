import { createContext, Dispatch, SetStateAction } from "react";

interface DarkInterface {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}
export const DarkContext = createContext<DarkInterface>({
  active: false,
  setActive: () => {},
});
