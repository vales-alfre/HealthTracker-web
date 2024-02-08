import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../Routers/UserProvider'; // Asegúrate de que la ruta de importación es correcta

export function ProtectedRoute({ children, roles }) {
  const { user } = useUserContext();

  if (!roles.includes(user.role)) {
    // Si el usuario no tiene uno de los roles requeridos, redirigir
    return <Navigate to="/" />;
  }

  // Si el usuario tiene el rol correcto, permitir acceso
  return children;
}
