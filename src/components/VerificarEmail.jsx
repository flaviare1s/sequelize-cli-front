import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const VerificarEmail = () => {
  const [codigo, setCodigo] = useState("");
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setMensagem("");

    try {
      await api.post("/usuarios/verificar-email", { email, codigo });
      setMensagem("E-mail verificado com sucesso!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setErro("Código inválido ou expirado.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Verificação de E-mail
        </h2>

        {email && (
          <p className="text-sm text-gray-600 mb-4 text-center">
            Verifique o e-mail enviado para <strong>{email}</strong>
          </p>
        )}
        {mensagem && <p className="text-green-600 mb-4">{mensagem}</p>}
        {erro && <p className="text-red-500 mb-4">{erro}</p>}

        <input
          type="text"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Digite o código de verificação"
          className="border p-2 w-full mb-4"
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700">
          Verificar
        </button>
      </form>
    </div>
  );
};
