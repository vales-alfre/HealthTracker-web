import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../Routers/UserProvider';

export function ProtectedRoute({ children, roles }) {
  const { user } = useUserContext();

  if (!user.userId || !roles.includes(user.role)) {
    // Redirigir al usuario si no está autenticado o no tiene el rol necesario
    return <Navigate to="/" replace />;
  }

  return children;
}
