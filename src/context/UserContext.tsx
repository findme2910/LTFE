// src/context/UserContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
   id: string;
   email: string ;
   displayName?: string | null;
   photoURL?: string | null;
   phoneNumber?: string | null;
   gender?: string | null;
   birthDate?: string | null;
   address?: string | null;
}

interface UserContextType {
   user: User | null;
   setUser: React.Dispatch<React.SetStateAction<User | null>>;
   logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
   const [user, setUser] = useState<User | null>(() => {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
   });

   useEffect(() => {
      if (user) {
         localStorage.setItem('user', JSON.stringify(user));
      } else {
         localStorage.removeItem('user');
      }
   }, [user]);

   const logout = () => {
      setUser(null);
      localStorage.removeItem('user');

   };

   return (
      <UserContext.Provider value={{ user, setUser, logout }}>
         {children}
      </UserContext.Provider>
   );
};

export const useUser = () => {
   const context = useContext(UserContext);
   if (!context) {
      throw new Error('useUser must be used within a UserProvider');
   }
   return context;
};
