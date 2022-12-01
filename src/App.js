import Main from './routes/main';
import { BrowserRouter } from "react-router-dom";
import ConfigContext from './context/ConfigContext';

const { LangContext, LangProvider, ThemeContext, ThemeProvider } = ConfigContext;

function App() {
  return (
    <BrowserRouter>
      <LangProvider>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </LangProvider>
    </BrowserRouter>
  );
}

export default App;
