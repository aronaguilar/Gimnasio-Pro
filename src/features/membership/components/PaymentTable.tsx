import React from 'react';
import {type PaymentHistory } from '../types';

interface PaymentTableProps {
  payments: PaymentHistory[];
}

export const PaymentTable: React.FC<PaymentTableProps> = ({ payments }) => {
  const statusStyles = {
    Aprobado: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    Pendiente: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Rechazado: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-800 bg-slate-900 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <th className="p-4">Fecha</th>
            <th className="p-4">Concepto</th>
            <th className="p-4">Monto</th>
            <th className="p-4">Estado</th>
            <th className="p-4">Factura</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800 text-sm text-slate-300">
          {payments.map((payment) => (
            <tr key={payment.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="p-4">{payment.date}</td>
                <td className="p-4 font-medium">{payment.concept}</td>
                <td className="p-4">${payment.amount.toLocaleString()}</td>
                <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusStyles[payment.status]}`}>
                        {payment.status}
                    </span>
                </td>
                <td className='p-4'>
                    <a 
                        href="/factura.pdf" 
                        download={"facturaGimnasio.pdf"}
                        className='px-2.5 py-1 rounded-full text-xs font-medium border border-red-400 text-red-400 h'
                    >
                        Ver factura
                    </a> 
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};