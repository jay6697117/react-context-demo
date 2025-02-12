import { createContext, useState } from 'react';

// 创建主题Context
export const ThemeContext = createContext();

// 创建主题Provider组件
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // const value = {
  //   theme,
  //   toggleTheme
  // };

  return (
    // <ThemeContext.Provider value={value}>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};
