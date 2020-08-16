import React, { InputHTMLAttributes } from 'react';

import { InputBlock } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <InputBlock className="input-block">
      <input type="text" id={name} {...rest} required />
      <label htmlFor={name}>{label}</label>
    </InputBlock>
  );
}

export default Input;