import type { AuthContextType, AuthState, Role } from "./auth.types";
import { createContext, useState } from "react";
import { hasPermission, type Permission } from "./permissions";

interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: AuthProviderProps) {
    const [authState, setAuthState] = useState<AuthState>({ status: 'unauthenticated' })

    function login(username: string, role: Role) {
        setAuthState({ status: 'authenticated', user: { username, role } })
    }

    function logout(): void {
        setAuthState({ status: 'unauthenticated' })
    }

    function can(permission: Permission): boolean {
        if (authState.status === 'authenticated') {
            return hasPermission(authState.user, permission)
        }
        return false
    }

    const value: AuthContextType = {
        authState,
        login,
        logout,
        can
    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}