import { CircularProgress } from "@mui/material";
import React from "react";

type Props = {};

function loading({}: Props) {
  return (
    <div className="h-screen place-content-center place-items-center flex">
      <CircularProgress color="inherit" />
    </div>
  );
}

export default loading;
