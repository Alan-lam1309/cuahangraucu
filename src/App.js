
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '~/routes';

import DefaultLayout from './components/Layout/DefaultLayout';
import { Admin } from './pages';

function App() {
    const [login, setLogin] = useState(false);

    return (
        <Router>
            <div>
                <Routes>
                    {!login &&
                        publicRoutes.map((route, index) => {
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
                    {!login && 
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
                    }
                    
                    {login &&
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
                </Routes>
            </div>
        </Router>
    );
}

export default App;
