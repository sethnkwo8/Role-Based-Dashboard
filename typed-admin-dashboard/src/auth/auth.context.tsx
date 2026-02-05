import type { AuthContextType, User, Role } from "./auth.types";
import { createContext, useState } from "react";

interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null)

    function login(username: string, role: Role) {
        setUser({ username, role })
    }

    function logout(): void {
        setUser(null)
    }

    const value: AuthContextType = {
        user,
        login,
        logout
    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}