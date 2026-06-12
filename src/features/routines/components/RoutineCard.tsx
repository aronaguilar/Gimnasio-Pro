import React, { useState } from 'react';
import { type Routine } from '../types';

interface RoutineCardProps {
  routine: Routine;
}

export const RoutineCard: React.FC<RoutineCardProps> = ({ routine }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-800 border border-slate-800 rounded-xl overflow-hidden transition-all duration-200 hover:border-slate-700">
      {/* Cabecera de la Tarjeta */}
      <div 
        className="p-5 flex justify-between items-center cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className="text-lg font-bold text-zinc-100">{routine.name}</h3>
          {routine.description && (
            <p className="text-sm text-zinc-400 mt-1">{routine.description}</p>
          )}
          <span className="text-xs text-zinc-500 block mt-2">
            Creada el: {routine.createdAt}
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium 
              bg-emerald-950/50 text-emerald-400 border border-emerald-800/50`
          }>
            {routine.creator === 'coach' ? 'Entrenador' : 'Propia'}
          </span>
          <span className="text-emerald-600 text-xl transition-transform duration-200">
            {isOpen ? '▲' : '▼'}
          </span>
        </div>
      </div>

      {/* Lista de Ejercicios Desplegable */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-900/40 p-5 space-y-3">
          <h4 className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2 pl-1">
            Ejercicios ({routine.exercises.length})
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-zinc-300">
              <thead>
                <tr className="text-slate-500 text-xs border-b border-slate-700">
                  <th className="pb-2 pl-1 font-medium">Ejercicio</th>
                  <th className="pb-2 font-medium text-center">Series</th>
                  <th className="pb-2 font-medium text-center">Reps</th>
                  <th className="pb-2 font-medium text-center">Descanso</th>
                  <th className="pb-2 font-medium text-center">Demo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-500">
                {routine.exercises.map((exercise) => (
                  <tr key={exercise.id} className="hover:bg-slate-500/20 group">
                    <td className="p-2.5 pl-1 font-medium text-zinc-200">{exercise.name}</td>
                    <td className="p-2.5 text-center text-zinc-400">{exercise.sets}</td>
                    <td className="p-2.5 text-center text-zinc-400">{exercise.reps}</td>
                    <td className="p-2.5 text-center text-zinc-500">{exercise.rest}</td>
                    <td className="p-2.5 text-center">
                      {exercise.videoUrl ? (
                        <a
                          href={exercise.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Ver video demostrativo"
                          /* Detiene la propagación del click por si usás eventos en la fila en el futuro */
                          onClick={(e) => e.stopPropagation()} 
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-emerald-400 bg-slate-800 text-zinc-400 hover:bg-emerald-400 hover:text-black transition-all duration-200 shadow-sm group-hover:scale-105"
                        >
                          {/* Icono de Play estilizado con CSS puro */}
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-4 h-4 ml-0.5 text-emerald-600 "
                          >
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-xs text-zinc-600 italic pr-2">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};