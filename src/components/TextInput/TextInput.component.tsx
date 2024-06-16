"use client";

import { TextInputProps } from "./TextInput";

const TextInput = (props: TextInputProps) => {
  const { type='text', value, onChange, disabled, placeholder = "" } = props;
  return (
    <div className="w-full">
      <input
        type={type}
        className="w-full p-4 border border-white-primary rounded-lg text-white-primary bg-transparent"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
