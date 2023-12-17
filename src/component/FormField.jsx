// FormField.js
import React from "react";

const FormField = ({ label, name, value, onChange, type = "text", error }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}:
      </label>
      <input
        className={`w-full border ${
          error ? "border-red-500" : "border-gray-300"
        } p-2 rounded-md`}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{label} is required.</p>
      )}
    </div>
  );
};

export default FormField;
