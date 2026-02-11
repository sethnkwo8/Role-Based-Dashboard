# Role-Based Dashboard (React + TypeScript)

A role-based dashboard application built with **React and TypeScript**, demonstrating
modern frontend architecture, authentication, protected routing, permission-based UI,
and strongly typed state management.

This project was built as a TypeScript mastery project before transitioning to Next.js.

---

## 🔧 Tech Stack
- React
- TypeScript
- React Router DOM (v6+)
- Vite
- Context API
- Tailwind CSS

---

## ✨ Features

- 🔐 Authentication using React Context
- 🛡 Protected routes with role-based access control
- 🧠 Permission-based UI rendering (no hardcoded role checks)
- 🔁 Typed async data fetching with discriminated unions
- 🧩 Clean separation of concerns (auth, permissions, API, UI)
- ⚙️ Fully typed React hooks and components

---


## 🔑 Roles & Permissions

Roles:
- Admin
- SuperAdmin
- Staff
- User

Permissions:
- `view:product`
- `create:product`
- `edit:product`
- `delete:product`

UI components render strictly based on permissions, not roles.

---

## 📂 Architecture Overview

```txt
src/
├── auth/
│   ├── auth.types.ts
│   ├── auth.context.tsx
│   └── useAuth.ts
│   └── permissions.ts
├── api/
│   └── products.api.ts
├── components/
│   ├── ProtectedRoute.tsx
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   └── ProductItem.tsx
│   └── ProductList.tsx
│   └── LogoutButton.tsx
├── types/
│   ├── api.types.ts
│   └── product.types.ts
├── layouts/
│   └── DashboardLayout.tsx
├── pages/
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   └── Admin.tsx
│   └── NotFound.tsx
│   └── Unauthorized.tsx
└── router.tsx
```

---

## 🚀 Getting Started
```bash
npm install
npm run dev
```

---

## 🎯 Purpose of This Project
This project was created to:
- Gain deep understanding of TypeScript in React
- Practice real-world auth and permission patterns
- Build a solid foundation before learning Next.js

---

## 📌 Next Steps
- Migrate to Next.js App Router
- Replace mock API with real backend
- Add server-side authentication

---

## 👤 Author
**Seth Nkwo**
