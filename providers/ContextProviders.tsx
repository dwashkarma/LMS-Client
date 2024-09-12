"use client";
import { useMemo, useState } from "react";
import { DarkContext } from "./context/activeDark";

export const ContextProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [active, setActive] = useState(false);
  const darkActive = useMemo(() => ({ active, setActive }), [active]);
  return (
    <DarkContext.Provider value={darkActive}>{children}</DarkContext.Provider>
  );
};
