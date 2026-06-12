import { BrowserRouter as Router } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
// import { Provider } from 'react-redux'; // Lo dejamos comentado hasta que configures el store

import './App.css'
import Login from "./features/auth/Login"
import { DashboardContainer } from "./features/dashboard/DashboardContainer";
import Membresia from "./features/membership/Membresia"
import Register from "./features/auth/Register"
import Rutinas from "./features/routines/Rutinas";

// 1. Importamos el Layout que creaste en la nueva carpeta
import { MainLayout } from "./layout/MaintLayout";

function App() {
  return (
    <div id="app-contenedor-principal" className="w-full min-h-screen">
      <Router>
        <Routes>
          {/* 🔑 RUTAS PÚBLICAS (Sin Sidebar) */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Registrar" element={<Register />} />

          {/* 🏋️‍♂️ RUTAS PRIVADAS / INTERNAS (Con Sidebar) */}
          {/* Envolvemos las rutas de la app dentro del MainLayout */}
          <Route element={<MainLayout />}>
            {/* Cuando el usuario entre a "/", va directo al Dashboard con el Sidebar */}
            <Route path="/" element={<DashboardContainer />} />
            <Route path="/Membresia" element={<Membresia />} />
            <Route path="/Rutinas" element={<Rutinas />} />
            
            {/* Si querés cambiar la URL de la raíz a /dashboard más adelante lo hacemos, 
                por ahora "/" renderiza el Dashboard adentro del Layout perfectamente */}
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App