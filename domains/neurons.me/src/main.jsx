import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import { CustomThemeProvider } from 'this.gui';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </StrictMode>
);
