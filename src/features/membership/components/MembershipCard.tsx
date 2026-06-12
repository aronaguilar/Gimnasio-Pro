import React from 'react';

interface MembershipCardProps {
  title: string;
  value: string;
  subtext?: string;
  icon: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

export const MembershipCard: React.FC<MembershipCardProps> = ({
  title,
  value,
  subtext,
  icon,
  variant = 'default',
}) => {
  const bgStyles = {
    default: 'bg-slate-900 border-slate-800 text-slate-100',
    success: 'bg-emerald-950/40 border-emerald-500/20 text-emerald-400',
    warning: 'bg-amber-950/40 border-amber-500/20 text-amber-400',
    danger: 'bg-rose-950/40 border-rose-500/20 text-rose-400',
  };

  return (
    <div className={`p-6 rounded-2xl border transition-all duration-300 ${bgStyles[variant]}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">{title}</h3>
        <div className="p-2 rounded-xl bg-slate-800/50">{icon}</div>
      </div>
      <div className="text-2xl font-bold tracking-tight">{value}</div>
      {subtext && <p className="text-xs text-slate-400 mt-2">{subtext}</p>}
    </div>
  );
};