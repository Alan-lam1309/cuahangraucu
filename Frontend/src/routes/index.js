import { Home, Contact, AboutUs, Vegetable, Cart, Admin, AdminHome, User, UserList, NewUser, Product, ProductList, NewProduct, Account, AccountTransaction } from '~/pages';
import HeaderOnly from '~/components/Layout/HeaderOnly';
import LayoutAdmin from '~/components/Layout/LayoutAdmin';
import LayoutAccount from '~/components/Layout/LayoutAccount';

// Không cần đăng nhập mới xem đc
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/aboutUs', component: AboutUs },
    { path: '/contact', component: Contact },
    { path: '/vegetable', component: Vegetable },
];
export const privateRoutes = [
    { path: '/cart', component: Cart, Layout: HeaderOnly },
    { path: '/myaccount/information', component: Account, Layout: LayoutAccount },
    { path: '/myaccount/transactions', component: AccountTransaction, Layout: LayoutAccount },
];
// Cần đăng nhập mới xem đc
export const adminRoutes = [
    { path: '/admin', component: AdminHome, Layout: LayoutAdmin },
    { path: '/admin-login', component: Admin, Layout: LayoutAdmin },
    { path: '/admin/users', component: User, Layout: LayoutAdmin },
    { path: '/admin/userslist', component: UserList, Layout: LayoutAdmin },
    { path: '/admin/newusers', component: NewUser, Layout: LayoutAdmin },
    { path: '/admin/products', component: Product, Layout: LayoutAdmin },
    { path: '/admin/productslist', component: ProductList, Layout: LayoutAdmin },
    { path: '/admin/newproduct', component: NewProduct, Layout: LayoutAdmin },
];
