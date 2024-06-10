import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";

const ROUTES = [
    {
        path: "/",
        element: <SiteRoot/>,
        children: [
            {
                path: "",
                element: <Home/>
            }
        ]
    }
]

export default ROUTES