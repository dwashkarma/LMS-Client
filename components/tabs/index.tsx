"use client";
import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

type Props = {
  data: string[];
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
};

const TabComponent = ({ data, handleChange, value }: Props) => {
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Tabs value={value} onChange={handleChange} textColor="primary">
        {Array.isArray(data) &&
          data?.map((items: string, index: number) => {
            return <Tab key={index} label={items} {...a11yProps(index)} />;
          })}
      </Tabs>
    </div>
  );
};
export default TabComponent;
