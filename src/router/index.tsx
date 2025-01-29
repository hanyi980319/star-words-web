import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Learning from '@/pages/learning';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/learning',
    element: <Learning />,
  },
]);

export default router; 