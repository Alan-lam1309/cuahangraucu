import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes, adminRoutes } from '~/routes';

import DefaultLayout from './components/Layout/DefaultLayout';
import { Admin } from './pages';
import { useSelector } from 'react-redux';

function App() {
    const [login, setLogin] = useState(true);
    const logined = useSelector((state) => state.login._user);
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
                    {Object.keys(logined).length !== 0 &&
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
                        })}

                    {!login ? (
                        <Route
                            path="/admin"
                            element={
                                <Admin
                                    logined={() => {
                                        setLogin(true);
                                    }}
                                />
                            }
                        />
                    ) : (
                        adminRoutes.map((route, index) => {
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
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
