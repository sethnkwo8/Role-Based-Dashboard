import { useAuth } from "../auth/useAuth"
import { IonIcon } from "@ionic/react"
import { personCircleOutline, notificationsOutline } from "ionicons/icons"

export function Navbar() {
    const { authState } = useAuth()

    const username = authState.status === 'authenticated' ? authState.user.username : ''
    const role = authState.status === 'authenticated' ? authState.user.role : ''

    return (
        <nav
            className="w-full flex items-center justify-between h-16 shadow-sm sticky top-0 bg-white dark:text-black px-6 md:px-12">
            <div className="px-12">
                <p className="text-2xl font-bold">MyBrand</p>
            </div>
            <div className="flex items-center gap-4 ">
                <div className="flex gap-2 items-center">
                    <p className="text-2xl px-2">{role}<IonIcon icon={personCircleOutline} size="large" /></p>
                    <p className="text-3xl">{username}</p>
                </div>
                <div>
                    <IonIcon icon={notificationsOutline} size="large" />
                </div>
            </div>
        </nav>
    )
}
