export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string; 
  rest: string;  
  videoUrl?: string; // Propiedad opcional para el enlace a YouTube o Vimeo
}

export interface Routine {
  id: string;
  name: string;
  description?: string;
  creator: 'user' | 'coach';
  createdAt: string;
  exercises: Exercise[];
}

export type RoutineTab = 'my-routines' | 'assigned' | 'create';