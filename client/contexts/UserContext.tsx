import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextType {
  name: string;
  username: string;
  setName: (name: string) => void;
  setUsername: (username: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  return (
    <UserContext.Provider value={{ name, username, setName, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext deve ser usado dentro de um UserProvider');
  }
  return context;
};
