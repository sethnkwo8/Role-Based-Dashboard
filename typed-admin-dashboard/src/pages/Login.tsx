import { useState } from "react"
import { useAuth } from "../auth/useAuth"
import type { Role } from "../auth/auth.types";
import { Navigate } from "react-router-dom";

export function Login() {

    const { login, authState } = useAuth()

    const [username, setUsername] = useState<string>('');
    const [role, setRole] = useState<Role | ''>('')


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (role !== '') {
            login(username, role)
        }
    }

    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value
        setRole(value as Role)
    }

    if (authState.status === 'authenticated') {
        return <Navigate to='/dashboard' replace />
    }

    return (
        <div className="min-h-screen flex flex-row justify-center items-center">
            <form className="rounded-lg shadow-lg p-4 flex flex-col items-center space-y-4 w-1/2" onSubmit={handleSubmit}>
                <h1 className="font-bold text-4xl">Login</h1>
                <label className="font-bold text-2xl" htmlFor="username">Username</label>
                <input className="w-full outline-0 rounded-lg border border-black p-2" id="username" onChange={handleChange} required type="text" value={username} />
                <select id="roleSelect" onChange={handleSelectChange} required value={role}>
                    <option value="">Select a role</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                    <option value="Staff">Staff</option>
                </select>
                <button className="rounded-lg py-4 px-8 bg-blue-400 hover:bg-blue-600 text-white">Login</button>
            </form>
        </div>
    )
}