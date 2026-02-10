import type { Role } from "./auth.types";
import type { User } from "./auth.types";

// Define available permissions
export type Permission = 'create:product' | 'edit:product' | 'view:product' | 'delete:product'

const ALL_PERMISIONS: Permission[] = ['create:product', 'delete:product', 'edit:product', 'view:product'];

// Map roles to their allowed permissions
export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
    Admin: ALL_PERMISIONS,
    SuperAdmin: ALL_PERMISIONS,
    User: ['view:product'],
    Staff: ['view:product']
}

export function hasPermission(user: User, permission: Permission): boolean {
    const permissions = ROLE_PERMISSIONS[user.role] || [];

    return permissions.includes(permission)
}

