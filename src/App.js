import Main from './routes/main';
import { BrowserRouter } from "react-router-dom";
import ConfigContext from './context/ConfigContext';
import ProductContext from './context/ProductContext';
import { Toaster } from 'react-hot-toast';

const { AuthProvider, AuthContext, LangContext, LangProvider, ThemeContext, ThemeProvider } = ConfigContext;
const { ProductProvider } = ProductContext

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LangProvider>
          <ThemeProvider>
            <ProductProvider>
              <Toaster
                position="top-center"
                reverseOrder={false}
              />
              <Main />
            </ProductProvider>
          </ThemeProvider>
        </LangProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
