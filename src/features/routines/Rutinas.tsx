import React, { useState } from 'react';
import { RoutineTabs } from './components/RoutineTabs';
import { RoutineCard } from './components/RoutineCard';
import { type Routine, type RoutineTab } from './types';
import { CreateRoutineForm } from './components/CreateRoutineForm';

// Cambiamos el nombre a INITIAL_ROUTINES para usarlo como estado inicial editable
const INITIAL_ROUTINES: Routine[] = [
  {
    id: '1',
    name: 'Empuje (Pecho/Hombro/Tríceps)',
    description: 'Enfoque en hipertrofia - Semana 1 a 4',
    creator: 'coach',
    createdAt: '05/06/2026',
    exercises: [
      { id: 'e1', name: 'Press Banca con Barra', sets: 4, reps: '8-10', rest: '90s', videoUrl:"https://www.youtube.com/watch?v=TAH8RxOS0VI"},
      { id: 'e2', name: 'Press Militar con Mancuernas', sets: 3, reps: '10', rest: '75s', videoUrl:"https://www.youtube.com/watch?v=TAH8RxOS0VI"},
      { id: 'e3', name: 'Fondos de Tríceps', sets: 3, reps: 'Al fallo', rest: '60s', videoUrl:"https://www.youtube.com/watch?v=TAH8RxOS0VI"},
    ]
  },
  {
    id: '2',
    name: 'Mi rutina de Pierna en Casa',
    description: 'Para los días que no llego al gimnasio',
    creator: 'user',
    createdAt: '01/06/2026',
    exercises: [
      { id: 'e4', name: 'Sentadillas Goblet', sets: 4, reps: '15', rest: '60s', videoUrl:"https://www.youtube.com/watch?v=TAH8RxOS0VI" },
      { id: 'e5', name: 'Estocadas Caminando', sets: 3, reps: '12 C/U', rest: '60s', videoUrl:"https://www.youtube.com/watch?v=TAH8RxOS0VI"},
    ]
  },
  {
    id: '3',
    name: 'Mi rutina de Pierna en Casa',
    description: 'Para los días que no llego al gimnasio',
    creator: 'user',
    createdAt: '01/06/2026',
    exercises: [
      { id: 'e4', name: 'Sentadillas Goblet', sets: 4, reps: '15', rest: '60s', videoUrl:"https://www.youtube.com/watch?v=TAH8RxOS0VI" },
      { id: 'e5', name: 'Estocadas Caminando', sets: 3, reps: '12 C/U', rest: '60s', videoUrl:"https://www.youtube.com/watch?v=TAH8RxOS0VI"},
    ]
  },
  {
    id: '4',
    name: 'Mi rutina de Pierna en Casa',
    description: 'Para los días que no llego al gimnasio',
    creator: 'user',
    createdAt: '01/06/2026',
    exercises: [
      { id: 'e4', name: 'Sentadillas Goblet', sets: 4, reps: '15', rest: '60s', videoUrl:"https://www.youtube.com/watch?v=TAH8RxOS0VI" },
      { id: 'e5', name: 'Estocadas Caminando', sets: 3, reps: '12 C/U', rest: '60s', videoUrl:"https://www.youtube.com/watch?v=TAH8RxOS0VI"},
    ]
  },
  {
    id: '5',
    name: 'Mi rutina de Pierna en Casa',
    description: 'Para los días que no llego al gimnasio',
    creator: 'coach',
    createdAt: '01/06/2026',
    exercises: [
      { id: 'e4', name: 'Sentadillas Goblet', sets: 4, reps: '15', rest: '60s', videoUrl:"https://www.youtube.com/watch?v=TAH8RxOS0VI" },
      { id: 'e5', name: 'Estocadas Caminando', sets: 3, reps: '12 C/U', rest: '60s', videoUrl:"https://www.youtube.com/watch?v=TAH8RxOS0VI"},
    ]
  },
  {
    id: '6',
    name: 'Mi rutina de Pierna en Casa',
    description: 'Para los días que no llego al gimnasio',
    creator: 'coach',
    createdAt: '01/06/2026',
    exercises: [
      { id: 'e4', name: 'Sentadillas Goblet', sets: 4, reps: '15', rest: '60s', videoUrl:"https://www.youtube.com/watch?v=TAH8RxOS0VI" },
      { id: 'e5', name: 'Estocadas Caminando', sets: 3, reps: '12 C/U', rest: '60s', videoUrl:"https://www.youtube.com/watch?v=TAH8RxOS0VI"},
    ]
  }
];

export const Rutinas: React.FC = () => {
  const [activeTab, setActiveTab] = useState<RoutineTab>('my-routines');
  
  // Transformamos las rutinas en un estado reactivo
  const [routines, setRoutines] = useState<Routine[]>(INITIAL_ROUTINES);

  // Callback para recibir la rutina del formulario y guardarla
  const handleSaveRoutine = (newRoutine: Routine) => {
    setRoutines([newRoutine, ...routines]); // La agregamos al principio del array
    setActiveTab('my-routines');           // Redirección inmediata a "Mis Rutinas"
  };

  // Filtrado de rutinas usando el nuevo estado 'routines' en vez del mock estático
  const filteredRoutines = routines.filter((routine) => {
    if (activeTab === 'my-routines') return routine.creator === 'user';
    if (activeTab === 'assigned') return routine.creator === 'coach';
    return false;
  });

  return (
    <div className="min-h-screen text-zinc-100 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Encabezado */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Zona de Entrenamiento
                </h1>
                <p className="text-zinc-400 text-sm mt-1">
                    Gestioná tus rutinas personalizadas y las asignadas por tu coach.
                </p>
            </div>

            {/* Componente de Navegación por Pestañas */}
            <RoutineTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Contenedor Principal Dinámico */}
            <div className="bg-slate-900 border border-slate-800 rounded-b-xl p-5 min-h-[400px]">
                {activeTab === 'create' ? (
                    // Reemplazamos el viejo Div Placeholder por tu Formulario Completo
                    <CreateRoutineForm onSaveRoutine={handleSaveRoutine} />
                ) : filteredRoutines.length > 0 ? (
                    // Listado de Rutinas
                    <div className="grid grid-cols-1 gap-4">
                        {filteredRoutines.map((routine) => (
                            <RoutineCard key={routine.id} routine={routine} />
                        ))}
                    </div>
                ) : (
                    // Estado Vacío
                    <div className="flex flex-col items-center justify-center h-64 text-center text-zinc-500">
                        <p className="text-sm">No se encontraron rutinas en esta categoría.</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default Rutinas;