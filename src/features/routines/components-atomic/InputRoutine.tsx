import React, { type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputRoutine: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={className="w-full bg-slate-900 border border-emerald-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"}
      {...props}
    />
  );
};

export default InputRoutine;