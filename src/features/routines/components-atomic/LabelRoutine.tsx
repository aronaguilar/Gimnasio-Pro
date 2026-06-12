import React, { type LabelHTMLAttributes } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const LabelRoutine: React.FC<LabelProps> = ({ className, children, ...props }) => {
  return (
    <label
      className={`block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 ${className || ''}`}
      {...props}
    >
        {children}
    </label>
  );
};

export default LabelRoutine;