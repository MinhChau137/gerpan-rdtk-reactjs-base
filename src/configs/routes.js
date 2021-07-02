import { Navigate } from 'react-router-dom';
import MainLayout from 'src/layouts/Main/MainLayout';
import NotFoundPage from 'src/pages/Error/NotFound';
import ProductPage from 'src/pages/Product/Product';
import LoginPage from 'src/pages/Authen/Login';
import RegisterPage from 'src/pages/Authen/Register';
import HomePage from 'src/pages/Home/Home';

const routes = [
  {
    path: '/app',
    element: <MainLayout />,
    children: [
      { path: 'home', element: <HomePage /> },
      { path: 'products', element: <ProductPage /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: '/', element: <Navigate to="app/home" /> },
      { path: '404', element: <NotFoundPage /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
