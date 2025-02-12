import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import { Header } from './components/Header';
import { UserProfile } from './components/UserProfile';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div style={{ minHeight: '100vh' }}>
          <Header />
          <main style={{ padding: '2rem' }}>
            <UserProfile />
          </main>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
