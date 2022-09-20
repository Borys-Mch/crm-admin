import { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import App from './App';
import Login from './pages/Login';
import Page404 from './pages/Page404';

const RootRouter = () => {

    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<App />}>
                {user ? <Route path="" element={<h1>I`m autorized</h1>} /> : <Route path="" element={<Login onAuth={setUser} />} /> }
                <Route path="*" element={<Page404 />} />
            </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RootRouter;