import Site from "./views/Site";
import SignUp from "./views/SignUp";
import Search from "./views/Search";
import ServiceProviderProfile from "./views/ServiceProviderProfile";

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
        component: Search,
        name: "search"
    },
    {
        path: "/profile/:id",
        component: ServiceProviderProfile,
        name: "profile"
    }
];

export default routes;