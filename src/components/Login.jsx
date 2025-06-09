import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

    export default function Login() {
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');
        const [erro, setErro] = useState('');
        const navigate = useNavigate();
        const { login } = useAuth();
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                await login(email, senha);
                navigate('/');
            } catch (err) {
                const mensagem =
                    err.response?.data?.erro || // se a API retorna { erro: "..." }
                    err.response?.data?.message || // ou { message: "..." }
                    'Erro ao realizar login.';
    
                if (mensagem.toLowerCase().includes('email não verificado')) {
                    navigate('/solicitar-verificacao', { state: { email } });
                } else {
                    setErro(mensagem);
                }
            }
        };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                {erro && <p className="text-red-500">{erro}</p>}
                <input
                    type="email"
                    placeholder="E-mail"
                    className="border p-2 w-full mb-4"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    className="border p-2 w-full mb-4"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                <button className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700">
                    Entrar
                </button>
                <p className="mt-4 text-sm text-center">
                    Ainda não tem conta? <a href="/cadastro" className="text-blue-600">Cadastre-se</a>
                </p>
            </form>
        </div>
    );
}