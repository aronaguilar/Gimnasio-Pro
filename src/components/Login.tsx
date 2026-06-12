import React from 'react'; // Eliminamos el { FormEvent } de acá

const Login: React.FC = () => {
  // Usamos React.FormEvent directamente aquí
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    /* Contenedor principal que centra la tarjeta en pantalla */
    <div className="flex justify-center items-center min-height-screen min-h-screen bg-[#0b0f19]">
      
      {/* .form-container */}
      <div className="w-[320px] rounded-[0.75rem] bg-[#111827] p-8 text-[#f3f4f6] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]">
        
        {/* .title */}
        <p className="text-center text-[1.5rem] leading-8 font-bold m-0">Login</p>
        
        {/* .form */}
        <form className="mt-6" onSubmit={handleSubmit}>
          
          {/* .input-group */}
          <div className="mt-3 text-[0.875rem] leading-[1.25rem]">
            <label htmlFor="username" className="block text-[#9ca3af] mb-1">Username</label>
            <input 
              type="text" 
              name="username" 
              id="username" 
              placeholder="Ingresa tu usuario" 
              className="w-full rounded-[0.375rem] border border-[#374151] outline-0 bg-[#111827] py-3 px-4 text-[#f3f4f6] box-border transition-colors duration-200 ease-in-out focus:border-[#a78bfa]"
            />
          </div>
          
          {/* .input-group */}
          <div className="mt-3 text-[0.875rem] leading-[1.25rem]">
            <label htmlFor="password" className="block text-[#9ca3af] mb-1">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="••••••••" 
              className="w-full rounded-[0.375rem] border border-[#374151] outline-0 bg-[#111827] py-3 px-4 text-[#f3f4f6] box-border transition-colors duration-200 ease-in-out focus:border-[#a78bfa]"
            />
            {/* .forgot */}
            <div className="flex justify-end text-[0.75rem] leading-[1rem] text-[#9ca3af] my-2 mx-0 mb-[14px]">
              <a rel="noopener noreferrer" href="#" className="color-[#a78bfa] no-underline text-[14px] ml-1 hover:underline">Forgot Password ?</a>
            </div>
          </div>
          
          {/* .sign */}
          <button 
            type="submit" 
            className="block w-full bg-[#a78bfa] p-3 text-center text-[#111827] border-none rounded-[0.375rem] font-semibold cursor-pointer transition-colors duration-200 ease-in-out hover:bg-[#8b5cf6]"
          >
            Sign in
          </button>
        </form>
        
        {/* .social-message */}
        <div className="flex items-center pt-4">
          {/* .line */}
          <div className="h-[1px] flex-1 bg-[#374151]" />
          {/* .message */}
          <p className="py-0 px-3 text-[0.875rem] leading-[1.25rem] text-[#9ca3af] m-0">Login with social accounts</p>
          {/* .line */}
          <div className="h-[1px] flex-1 bg-[#374151]" />
        </div>
        
        {/* .social-icons */}
        <div className="flex justify-center mt-3">
          {/* .icon (Google) */}
          <button type="button" aria-label="Log in with Google" className="rounded-[0.375rem] p-3 border border-[#374151] bg-transparent my-0 mx-1 cursor-pointer flex items-center justify-center transition-colors duration-200 ease-in-out hover:bg-[rgba(55,65,81,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 fill-white">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
            </svg>
          </button>
          {/* .icon (Twitter) */}
          <button type="button" aria-label="Log in with Twitter" className="rounded-[0.375rem] p-3 border border-[#374151] bg-transparent my-0 mx-1 cursor-pointer flex items-center justify-center transition-colors duration-200 ease-in-out hover:bg-[rgba(55,65,81,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 fill-white">
              <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z" />
            </svg>
          </button>
          {/* .icon (GitHub) */}
          <button type="button" aria-label="Log in with GitHub" className="rounded-[0.375rem] p-3 border border-[#374151] bg-transparent my-0 mx-1 cursor-pointer flex items-center justify-center transition-colors duration-200 ease-in-out hover:bg-[rgba(55,65,81,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 fill-white">
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
            </svg>
          </button>
        </div>
        
        {/* .signup */}
        <p className="text-center text-[0.875rem] leading-4 text-[#9ca3af] mt-6">
          Don't have an account?
          <a rel="noopener noreferrer" href="#" className="text-[#a78bfa] no-underline text-[14px] ml-1 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;