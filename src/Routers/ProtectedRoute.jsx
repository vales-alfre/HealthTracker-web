import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../Routers/UserProvider';

export function ProtectedRoute({ children, roles }) {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.userId || !roles.includes(user.role)) {
      navigate("/", { replace: true });
    }
  }, [user, roles, navigate]); // Asegúrate de incluir dependencias adecuadas

  return user.userId && roles.includes(user.role) ? children : null;
}
