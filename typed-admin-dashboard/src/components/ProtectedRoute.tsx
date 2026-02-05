import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import type { Role } from "../auth/auth.types";

interface ProtectedRouteProps {
    allowedRoles: Role[]
    children: React.ReactNode
}
export function ProtectedRoute({ allowedRoles, children }: ProtectedRouteProps) {
    const { authState } = useAuth()

    if (authState.status === 'loading') {
        return <p>LOADING...</p>
    }
    if (authState.status === 'unauthenticated') {
        return <Navigate to='/login' replace />
    }
    if (authState.status === 'authenticated') {
        if (!allowedRoles.includes(authState.user.role)) {
            return <Navigate to='/unauthorized' replace />
        }
    }

    return children
}