import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddMovieButton from "./aboutPage";
import { Login } from "./Login";
import { Register } from "./Register";
import { errorPage } from "./errorPage";
export const local = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/Register",
        element: <Register />
    },
    {
        path: "/aboutPage",
        element: <AddMovieButton />
    },
    {
        path: "*",
        element: <errorPage />
    },


])