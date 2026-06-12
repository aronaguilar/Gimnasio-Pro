export interface PaymentHistory {
  id: string;
  date: string;
  concept: string;
  amount: number;
  status: 'Aprobado' | 'Pendiente' | 'Rechazado';
}

export interface MembershipDetails {
  planName: string;
  status: 'Activa' | 'Vencida' | 'Próxima a vencer';
  startDate: string;
  expirationDate: string;
  price: number;
  allowedDaysPerWeek: number | 'Libre';
  benefits: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  allowedDaysPerWeek: number | 'Libre';
  description: string;
}