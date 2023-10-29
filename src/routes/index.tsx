import { useRoutes, Navigate } from "react-router-dom";
import DashboardLayout from "@/layouts/dashboard";
import MainLayout from "@/layouts/main";
import { Suspense, lazy } from "react";
import LoadingScreen from "@/components/LoadingScreen";

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

const Router = () => {
  return useRoutes([
    {
      path: "/auth",
      element: <MainLayout />,
      children: [
        { path: "login", element: <LoginPage /> },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "reset-password",
          element: <ResetPasswordPage />,
        },
        {
          path: "new-password",
          element: <NewPasswordPage />,
        },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/" replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "settings", element: <Settings /> },
        { path: "group", element: <GroupPage /> },
        { path: "call", element: <CallPage /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);
const Settings = Loadable(lazy(() => import("@/pages/dashboard/Settings")));
const LoginPage = Loadable(lazy(() => import("@/pages/auth/Login")));
const RegisterPage = Loadable(lazy(() => import("@/pages/auth/Register")));
const ResetPasswordPage = Loadable(
  lazy(() => import("@/pages/auth/ResetPassword"))
);
const NewPasswordPage = Loadable(
  lazy(() => import("@/pages/auth/NewPassword"))
);
const CallPage = Loadable(lazy(() => import("@/pages/dashboard/Call")));
const GroupPage = Loadable(lazy(() => import("@/pages/dashboard/Group")));
const Page404 = Loadable(lazy(() => import("@/pages/Page404")));

export default Router;
