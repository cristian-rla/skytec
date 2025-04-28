'use client'
import { useUser } from '../contexts/userContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function WelcomePage() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.push('/'); 
    }
  }, [user, router]);

  if (!user) {
    return null; 
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl">¡Hola, {user.nombre}!</h1>
      <p>Bienvenido al portal de SkyTech.</p>
    </div>
  );
}
