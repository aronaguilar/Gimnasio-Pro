import React from 'react';
import { type RoutineTab } from '../types';

interface RoutineTabsProps {
  activeTab: RoutineTab;
  setActiveTab: (tab: RoutineTab) => void;
}

export const RoutineTabs: React.FC<RoutineTabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: RoutineTab; label: string }[] = [
    { id: 'my-routines', label: 'Mis Rutinas' },
    { id: 'assigned', label: 'Asignadas' },
    { id: 'create', label: 'Crear Rutina' },
  ];

  return (
    <div className="flex bg-slate-900  border border-slate-800  p-2 rounded-t-xl gap-2 mb-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 py-3 text-sm font-medium transition-all duration-200 rounded-lg ${
            activeTab === tab.id
              ? 'bg-emerald-500/10  border border-emerald-500/20 text-emerald-400 shadow-md font-semibold'
              : 'text-slate-200 hover:bg-slate-800'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};