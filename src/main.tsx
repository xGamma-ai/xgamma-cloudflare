import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App.tsx';
import AlwinT from './pages/teamProfiles/alwint.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  { path: 'alwin', Component: AlwinT },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
