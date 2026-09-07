import { render, screen } from '@testing-library/react';
import App from './App';
import { LanguageProvider } from './i18n/LanguageContext';

const renderApp = () =>
  render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );

test('renderiza el nombre del portafolio en el encabezado', () => {
  renderApp();
  expect(screen.getByRole('heading', { name: /poncho_ajmv/i, level: 1 })).toBeInTheDocument();
});

test('muestra la navegación principal', () => {
  renderApp();
  expect(screen.getByRole('link', { name: /_Work/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /_Projects/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /_Contact/i })).toBeInTheDocument();
});

test('incluye el botón de configuración (idioma y tema)', () => {
  renderApp();
  expect(screen.getByRole('button', { name: /settings|ajustes/i })).toBeInTheDocument();
});
