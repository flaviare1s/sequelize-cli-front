import { useEffect, useState } from "react";
import api from "../api";
import { useLocation } from "react-router-dom";

export const SolicitarVerificacao = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');

  useEffect(() => {
    if(location.state?.email) {
      setEmail(location.state.email)
    }
  }, [location])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    
    try {
      const response = await api.post("usuarios/solicitar-verificacao", {
        email,
      });

    } catch (err) {
      const errMsg = err.response?.data?.erro || 'Erro ao solicitar verificação'
      console.log(errMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Verificar E-mail
        </h2>

        {erro && <p className="text-red-500 mb-4">{erro}</p>}

        <input
          type="email"
          placeholder="Seu e-mail"
          className="border p-2 w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700">
          Solicitar Verificação
        </button>
      </form>
    </div>
  );
};
