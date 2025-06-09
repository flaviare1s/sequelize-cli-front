import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./src/components/Login";
import Dashboard from "./src/pages/Dashboard";
import ChatGemini from "./src/pages/ChatGemini";
import { SolicitarVerificacao } from "./src/components/SolicitarVerificacao";
import { VerificarEmail } from "./src/components/VerificarEmail";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/solicitar-verificacao" element={<SolicitarVerificacao />} />
                <Route path="/verificar-email" element={<VerificarEmail />} />
                <Route path="/chat" element={<ChatGemini />} />
            </Routes>
        </BrowserRouter>
    );
}