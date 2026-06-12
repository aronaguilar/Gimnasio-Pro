import React, { useState } from 'react';
import { EXERCISE_DATABASE } from '../exerciseData';
import { type Exercise, type Routine } from '../types';
import InputRoutine from '../components-atomic/InputRoutine';
import LabelRoutine from '../components-atomic/LabelRoutine';
import InputRoutineSeries from '../components-atomic/InputRoutineSeries';
import SelectRoutine from '../components-atomic/SelectRoutine';

interface CreateRoutineFormProps {
  onSaveRoutine: (newRoutine: Routine) => void;
}

export const CreateRoutineForm: React.FC<CreateRoutineFormProps> = ({ onSaveRoutine }) => {
  // Estado para controlar si el proceso de creación está activo
  const [isCreating, setIsCreating] = useState(false);
  
  // Datos principales de la rutina en progreso
  const [routineName, setRoutineName] = useState('');
  const [routineDescription, setRoutineDescription] = useState('');
  const [addedExercises, setAddedExercises] = useState<Exercise[]>([]);

  // Estados de los Selectores de Filtrado en Cascada
  const [selectedZone, setSelectedZone] = useState<string>('');
  const [selectedMuscle, setSelectedMuscle] = useState<string>('');
  const [selectedExerciseName, setSelectedExerciseName] = useState<string>('');

  // Parámetros de volumen del ejercicio actual
  const [sets, setSets] = useState<number>(4);
  const [repsOrSecs, setRepsOrSecs] = useState<string>('12');
  const [rest, setRest] = useState<string>('60s');

  // Handlers de cambio en cascada
  const handleZoneChange = (zone: string) => {
    setSelectedZone(zone);
    setSelectedMuscle('');
    setSelectedExerciseName('');
  };

  const handleMuscleChange = (muscle: string) => {
    setSelectedMuscle(muscle);
    setSelectedExerciseName('');
  };

  // Agregar el ejercicio configurado a la lista temporal
  const handleAddExercise = () => {
    if (!selectedExerciseName) return;

    const newExercise: Exercise = {
      id: crypto.randomUUID(),
      name: selectedExerciseName,
      sets: sets,
      reps: repsOrSecs,
      rest: rest,
    };

    setAddedExercises([...addedExercises, newExercise]);

    // Resetear selectores para el próximo ejercicio
    setSelectedZone('');
    setSelectedMuscle('');
    setSelectedExerciseName('');
  };

  // Quitar ejercicio de la lista temporal
  const handleRemoveExercise = (id: string) => {
    setAddedExercises(addedExercises.filter(e => e.id !== id));
  };

  // Confirmar y guardar la rutina completa
  const handleSaveFullRoutine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!routineName || addedExercises.length === 0) return;

    const finalRoutine: Routine = {
      id: crypto.randomUUID(),
      name: routineName,
      description: routineDescription || undefined,
      creator: 'user', // Creada por el usuario de la app
      createdAt: new Date().toLocaleDateString('es-AR'),
      exercises: addedExercises,
    };

    onSaveRoutine(finalRoutine);
    
    // Resetear todo el formulario
    setRoutineName('');
    setRoutineDescription('');
    setAddedExercises([]);
    setIsCreating(false);
  };

  // --- RENDERS ---

  // 1. Estado Inicial: Botón de Inicio Limpio
  if (!isCreating) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="w-16 h-16 bg-emerald-500/10 text-amber-500 rounded-full flex items-center justify-center mb-4 border border-emerald-500/20">
          <span className="text-2xl">💪</span>
        </div>
        <h3 className="text-xl font-bold text-zinc-100">Armá tu entrenamiento</h3>
        <p className="text-sm text-zinc-400 max-w-sm mt-2 mb-6">
          Elegí los músculos, ejercicios y configurá las series para armar tu rutina personalizada.
        </p>
        <button
          onClick={() => setIsCreating(true)}
          className="px-6 py-3 bg-emerald-400 text-black font-semibold  cursor-pointer rounded-xl hover:bg-emerald-700 active:scale-95 transition-all shadow-lg shadow-amber-500/10"
        >
          🚀 Empezar Nueva Rutina
        </button>
      </div>
    );
  }

  // 2. Estado Activo: Formulario de Configuración Paso a Paso
  return (
    <form onSubmit={handleSaveFullRoutine} className="space-y-6 max-w-2xl mx-auto p-2">
      {/* Información Básica */}
      <div className="space-y-4">
        <div>
            <LabelRoutine>Nombre de la Rutina</LabelRoutine>
            <InputRoutine
                type="text"
                required
                placeholder="Ej: Torso Potencia, Pierna Enfoque Glúteo..."
                value={routineName}
                onChange={(e) => setRoutineName(e.target.value)}
            />
        </div>
        <div>
            <LabelRoutine>DESCRIPCION (OPCIONAL)</LabelRoutine>
            <InputRoutine
                type="text"
                placeholder="Ej: Enfoque en cargas progresivas"
                value={routineDescription}
                onChange={(e) => setRoutineDescription(e.target.value)}
            />
        </div>
      </div>

      <hr className="border-zinc-800" />

      {/* Selector en Cascada Interactivos */}
      <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-5 space-y-4">
            <h4 className="text-sm font-bold text-emerald-500">Añadir Ejercicios</h4>
        
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Selector de Zona */}
                <div>
                    <label className="block text-xs text-zinc-400 mb-1.5">1. Zona</label>
                    <SelectRoutine
                        value={selectedZone}
                        onChange={(e) => handleZoneChange(e.target.value)}
                    >
                        {Object.keys(EXERCISE_DATABASE).map(zone => (
                        <option key={zone} value={zone}>{zone}</option>
                        ))}
                    </SelectRoutine>
                </div>
                {/* Selector de Músculo (Depende de Zona) */}
                <div>
                    <label className="block text-xs text-zinc-400 mb-1.5">2. Músculo</label>
                    <SelectRoutine
                        disabled={!selectedZone}
                        value={selectedMuscle}
                        onChange={(e) => handleMuscleChange(e.target.value)}
                    >
                        {selectedZone && Object.keys(EXERCISE_DATABASE[selectedZone as keyof typeof EXERCISE_DATABASE]).map(muscle => (
                            <option key={muscle} value={muscle}>{muscle}</option>
                        ))}
                    </SelectRoutine>   
                </div>
                {/* Selector de Ejercicio (Depende de Músculo) */}
                <div>
                    <label className="block text-xs text-zinc-400 mb-1.5">3. Ejercicio</label>
                    <SelectRoutine
                        disabled={!selectedMuscle}
                        value={selectedExerciseName}
                        onChange={(e) => setSelectedExerciseName(e.target.value)}
                    >
                        {selectedZone && selectedMuscle && 
                            (EXERCISE_DATABASE[selectedZone as keyof typeof EXERCISE_DATABASE] as any)[selectedMuscle].map((exe: string) => (
                            <option key={exe} value={exe}>{exe}</option>
                        ))}
                    </SelectRoutine>
                </div>
            </div>

        {/* Configuración de Series, Reps/Segundos y Descanso */}
        <div className="grid grid-cols-3 gap-3 pt-2">
            <div>
                <label className="block text-xs text-zinc-400 mb-1.5">Series</label>
                <InputRoutineSeries
                    type="number"
                    min="1"
                    value={sets}
                    onChange={(e) => setSets(parseInt(e.target.value) || 1)}
                />
            </div>
            <div>
                <label className="block text-xs text-zinc-400 mb-1.5">Reps / Segundos</label>
                <InputRoutineSeries
                    type="text"
                    placeholder="Ej: 12 o 45s"
                    value={repsOrSecs}
                    onChange={(e) => setRepsOrSecs(e.target.value)}
                />
            </div>
            <div>
                <label className="block text-xs text-zinc-400 mb-1.5">Descanso</label>
                <InputRoutineSeries
                    type="text"
                    placeholder="Ej: 60s"
                    value={rest}
                    onChange={(e) => setRest(e.target.value)}
                />
            </div>
        </div>

        <button
          type="button"
          disabled={!selectedExerciseName}
          onClick={handleAddExercise}
          className="w-full py-2.5 bg-zinc-800 text-zinc-200 text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
           Agregar Ejercicio a la Lista
        </button>
      </div>

      {/* Previsualización de Ejercicios Añadidos */}
      {addedExercises.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-zinc-400 tracking-wider uppercase">Esqueleto de la Rutina ({addedExercises.length})</h4>
          <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl divide-y divide-zinc-800 overflow-hidden">
            {addedExercises.map((exercise, index) => (
              <div key={exercise.id} className="p-3.5 flex justify-between items-center bg-zinc-950/20">
                <div>
                  <span className="text-zinc-500 text-xs font-mono mr-2">#{index + 1}</span>
                  <span className="text-sm font-medium text-zinc-200">{exercise.name}</span>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    {exercise.sets} series × {exercise.reps} | <span className="text-zinc-500">Descanso: {exercise.rest}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveExercise(exercise.id)}
                  className="p-1.5 text-zinc-500 hover:text-red-400 transition-colors"
                  title="Eliminar ejercicio"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Botonera de Envío Final */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={() => {
            setIsCreating(false);
            setAddedExercises([]);
          }}
          className="flex-1 py-3  cursor-pointer bg-[rgb(43,12,12)]  text-white-400 rounded-xl text-sm font-medium hover:bg-red-900 hover:text-zinc-200 transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={addedExercises.length === 0}
          className="flex-1 py-3 bg-emerald-500 text-black rounded-xl text-sm font-bold  cursor-pointer hover:bg-emerald-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          💾 Guardar Rutina Completa
        </button>
      </div>
    </form>
  );
};