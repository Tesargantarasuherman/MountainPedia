import Main from './routes/main';
import { BrowserRouter } from "react-router-dom";
import ConfigContext from './context/ConfigContext';

const { AuthProvider, AuthContext, LangContext, LangProvider, ThemeContext, ThemeProvider } = ConfigContext;

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LangProvider>
          <ThemeProvider>
            <Main />
          </ThemeProvider>
        </LangProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
