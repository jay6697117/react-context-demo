import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '张三',
    role: '管理员'
  });

  const updateUser = newUserData => {
    setUser(prev => ({ ...prev, ...newUserData }));
  };

  return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>;
};
