import Main from './routes/main';
import { BrowserRouter } from "react-router-dom";
import ConfigContext from './context/ConfigContext';
import { Toaster } from 'react-hot-toast';
import 'react-slideshow-image/dist/styles.css'

const { AuthProvider, AuthContext, LangContext, LangProvider, ThemeContext, ThemeProvider } = ConfigContext;

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LangProvider>
          <ThemeProvider>
              <Toaster
                position="top-center"
                reverseOrder={false}
              />
              <Main />
          </ThemeProvider>
        </LangProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
