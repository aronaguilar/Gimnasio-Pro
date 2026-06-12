// src/components/Sidebar.tsx
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Dumbbell, CreditCard, User } from 'lucide-react';

export const Sidebar = () => {
  // Array de navegación para no repetir código
  const links = [
    { to: '/', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { to: '/rutinas', label: 'Mis Rutinas', icon: <Dumbbell size={20} /> },
    { to: '/membresia', label: 'Membresía', icon: <CreditCard size={20} /> },
  ];

  return (
      <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 p-4 flex flex-col justify-between">
         <div className="space-y-6">
            {/* Logo / Nombre del Gimnasio */}
            <div className="flex items-center gap-2 px-2 text-emerald-400 font-bold text-xl tracking-wider">
               <Dumbbell size={24} />
               <span>PRO GYM</span>
            </div>

            {/* Menú de Navegación */}
            <nav className="space-y-1">
               {links.map((link) => (
                  <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                     `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors text-sm ${
                        isActive
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                     }`
                  }
                  >
                  {link.icon}
                  <span>{link.label}</span>
                  </NavLink>
               ))}
            </nav>
         </div>
         <div>
        <NavLink
          to="/Login" // Coincide con la ruta /Login de tu App.tsx
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors text-sm 
            border hover:border-emerald-500/20 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10
            bg-slate-800 '
            }`
          }
        >
          <User size={20} />
          <span>Logearse</span>
        </NavLink>
      </div>
      </aside>
  );
};