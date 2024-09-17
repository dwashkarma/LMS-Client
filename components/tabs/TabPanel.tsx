import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
};

const TabPanel = (props: Props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
export default TabPanel;
