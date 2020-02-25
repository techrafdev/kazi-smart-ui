import Site from "./views/Site";
import SignUp from "./views/SignUp";
// import SignIn from "./views/SignIn";
import Search from "./views/Search";

const routes = [
    {
        path: "/",
        component: Site,
        name: "site"
    },
    {
        path: "/signup/:role",
        component: SignUp,
        name: "signup"
    },
    {
        path: "/service-providers/search/:service_id?/:location?",
        // path: "/service-providers/search",
        component: Search,
        name: "search"
    }
];

export default routes;