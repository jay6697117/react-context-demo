import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ThemeContext } from '../contexts/ThemeContext';

export const UserProfile = () => {
  const { user, updateUser } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const handleNameChange = () => {
    const newName = prompt('请输入新的用户名：');
    if (newName) {
      updateUser({ name: newName });
    }
  };

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: theme === 'light' ? '#f5f5f5' : '#222222',
      color: theme === 'light' ? '#333333' : '#ffffff',
      borderRadius: '8px',
      margin: '1rem'
    }}>
      <h2>用户信息</h2>
      <div style={{ marginTop: '1rem' }}>
        <p>姓名: {user.name}</p>
        <p>角色: {user.role}</p>
        <button onClick={handleNameChange}>
          修改用户名
        </button>
      </div>
    </div>
  );
};
