// src/features/dashboard/types.ts

export interface Usuario {
  nombre: string;
  avatar?: string;
}

export interface Membresia {
  estado: 'activa' | 'vencida' | 'pendiente';
  tipo: string;
  diasRestantes: number;
  proximoVencimiento: string;
}

export interface RutinaHoy {
  dia: string;
  enfoque: string; // Ej: "Pecho y Tríceps"
  totalEjercicios: number;
}

export interface DashboardData {
  usuario: Usuario;
  membresia: Membresia;
  rutinaHoy: RutinaHoy;
}