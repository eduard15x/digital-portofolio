import { Dashboard } from "../components/dashboard/Dashboard";
import TitlePage from "../components/titlePage/TitlePage";

export const AdminPanel = () => {
    return (
        <div className="admin">
            <TitlePage title="Admin Panel" subtitle="" />
            <Dashboard />
        </div>
    );
}

