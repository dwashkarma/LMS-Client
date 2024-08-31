import React from "react";

function SearchComponent({
  handleChange,
  value,
  label,
  placeholder,
}: {
  handleChange: any;
  value: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        className="border border-primary w-[20%]"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchComponent;
