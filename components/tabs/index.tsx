"use client";
import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

type Props = {};

const TabComponent = (props: Props) => {
  const [value, setValue] = useState(0);

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} textColor="primary">
        <Tab label="NextJS" {...a11yProps(0)} />
        <Tab label="JavaScript" {...a11yProps(1)} />
        <Tab label="DOTNET ASP" {...a11yProps(2)} />
        <Tab label="Flutter" {...a11yProps(3)} />
        <Tab label="DevOps" {...a11yProps(4)} />
        <Tab label="UI/UX" {...a11yProps(5)} />
      </Tabs>
    </div>
  );
};
export default TabComponent;
