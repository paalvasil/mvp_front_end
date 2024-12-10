import React from 'react';

export default function Input({ label, placeholder, type = 'text', value, onChange }) {
  return (
    <div className="input-div">
      <label className="label">
        {label}
      </label>
      <input 
        type={type}
        placeholder={placeholder}
        className="input-row"
        value={value}          
        onChange={onChange}    
      />
    </div>
  );
}
