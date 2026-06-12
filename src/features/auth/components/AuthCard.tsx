import React from 'react';

interface AuthCardProps {
  title: string;
  children: React.ReactNode;
}

export const AuthCard: React.FC<AuthCardProps> = ({ title, children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0b0f19]">
      <div className="w-[400px] rounded-[0.75rem] bg-[#111827] p-8 text-[#f3f4f6] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]">
        <p className="text-center text-[1.5rem] leading-8 font-bold m-0 mb-6">{title}</p>
        {children}
      </div>
    </div>
  );
};