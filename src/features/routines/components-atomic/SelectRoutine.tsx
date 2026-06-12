import React, { type SelectHTMLAttributes} from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export const SelectRoutine: React.FC<SelectProps> = ({ className, children, ...props }) => {
  return (
    <select
      className={`w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-sm text-zinc-200 focus:outline-none focus:border-emerald-500 ${className || ''}`}
      {...props}
    >
        <option value="">Seleccionar...</option>
        {children}
    </select>
  );
};

export default SelectRoutine;