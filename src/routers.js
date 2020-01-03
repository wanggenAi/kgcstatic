// import Customers from './components/Customers'
import KgcUser from './components/KgcUser'

export default[
    {
        path:"/",
        component: ()=> import("./components/Customers"),
    },
    // {path:"/",redirect: "kgcIndex"},
    {path:"/kgcIndex",component:KgcUser},
]