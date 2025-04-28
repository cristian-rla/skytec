'use client'
import  dotenv from 'dotenv';
import { createContext, useContext, useState, ReactNode } from 'react';

dotenv.config()

interface User {
  nombre: string;
}

interface UserContextType {
  user: User | null;
  login: (usuario: string, contrasena: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (usuario: string, contrasena: string) => {
    try {
      const response = await fetch(`http://localhost:${process.env.PORT || 3001}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, contrasena }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al iniciar sesión');
      }

      setUser(data.user);
      return { success: true };
    } catch (error: any) {
      console.error(error);
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe usarse dentro de un UserProvider');
  }
  return context;
}
