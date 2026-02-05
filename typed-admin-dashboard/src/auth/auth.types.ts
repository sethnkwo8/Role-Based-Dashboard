export type Role = 'Admin' | 'SuperAdmin' | 'User' | 'Staff'

export interface User {
    username: string
    role: Role
}

export type AuthState =
    | { status: 'loading' }
    | { status: 'authenticated', user: User }
    | { status: 'unauthenticated' }

export interface AuthContextType {
    authState: AuthState
    login(username: string, role: Role): void
    logout(): void
}