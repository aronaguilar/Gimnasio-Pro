import React from 'react';

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const AuthButton: React.FC<AuthButtonProps> = ({ children, ...props }) => {
  return (
    <button 
      {...props}
      className="block w-full bg-emerald-400 p-3 mt-6 text-center text-[#111827] 
      border-none rounded-[0.375rem] font-semibold cursor-pointer transition-colors 
      duration-200 ease-in-out hover:bg-emerald-600 disabled:opacity-50"
    >
      {children}
    </button>
  );
};