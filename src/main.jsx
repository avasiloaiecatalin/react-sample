import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import { RootLayout } from './components/layouts/RootLayout.jsx';
import ReactHooksPage from './ReactHooksPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CreatePage } from './CreatePage';
import { ReadPage } from './ReadPage';
import { AxiosAndRQSetup } from './AxiosAndRQSetup';

export const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route
            index
            element={<App />}
          />
          <Route
            path='/axios-rq-setup'
            element={<AxiosAndRQSetup />}
          />
          <Route
            path='/react-hooks'
            element={<ReactHooksPage />}
          />
          <Route
            path='/create'
            element={<CreatePage />}
          />
          <Route
            path='/read'
            element={<ReadPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
