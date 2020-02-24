import Site from "./views/Site";
import SignUp from "./views/SignUp";
// import SignIn from "./views/SignIn";

const routes = [
    {
        path: "/",
        component: Site,
        name: "site"
    },
    {
        path: "/signup",
        component: SignUp,
        name: "signup"
    }
];

export default routes;