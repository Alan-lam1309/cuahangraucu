import Sidebar from '~/components/Layout/DefaultLayout/sidebar/Sidebar';
// import Topbar from '~/components/Layout/topbar/Topbar';
import './App.css';
import Home from '~/pages/Admin/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from '~/pages/Admin/userList/UserList';
import User from '~/pages/Admin/user/User';
import NewUser from '~/pages/Admin/newUser/NewUser';
import ProductList from '~/pages/Admin/productList/ProductList';
import Product from '~/pages/Admin/product/Product';
import NewProduct from '~/pages/Admin/newProduct/NewProduct';
import Button from '~/components/Button';

function Admin() {
    return (
        <div>
            {/* <Topbar /> */}
            <div className="container">
                <Sidebar />

                {/* <Routes>
                    <Button exact path="/">
                        <Home />
                    </Button>
                    <Route path="/users">
                        <UserList />
                    </Route>
                    <Route path="/user/:userId">
                        <User />
                    </Route>
                    <Route path="/newUser">
                        <NewUser />
                    </Route>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                    <Route path="/product/:productId">
                        <Product />
                    </Route>
                    <Route path="/newproduct">
                        <NewProduct />
                    </Route>
                </Routes> */}
            </div>
        </div>
    );
}

export default Admin;
