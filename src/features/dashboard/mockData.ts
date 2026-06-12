// src/features/dashboard/mockData.ts
import { type DashboardData } from "./types";

export const mockDashboardData: DashboardData = {
  usuario: {
    nombre: 'Carlos',
  },
  membresia: {
    estado: 'activa',
    tipo: 'Pase Libre Mensual',
    diasRestantes: 12,
    proximoVencimiento: '16/06/2026',
  },
  rutinaHoy: {
    dia: 'Jueves',
    enfoque: 'Espalda y Bíceps',
    totalEjercicios: 6,
  }
};