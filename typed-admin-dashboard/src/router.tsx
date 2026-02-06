import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";
import { ProtectedRoute } from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/unauthorized',
        element: <Unauthorized />
    },
    {
        element: <ProtectedRoute allowedRoles={['Admin', 'Staff', 'SuperAdmin', 'User']} />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardLayout />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />
                    }
                ]
            }
        ]
    },
    {
        element: <ProtectedRoute allowedRoles={['Admin', 'SuperAdmin']} />,
        children: [
            {
                path: '/admin',
                element: <Admin />,
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])