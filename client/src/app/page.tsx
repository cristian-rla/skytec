'use client'
import { useState, useEffect } from 'react';
import { useUser } from './contexts/userContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { login } = useUser();
  const router = useRouter();  // Llama a useRouter directamente
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (isRedirecting) {
      router.push("/welcome");  // Redirigir después de iniciar sesión
    }
  }, [isRedirecting, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await login(username, password);

    if (result.success) {
      setIsRedirecting(true);  // Cambiar el estado para iniciar la redirección
    } else {
      setError(result.message || 'Error desconocido');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Iniciar sesión en SkyTech</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Entrar</button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
