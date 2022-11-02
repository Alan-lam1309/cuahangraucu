import { Home, Contact, AboutUs, Vegetable, Cart, Admin , AdminHome , User ,UserList , NewUser , Product , ProductList , NewProduct} from '~/pages';
import HeaderOnly from '~/components/Layout/HeaderOnly';
import LayoutAdmin from '~/components/Layout/LayoutAdmin';


// Không cần đăng nhập mới xem đc
export const publicRoutes = [
    { path: '/', component: Home, Layout: HeaderOnly },
    { path: '/aboutUs', component: AboutUs, Layout: HeaderOnly },
    { path: '/contact', component: Contact, Layout: HeaderOnly },
    { path: '/vegetable', component: Vegetable, Layout: HeaderOnly },
    { path: '/cart', component: Cart, Layout: HeaderOnly },  
    {path: '/admin',component: Admin},
    {path: '/adminhome', component: AdminHome , Layout: LayoutAdmin},
    {path: '/users', component: User , Layout: LayoutAdmin},
    {path: '/userslist', component: UserList , Layout: LayoutAdmin},
    {path: '/newusers', component: NewUser , Layout: LayoutAdmin},
    {path: '/product', component: Product , Layout: LayoutAdmin},
    {path: '/productlist', component: ProductList , Layout: LayoutAdmin},
    {path: '/newproduct', component: NewProduct , Layout: LayoutAdmin}


];
// Cần đăng nhập mới xem đc
export const privateRoutes = [
    // { path: '/cart', component: Cart, Layout: HeaderOnly },
];
