import React from 'react';
import { useState } from 'react';
import { CreditCard, Calendar, ShieldCheck, Info } from 'lucide-react';
import { MembershipCard } from './components/MembershipCard';
import { PaymentTable } from './components/PaymentTable';
import { PlanSelector } from './components/PlanSelector';
import { PaymentModal } from './components/PaymentModal';
import { type MembershipDetails, type PaymentHistory, type MembershipPlan } from './types';

// Mock de datos unificado para simular el Backend/Redux
 
const mockPayments: PaymentHistory[] = [
  { id: '1', date: '01/06/2026', concept: 'Cuota Mensual - Pase Libre', amount: 15000, status: 'Aprobado' },
  { id: '2', date: '01/05/2026', concept: 'Cuota Mensual - Pase Libre', amount: 15000, status: 'Aprobado' },
  { id: '3', date: '01/04/2026', concept: 'Matrícula de Inscripción', amount: 5000, status: 'Aprobado' },
];

const mockPlans: MembershipPlan[] = [
  { id: '1', name: 'Plan Inicial', price: 9000, allowedDaysPerWeek: 3, description: 'Ideal para quienes complementan con otras actividades.' },
  { id: '2', name: 'Pase Libre Musculación', price: 15000, allowedDaysPerWeek: 'Libre', description: 'Acceso total a las máquinas en cualquier horario.' },
  { id: '3', name: 'Plan Premium + Clases', price: 20000, allowedDaysPerWeek: 'Libre', description: 'Musculación completa junto a todas las clases del gimnasio.' },
];

const Membresia: React.FC = () => {

    const [namePlan, setNamePlan] = useState("Plan Inicial")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number } | null>(null);
    
    const handlePay = (planId: string) => {
        setNamePlan(planId)
        const plan = mockPlans.find(p => p.name === planId);
        if (plan){
            setSelectedPlan({ name: plan.name, price: plan.price });
            setIsModalOpen(true);  
        }   
    };

    const handlePaymentSuccess = () => {
    alert("¡Felicidades! Tu pago impactó correctamente en el sistema.");
    // Aquí podrías refrescar el historial de pagos en el futuro
    };

    // Determinar la variante de color según el estado
    const getStatusVariant = (status: string) => {
        if (status === 'Activa') return 'success';
        if (status === 'Próxima a vencer') return 'warning';
        return 'danger';
    };

    const mockDetails: MembershipDetails = {
        planName: `${namePlan}`,
        status: 'Activa',
        startDate: '01/06/2026',
        expirationDate: '01/07/2026',
        price: 15000,
        allowedDaysPerWeek: 'Libre',
        benefits: [
            'Acceso ilimitado a sala de musculación',
            'Uso de casilleros libre',
            '1 Evaluación física mensual con tu entrenador',
            'Acceso prioritario a clases grupales',
        ],
    };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10 text-slate-100 bg-slate-950 min-h-screen">

        {/* Cabecera */}
        <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-100">Mi Membresía</h1>
            <p className="text-slate-400 text-sm mt-1">Administra tus pagos, planes vigentes y vencimientos.</p>
        </div>

        {/*Estado y Vencimiento*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MembershipCard
                title="Estado Actual"
                value={mockDetails.status}
                subtext={`Desde el ${mockDetails.startDate}`}
                icon={<ShieldCheck className="text-emerald-400" size={20} />}
                variant={getStatusVariant(mockDetails.status)}
            />
            <MembershipCard
                title="Próximo Vencimiento"
                value={mockDetails.expirationDate}
                subtext="Recuerda pagar antes de esta fecha"
                icon={<Calendar className="text-amber-400" size={20} />}
                variant={mockDetails.status === 'Activa' ? 'default' : 'warning'}
            />
            <MembershipCard
                title="Costo del Plan"
                value={`$${mockDetails.price.toLocaleString()}`}
                subtext={mockDetails.planName}
                icon={<CreditCard className="text-indigo-400" size={20} />}
            />
        </div>

        {/* Sección Detalle de Membresía */}
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30">

            <div className="flex items-center gap-3 mb-4">
                
                <div className="p-2 bg-slate-800 rounded-xl text-indigo-400">
                    <Info size={20} className='text-emerald-400'/>
                </div>
                <h2 className="text-xl font-bold text-slate-200 m-0">Detalles de tu Plan Activo</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                <div>
                    <p className="text-sm text-slate-400">Nombre del Plan</p>
                    <p className="text-lg font-semibold text-slate-200">{mockDetails.planName}</p>
                    <p className="text-sm text-slate-400 mt-4">Frecuencia de entrenamiento admisible</p>
                    <p className="text-lg font-semibold text-slate-200">
                        {mockDetails.allowedDaysPerWeek === 'Libre' ? 'Todos los días (Pase Libre)' : `${mockDetails.allowedDaysPerWeek} veces por semana`}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-slate-400 mb-2">Beneficios incluidos:</p>
                    <ul className="space-y-1.5 text-sm text-slate-300">
                        {mockDetails.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        {/*Cambiar Tipo de Membresía y Sector para Pagar */}
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-200 tracking-tight">Cambiar o Renovar Plan</h2>
            <PlanSelector
                plans={mockPlans}
                currentPlanName={mockDetails.planName}
                onPay={handlePay}
            />
        </div>

        {/* Historial de Pagos */}
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-200 tracking-tight">Historial de Pagos</h2>
            <PaymentTable payments={mockPayments} />
        </div>

        {/* COMPONENTE INTERCEPTOR (MODAL FLOANTE) */}
        {selectedPlan && (
            <PaymentModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            planName={selectedPlan.name}
            price={selectedPlan.price}
            onPaymentSuccess={handlePaymentSuccess}
            />
        )}
        
    </div>
  );
};

export default Membresia;