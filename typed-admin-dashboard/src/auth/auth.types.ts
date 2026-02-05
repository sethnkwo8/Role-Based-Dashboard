export type Role = 'Admin' | 'SuperAdmin' | 'User' | 'Staff'

export interface User {
    username: string
    role: Role
}

export interface AuthContextType {
    user: User | null
    login(username: string, role: Role): void
    logout(): void
}