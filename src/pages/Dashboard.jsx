import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Painel Escolar</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/" className="hover:text-yellow-300">Início</Link>
          <Link to="/chat" className="hover:text-yellow-300">Falar com Gtzinho</Link>
          <button onClick={handleLogout} className="mt-6 text-red-300 hover:text-white">Sair</button>
        </nav>
      </aside>

      {/* Conteúdo */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-4">Bem-vindo, {user?.email || 'Usuário'}</h1>
        <p className="text-gray-600">Aqui você pode gerenciar alunos, turmas e acessar o chat com Gtzinho.</p>
      </main>
    </div>
  );
}
