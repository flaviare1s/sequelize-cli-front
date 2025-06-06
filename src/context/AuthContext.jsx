import { createContext, useContext, useEffect, useState } from 'react';
import api from '../api';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setUser(jwtDecode(token));
  }, []);

  const login = async (email, senha) => {
    const res = await api.post('/auth/login', { email, senha });
    if (res.data.token) {
      localStorage.setItem('token', res.data.token);
      setUser(jwtDecode(res.data.token));
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
