import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { UserContext } from '../contexts/UserContext';

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  return (
    <header style={{
      padding: '1rem',
      backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
      color: theme === 'light' ? '#333333' : '#ffffff',
      borderBottom: '5px solid red'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>React Context 示例</h1>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span>欢迎, {user.name}</span>
          <button onClick={toggleTheme}>
            切换主题 (当前: {theme})
          </button>
        </div>
      </div>
    </header>
  );
};
