import React from 'react';

import './Button.scss';

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button className="Button" {...props}>
      {children}
    </button>
  );
};

export { Button };
