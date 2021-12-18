import  {  lazy } from "react";

const LandingPage = lazy(() => import("./LandingPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));
const ContactUs = lazy(() => import("./ContactUs"));

export {LandingPage ,NotFoundPage , ContactUs }