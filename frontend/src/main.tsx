import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import routes from './pages/routes';

import 'libs/styles/index.scss';

createRoot(document.getElementById('root')!).render(<RouterProvider router={routes} />,)
