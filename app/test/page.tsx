"use client";

import SearchComponent from "@/components/search";
import React, { useState } from "react";

function page() {
  const [text, setText] = useState<string>("");
  const handleChange = (e: any) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <div>
      <SearchComponent
        placeholder="jpt"
        handleChange={handleChange}
        value={text}
        label="Search"
      />
      <SearchComponent
        placeholder="kasjca"
        handleChange={handleChange}
        value={text}
        label="text"
      />
      <SearchComponent
        placeholder="jajcbakcsbjpt"
        handleChange={handleChange}
        value={text}
        label="Courses"
      />
    </div>
  );
}

export default page;
