import React, { useState, useEffect } from 'react';
import { X, CreditCard, ShieldCheck } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: number;
  onPaymentSuccess: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  planName,
  price,
  onPaymentSuccess,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Resetear estados internos cuando el modal se cierra o abre
  useEffect(() => {
    if (isOpen) {
      setIsProcessing(false);
      setAnimationComplete(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePayClick = () => {
    if (isProcessing) return;
    
    setIsProcessing(true);

    // La animación de Tailwind dura 2000ms (duration-[2000ms])
    setTimeout(() => {
      setAnimationComplete(true);
      
      // Esperamos un momento corto para que el usuario note el estado "Exitoso" antes de cerrar
      setTimeout(() => {
        onPaymentSuccess();
        onClose();
      }, 800);

    }, 2100); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Fondo oscurecido (black/70) y borroso (backdrop-blur-sm) */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose} // Cierra al hacer click afuera
      />

      {/* Bloque Flotante Central */}
      <div className="relative bg-slate-900 border border-slate-800 w-full max-w-md rounded-2xl p-6 shadow-2xl z-10 text-slate-100 transform transition-all scale-100">
        
        {/* Botón Cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl">
            <CreditCard size={22} />
          </div>
          <div>
            <h3 className="text-lg font-bold">Pasarela de Pago</h3>
            <p className="text-xs text-slate-400">Finaliza tu suscripción de forma segura</p>
          </div>
        </div>

        {/* Resumen de Compra */}
        <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800/60 mb-6 space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">Concepto:</span>
            <span className="font-semibold text-slate-200">{planName}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">Frecuencia:</span>
            <span className="text-slate-300">Mensual</span>
          </div>
          <hr className="border-slate-800" />
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-400">Total a pagar:</span>
            <span className="text-xl font-black text-emerald-400">${price.toLocaleString()}</span>
          </div>
        </div>

        {/* Formulario Simulado */}
        <div className="space-y-3 mb-6">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Datos de prueba</label>
          <input 
            type="text" 
            disabled
            value="••••  ••••  ••••  4242" 
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-400 cursor-not-allowed"
          />
        </div>

        {/* BOTÓN CON ANIMACIÓN DE LLENADO VERDE */}
        <button
          onClick={handlePayClick}
          disabled={animationComplete}
          className="relative w-full py-3.5 font-bold text-sm rounded-xl bg-indigo-600 text-white overflow-hidden transition-all active:scale-[0.98] disabled:cursor-default"
        >
          {/* Capa verde que se despliega de izquierda a derecha */}
          <div 
            className={`absolute top-0 left-0 h-full bg-emerald-500 transition-all ease-out duration-[2000ms] ${
              isProcessing ? 'w-full' : 'w-0'
            }`}
          />

          {/* Texto superior para que no quede tapado por la capa absoluta */}
          <span className="relative z-10 flex items-center justify-center gap-2">
            {animationComplete ? (
              <>
                <ShieldCheck size={18} className="text-slate-950 animate-bounce" />
                <span className="text-slate-950">¡Pago Exitoso!</span>
              </>
            ) : isProcessing ? (
              <span className="text-white mix-blend-difference">Procesando pago...</span>
            ) : (
              `Pagar $${price.toLocaleString()}`
            )}
          </span>
        </button>

        <p className="text-[11px] text-center text-slate-500 mt-4">
          Al presionar pagar aceptas los términos de renovación automática.
        </p>
      </div>
    </div>
  );
};