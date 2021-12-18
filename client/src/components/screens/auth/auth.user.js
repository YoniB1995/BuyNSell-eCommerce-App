import { lazy } from "react";

const ForgotPassScreen = lazy(() => import("./ForgotPassScreen"));
const LoginScreen = lazy(() => import("./LoginScreen"));
const PrivateScreen = lazy(() => import("./PrivateScreen"));
const ResetPassScreen = lazy(() => import("./ResetPassScreen"));


export {ForgotPassScreen, LoginScreen, PrivateScreen , ResetPassScreen }