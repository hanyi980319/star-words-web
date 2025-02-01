import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Learn from '@/pages/learn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/learn',
    element: <Learn />,
  },
]);

export default router; 