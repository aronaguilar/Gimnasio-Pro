# 🏋️‍♂️ Proyecto Gimnasio - Client Dashboard

Una aplicación web moderna y de alto rendimiento diseñada para mejorar la experiencia de los socios de un gimnasio. Permite a los usuarios visualizar de forma dinámica sus rutinas de entrenamiento (tanto las asignadas por profesionales como las de creación propia), controlar su situación administrativa, gestionar membresías y realizar simulaciones de pago en tiempo real.

El proyecto está construido bajo una **arquitectura basada en características (Feature-driven Architecture)**, garantizando un código modular, mantenible y escalable.

---

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18** (Functional Components & Hooks)
- **Vite** (Entorno de desarrollo ultra rápido y empaquetador)
- **TypeScript** (Tipado estricto para evitar errores en tiempo de compilación)
- **Tailwind CSS** (Estilos modernos, maquetación responsive y soporte nativo para interfaz oscura)
- **Redux Toolkit** (Gestión del estado global de la aplicación)
- **Lucide React** (Paquete de íconos vectoriales modernos)

### Backend (Previsto en Arquitectura)
- **Node.js** + **Express** con **TypeScript**
- **PostgreSQL** o base de datos relacional persistente

---

## 📦 Características Principales (Features)

### 1. Gestión de Rutinas (`src/features/routines`)
- **Pestañas de Navegación**: Filtros interactivos para alternar fluidamente entre *"Mis Rutinas"* (propias del usuario) y *"Asignadas"* (definidas por el entrenador).
- **Tarjetas Desplegables**: Cada rutina encapsula de forma independiente su estado de apertura (`isOpen`), optimizando el rendimiento visual al renderizar las series, repeticiones y tiempos de descanso.
- **Multimedia Sync**: Incorporación de botones de acción circulares integrados dinámicamente (`exercise.videoUrl`) que redirigen a videotutoriales externos para la correcta ejecución del ejercicio.

### 2. Administración y Membresías (`src/features/membership`)
- **Métricas Ejecutivas**: Panel superior interactivo con tarjetas modulares que reflejan el estado actual del pase (Activo/Inactivo), costos y próximas fechas de vencimiento con alertas visuales condicionales.
- **Historial de Facturación**: Tabla detallada y limpia de recibos previos utilizando clases lógicas variables de Tailwind según el éxito de la transacción.
- **Selector Inteligente de Planes**: Componente de presentación reactivo que analiza el estado administrativo del usuario en un flujo unidireccional, bloqueando de forma lógica la recompra del plan activo y habilitando la opción de cambiar o renovar pases.
- **Pasarela de Pago Simulada (Modal)**: Interfaz flotante con desenfoque de fondo (*backdrop-blur*) que integra un botón animado con transiciones matemáticas de Tailwind (`duration-[2000ms]`) y mezcla de capas de color (`mix-blend-difference`) para simular el procesamiento de una transacción bancaria en tiempo real.

---

## 📐 Estructura del Proyecto

El código fuente está estructurado de manera modular e independiente, facilitando que la futura conexión con las APIs del Backend tome pocos minutos sin afectar la capa visual:

```text
src/
└── features/
    ├── membership/              # Módulo de administración y pagos
    │   ├── components/          # Componentes atómicos (MembershipCard, PaymentTable, etc.)
    │   ├── types.ts             # Definición de interfaces de membresías y facturas
    │   ├── mockData.ts          # Datos simulados del estado del cliente
    │   └── Membresia.tsx        # Contenedor/Vista general consolidada
    │
    └── routines/                # Módulo de entrenamientos
        ├── components/          # Componentes atómicos (RoutineTabs, RoutineCard)
        ├── types.ts             # Definición de tipos para rutinas y ejercicios
        └── Rutinas.tsx          # Contenedor de la vista de rutinas