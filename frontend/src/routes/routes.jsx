import AddCollection from "../pages/admin/AddCollection/AddCollection";
import AddEvent from "../pages/admin/AddEvent/AddEvent";
import AddExhibition from "../pages/admin/AddExhibition/AddExhibition";
import AddShop from "../pages/admin/AddShop/AddShop";
import AdminRoot from "../pages/admin/AdminRoot";
import ExhibitionsInfos from "../pages/admin/ExhibitionsInfos/ExhibitionsInfos";
import Collection from "../pages/site/Collection/Collection";
import ExhibitionDetail from "../pages/site/ExhibitionDetail/ExhibitionDetail";
import Exhibitions from "../pages/site/Exhibitions/Exhibitions";
import Home from "../pages/site/Home/Home";
import Shop from "../pages/site/Shop/Shop";
import ShopCategory from "../pages/site/ShopCategory/ShopCategory";
import SignUpPage from "../pages/site/SignUpPage/SignUpPage";
import SiteRoot from "../pages/site/SiteRoot";

const ROUTES = [
    {
        path: "/",
        element: <SiteRoot/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "exhibitions-events",
                element: <Exhibitions/>
            },
            {
                path: "shop",
                element: <Shop/>
            },
            {
                path: "details",
                element: <ExhibitionDetail/>
            },
            {
                path: "shop/shop-category",
                element: <ShopCategory/>
            },
            {
                path: "collection",
                element: <Collection/>
            },
            {
                path: "sign-up",
                element: <SignUpPage/>
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminRoot/>,
        children: [
            {
                path: "add-exhibition",
                element: <AddExhibition/>
            },
            {
                path: "add-event",
                element: <AddEvent/>
            },
            {
                path: "add-collection",
                element: <AddCollection/>
            },
            {
                path: "add-shop",
                element: <AddShop/>
            },
            {
                path: "exhibitions-infos",
                element: <ExhibitionsInfos/>
            }
        ]
    }
]

export default ROUTES