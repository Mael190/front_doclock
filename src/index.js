import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Upload from "./pages/Upload";
import Agence from "./pages/Agence";
import Annonce from "./pages/Annonce";
import './styles/main.css'
import Credit from "./pages/Credit";

const router = createBrowserRouter([
    {
        path:"/annonce",
        element: <Annonce />
    },
    {
        path:"/credit",
        element: <Credit />
    },
    {
        path: "/*",
        element: <Annonce />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
