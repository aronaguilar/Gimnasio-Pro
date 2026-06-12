import React from 'react';

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  rightLabelElement?: React.ReactNode;
}

export const AuthInput: React.FC<AuthInputProps> = ({ label, rightLabelElement, ...props }) => {
  return (
    <div className="mt-3 text-[0.875rem] leading-[1.25rem]">
      <div className="flex justify-between items-center mb-1">
        <label htmlFor={props.id} className="text-[#9ca3af]">{label}</label>
        {rightLabelElement}
      </div>
      <input 
        {...props}
        className="w-full rounded-[0.375rem] border border-[#374151] outline-0 bg-[#111827] 
        py-3 px-4 text-[#f3f4f6] box-border transition-colors duration-200 ease-in-out 
        focus:border-emerald-400"
      />
    </div>
  );
};