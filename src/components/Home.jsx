import {Link, useNavigate } from "react-router-dom"
import { Header } from "./Header"
import { useEffect } from "react";
import axios from "axios";

export const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/auth", {withCredentials: true}).then((res) => {
            navigate("/semester");
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div className="">
            <Header />

            <div className="flex flex-col md:mt-[10%] mt-[15%] justify-center items-center">
                <p className="text-4xl md:w-[50%] px-3 m-auto">Access previous year papers, notes, videos and syllabus organized by year, branch & subject.</p>
                <Link to="/login"><button className="bg-violet-500 text-white px-5 py-2 rounded-md text-lg mt-10">LOGIN/REGISTER</button></Link>
            </div>
        </div>
    )
}