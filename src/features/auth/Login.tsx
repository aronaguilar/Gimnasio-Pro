import React from 'react';
import { AuthCard } from './components/AuthCard';
import { AuthInput } from './components/AuthInput';
import { AuthButton } from './components/AuthButton';
import { SocialAuth } from './components/SocialAuth';

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const forgotPasswordLink = (
    <a href="#" className="text-emerald-400 no-underline text-[12px] hover:underline">
      Olvidaste tu contraseña ?
    </a>
  );

  return (
    <AuthCard title="Login">
      <form onSubmit={handleSubmit}>
        <AuthInput 
          label="Username" 
          type="text" 
          id="username" 
          placeholder="Ingresa tu usuario" 
        />
        <AuthInput 
          label="Password" 
          type="password" 
          id="password" 
          placeholder="••••••••" 
          rightLabelElement={forgotPasswordLink}
        />
        <AuthButton type="submit">Entrar</AuthButton>
      </form>

      <SocialAuth />

      <p className="text-center text-[0.875rem] text-[#9ca3af] mt-6">
        No tienes una cuenta?
        <a href="/Registrar" className="text-emerald-400 no-underline text-[14px] ml-1 hover:underline">Registrate</a>
      </p>
    </AuthCard>
  );
};

export default Login;