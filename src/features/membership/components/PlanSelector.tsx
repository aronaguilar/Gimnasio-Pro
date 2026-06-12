import React from 'react';
import { type MembershipPlan } from '../types';
import { CheckCircle } from 'lucide-react';

interface PlanSelectorProps {
  plans: MembershipPlan[];
  currentPlanName: string;
  onPay: (planId: string) => void;
}

export const PlanSelector: React.FC<PlanSelectorProps> = ({
  plans,
  currentPlanName,
  onPay,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => {
        const isCurrent = plan.name === currentPlanName;
        return (
          <div
            key={plan.id}
            className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
              isCurrent
                ? 'border-emerald-500 bg-emerald-950/10'
                : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-slate-200">{plan.name}</h4>
                {isCurrent && (
                  <span className="flex items-center gap-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle size={12} /> Actual
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-400 mb-4">{plan.description}</p>
              <div className="text-3xl font-black text-slate-100 mb-1">
                ${plan.price.toLocaleString()}
                <span className="text-xs text-slate-500 font-normal"> /mes</span>
              </div>
              <div className="text-xs text-slate-400 mb-6">
                Acceso: {plan.allowedDaysPerWeek === 'Libre' ? 'Pase Libre' : `${plan.allowedDaysPerWeek} días por semana`}
              </div>
            </div>

            <div className="space-y-2 mt-4">
              
              <button
                onClick={() => onPay(plan.name)}
                className={`w-full py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                  isCurrent
                    ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700 border border-slate-700/50'
                }`}
              >
                {isCurrent ? 'Renovar / Pagar' : 'Contratar y Pagar'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};