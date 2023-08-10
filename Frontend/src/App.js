import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes, adminRoutes } from '~/routes';

import DefaultLayout from './components/Layout/DefaultLayout';
import { Error } from './pages';
import { Admin } from './pages';
// import { useSelector } from 'react-redux';
// import Login from './components/Login';

function App() {
    const [login, setLogin] = useState(false);
    // const logined = useSelector((state) => state.login._user);

    const handelLogin = () => {
        setLogin(true);
    };
    return (
        <Router>
            <div>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.Layout || DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}

                    {localStorage.getItem('user') !== '' ? (
                        privateRoutes.map((route, index) => {
                            const Layout = route.Layout || DefaultLayout;
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })
                    ) : (
                        <Route path='/cart' element={<Error />} />
                    )}

                    {
                        adminRoutes.map((route, index) => {
                            const Layout = route.Layout || DefaultLayout;
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        login ? (
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        ) : (
                                            <Admin logined={handelLogin} />
                                        )
                                    }
                                />
                            );
                        })
                    }
                </Routes>
            </div>
        </Router>
    );
}

export default App;
