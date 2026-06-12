// src/features/dashboard/DashboardContainer.tsx
import React from 'react';
import { mockDashboardData } from './mockData';
import { Dumbbell, CreditCard, Calendar, UserCheck } from 'lucide-react';

export const DashboardContainer: React.FC = () => {
  const { usuario, membresia, rutinaHoy } = mockDashboardData;
  const membresiaActiva = membresia.estado === 'activa';

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10 text-slate-100 min-h-screen">

      {/* Cabecera */}
      <div>
        <h1 className="text-3xl font-black tracking-tight text-slate-100">Dashboard</h1>
        <p className="text-slate-400 text-sm mt-1">
          Resumen de tu membresía y entrenamiento del día.
        </p>
      </div>

      {/* Banner de bienvenida */}
      <div className="bg-[url('/fondo2.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl border border-slate-800 overflow-hidden">
        <div className="bg-black/50 h-full p-6 md:p-8 backdrop-blur-[.5px]">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            ¡Bienvenido, {usuario.nombre}!
          </h2>
          <p className="mt-2 text-zinc-300 font-medium">
            Cada entrenamiento cuenta. ¡Listo para romperla hoy?
          </p>
        </div>
      </div>

      {/* Grid de widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Widget de membresía */}
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                Tu Membresía
              </p>
              <h3 className="text-xl font-bold text-slate-200 mt-1">{membresia.tipo}</h3>
            </div>
            <div className={`p-2 rounded-xl bg-slate-800/50 ${
              membresiaActiva ? 'text-emerald-400' : 'text-rose-400'
            }`}>
              <UserCheck size={20} />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between bg-slate-800/50 p-4 rounded-xl">
            <div>
              <span className="text-sm text-slate-400 block">Estado</span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 border ${
                membresiaActiva
                  ? 'bg-emerald-950/50 text-emerald-400 border-emerald-800/50'
                  : 'bg-rose-950/50 text-rose-400 border-rose-800/50'
              }`}>
                {membresiaActiva ? 'Activa' : 'Vencida'}
              </span>
            </div>
            <div className="text-right">
              <span className="text-sm text-slate-400 block">Vence en</span>
              <span className="text-lg font-bold text-slate-200">{membresia.diasRestantes} días</span>
            </div>
          </div>

          <div className="mt-4 flex items-center text-xs text-slate-500 gap-1">
            <CreditCard size={14} />
            <span>Próximo pago: {membresia.proximoVencimiento}</span>
          </div>
        </div>

        {/* Widget de rutina del día */}
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                Entrenamiento de Hoy
              </p>
              <h3 className="text-xl font-bold text-slate-200 mt-1">{rutinaHoy.enfoque}</h3>
            </div>
            <div className="p-2 rounded-xl bg-slate-800/50 text-emerald-400">
              <Dumbbell size={20} />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl">
            <div className="flex items-center gap-2 text-slate-300">
              <Calendar size={18} className="text-slate-400" />
              <span className="font-medium">{rutinaHoy.dia}</span>
            </div>
            <div className="w-px h-6 bg-slate-700" />
            <span className="text-sm text-slate-400 font-medium">
              {rutinaHoy.totalEjercicios} ejercicios asignados
            </span>
          </div>

          <button className="mt-4 w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm">
            Ver Rutina Completa
          </button>
        </div>

      </div>
    </div>
  );
};
