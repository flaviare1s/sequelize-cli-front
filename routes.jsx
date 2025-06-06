import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./src/components/Login";
import Dashboard from "./src/pages/Dashboard";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}