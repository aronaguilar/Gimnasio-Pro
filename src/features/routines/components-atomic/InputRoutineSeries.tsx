import React, { type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputRoutineSeries: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-sm text-center text-zinc-200 focus:outline-none focus:border-emerald-500"}
      {...props}
    />
  );
};

export default InputRoutineSeries;