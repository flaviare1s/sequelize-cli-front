import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./src/components/Login";
import Dashboard from "./src/pages/Dashboard";
import ChatGemini from "./src/pages/ChatGemini";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/chat" element={<ChatGemini />} />
            </Routes>
        </BrowserRouter>
    );
}