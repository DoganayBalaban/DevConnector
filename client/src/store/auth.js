import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  error: null,
  loading: false,
  isAuthenticated: () => !!localStorage.getItem("token"),

  // Login işlevi
  login: async (email, password) => {
    try {
      set({ loading: true });
      const response = await axios.post("/api/auth", {
        email,
        password,
      });

      const { user, token } = response.data;

      // Başarılı giriş
      set({ user, token, error: null, loading: false });
      localStorage.setItem("token", token); // Token'ı localStorage'a kaydet
      axios.defaults.headers.common["Authorization"] = `${token}`;
    } catch (error) {
      set({
        error: error.response ? error.response.data.message : "Login failed",
        loading: false,
      });
    }
  },

  // Register işlevi
  register: async (name, email, password) => {
    try {
      set({ loading: true });
      const response = await axios.post("/api/users", {
        name,
        email,
        password,
      });

      const { user, token } = response.data;

      // Başarılı kayıt
      set({ user, token, error: null, loading: false });
      localStorage.setItem("token", token); // Token'ı localStorage'a kaydet
      axios.defaults.headers.common["Authorization"] = `${token}`;
    } catch (error) {
      set({
        error: error.response ? error.response.data.message : "Register failed",
        loading: false,
      });
    }
  },

  // Logout işlevi
  logout: () => {
    set({ user: null, token: null, error: null });
    localStorage.removeItem("token"); // Token'ı localStorage'dan kaldır
    delete axios.defaults.headers.common["Authorization"];
  },
  loadToken: () => {
    const token = localStorage.getItem("token");
    if (token) {
      set({ token });
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  },
}));

export default useAuthStore;
