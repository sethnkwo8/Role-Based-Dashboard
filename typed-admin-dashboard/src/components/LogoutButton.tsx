import { useAuth } from "../auth/useAuth";
import { useNavigate } from "react-router-dom";

export function LogoutButton() {
    const navigate = useNavigate()

    const { logout } = useAuth()

    function handleClick() {
        logout();
        navigate('/login', { replace: true })
    }

    return (
        <button className="hover:bg-gray-600 p-1 text-left" onClick={handleClick}>Logout</button>
    )
}