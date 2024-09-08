import React from "react";
import useAuthStore from "../../store/auth";

const ErrorComponent = () => {
  const { error, clearErrors } = useAuthStore();

  // Hata varsa göster, yoksa hiçbir şey döndürme
  if (!error) return null;

  return (
    <div className="error-container">
      <p className="error-message">{error}</p>
    </div>
  );
};

export default ErrorComponent;
