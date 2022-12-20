import React, { MutableRefObject } from 'react';

import './Input.scss';

type InputProps = {
  label: string;
  value: MutableRefObject<HTMLInputElement>;
  error?: string;
};

const InputField = ({ label, value, error }: InputProps) => {
  return (
    <div className="Input">
      <label htmlFor={label} className="Input__label">
        <input ref={value} id={label} type="text" required />
        <span className="Input__label--text">{label}</span>
        <span className="Input__label--helper Input__label--helper--error">{error}</span>
      </label>
    </div>
  );
};

export { InputField };
