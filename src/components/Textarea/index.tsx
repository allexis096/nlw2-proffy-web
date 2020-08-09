import React, { TextareaHTMLAttributes } from 'react';

import { TeaxtAreaBlock } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <TeaxtAreaBlock className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </TeaxtAreaBlock>
  );
}

export default Textarea;