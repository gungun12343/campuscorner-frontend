import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";
import { Paper } from "./Paper";
import { Notes } from "./Notes";
import { Subject } from "./Subject";
import { AllSubjects } from "./AllSubjects";
import { Semester } from "./Semester";
import { useEffect } from "react";
import axios from "axios";

export const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/login",
            element: <Login />
        }, 
        {
            path: "/paper/:subject",
            element: <Paper />
        }, 
        {
            path: "/notes/:subject",
            element: <Notes />
        },
        {
            path: "/:sem/subject/:subject",
            element: <Subject />
        }, 
        {
            path: "/:sem/subjects",
            element: <AllSubjects />
        },
        {
            path: "/semester",
            element: <Semester />
        }
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}