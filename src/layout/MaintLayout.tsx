import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar'; // Asegurate de que la ruta apunte bien a tu Sidebar

export const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-slate-950 text-slate-100 overflow-hidden">
      {/* Tu Sidebar fijo a la izquierda */}
      <Sidebar />

      {/* Contenedor dinámico donde se renderiza la ruta actual */}
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};