// Export all the public routes

import Counter from "@pages/public/Counter/counter";
import Login from "@pages/public/login";
import SignUp from "@pages/public/signup";

export const PublicRoutes = [
  { path: "/auth/login", exact: true, component: Login },
  { path: "/auth/signup", exact: true, component: SignUp },
  { path: "/auth/counter", exact: true, component: Counter },
];
