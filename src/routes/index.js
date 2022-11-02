import { Home, Contact, AboutUs, Vegetable, Cart, Admin} from '~/pages';
import HeaderOnly from '~/components/Layout/HeaderOnly';

// Không cần đăng nhập mới xem đc
export const publicRoutes = [
    { path: '/', component: Home, Layout: HeaderOnly },
    { path: '/aboutUs', component: AboutUs, Layout: HeaderOnly },
    { path: '/contact', component: Contact, Layout: HeaderOnly },
    { path: '/vegetable', component: Vegetable, Layout: HeaderOnly },
    { path: '/cart', component: Cart, Layout: HeaderOnly },
    // {path: '/admin',component: Admin}
];
// Cần đăng nhập mới xem đc
export const privateRoutes = [
    // { path: '/cart', component: Cart, Layout: HeaderOnly },
];
