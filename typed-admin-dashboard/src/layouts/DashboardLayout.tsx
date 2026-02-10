import { Outlet } from "react-router-dom"
import { Navbar } from '../components/Navbar'
import { Sidebar } from "../components/Sidebar"

export default function DashboardLayout() {
    return (
        <div>
            <header>
                <Navbar />
                <Sidebar />
            </header>
            <main className="md:ml-64 py-24 px-12">
                <h1 className="font-bold text-3xl py-4">Products</h1>
                <Outlet />
            </main>
        </div>
    )
}
