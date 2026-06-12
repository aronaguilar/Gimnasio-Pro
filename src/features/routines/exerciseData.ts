export interface ExerciseTemplate {
  name: string;
}

export interface MuscleGroup {
  [muscle: string]: string[];
}

export interface TrainingZones {
  'Tren Superior': MuscleGroup;
  'Tren Inferior': MuscleGroup;
}

export const EXERCISE_DATABASE: TrainingZones = {
  'Tren Superior': {
    'Pecho': ['Press de Banca con Barra', 'Press Inclinado con Mancuernas', 'Aperturas en Polea'],
    'Espalda': ['Dominadas', 'Remo con Barra', 'Jalón al Pecho'],
    'Hombros': ['Press Militar', 'Vuelos Laterales', 'Pájaros (Posterior)'],
    'Brazos': ['Curl de Bíceps', 'Extensión de Tríceps en Polea'],
  },
  'Tren Inferior': {
    'Cuádriceps': ['Sentadillas Libres', 'Prensa 45°', 'Sillón de Cuádriceps'],
    'Isquiotibiales': ['Camilla Flexora', 'Peso Muerto Rumano'],
    'Glúteos': ['Hip Thrust', 'Patada de Glúteo en Polea'],
    'Pantorrillas': ['Elevación de Talones de pie'],
  },
};