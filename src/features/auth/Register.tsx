import React from 'react';
import { AuthCard } from './components/AuthCard';
import { AuthInput } from './components/AuthInput';
import { AuthButton } from './components/AuthButton';
import { SocialAuth } from './components/SocialAuth';

const Register: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <AuthCard title="Register">
      <form onSubmit={handleSubmit}>
        <AuthInput 
          label="Username" 
          type="text" 
          id="reg-username" 
          placeholder="Elige tu nombre de usuario" 
        />
        <AuthInput 
          label="Email" 
          type="email" 
          id="reg-email" 
          placeholder="correo@ejemplo.com" 
        />
        <AuthInput 
          label="Password" 
          type="password" 
          id="reg-password" 
          placeholder="Crea una contraseña" 
        />
        <AuthButton type="submit">Registrarse</AuthButton>
      </form>

      <SocialAuth />

      <p className="text-center text-[0.875rem] text-[#9ca3af] mt-6">
        Ya tienes una cuenta?
        <a href="/Login" className="text-emerald-400 no-underline text-[15px] ml-1 hover:underline">Ingresar</a>
      </p>
    </AuthCard>
  );
};

export default Register;