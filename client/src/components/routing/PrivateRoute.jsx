import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../../store/auth"; // Zustand'daki auth store'u kullanıyoruz

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuthStore();

  if (loading) {
    return <div>Loading...</div>; // Yükleniyor mesajı gösterebilirsin
  }

  // Eğer kullanıcı kimliği doğrulanmışsa, istenen sayfayı göster
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
