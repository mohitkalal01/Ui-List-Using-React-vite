import React from "react";

export default function Input({type,label,placeholder,id,name,value,onChange,}) {
  return (
  <>
      <label className="block text-gray-700 font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        onChange={onChange}
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </>
  );
}
