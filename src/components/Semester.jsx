import { Link, useNavigate } from "react-router-dom"
import { Header } from "./Header"
import { useEffect } from "react"
import axios from "axios"
const API_BASE = import.meta.env.VITE_BACKEND_URL;

export const Semester = () => {
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_BASE}/auth`, {withCredentials: true}).then((res) => {
        })
        .catch((err) => {
            navigate("/login");
        })
    }, [])

    return (
        <div className="bg-gradient-to-b from-purple-100 to-blue-100 h-full">
            <Header />

                <h2 className="text-4xl text-violet-700 mt-8 text-center font-bold">CHOOSE YOUR SEMESTER</h2>

                {/* <div className="flex flex-wrap gap-5 mt-20 items-center justify-center">
                    <Link to="/1/subjects" className="w-1/3 bg-violet-500 py-3 text-center text-white text-lg font-bold rounded-md">1 SEMESTER</Link>
                    <Link to="/2/subjects" className="w-1/3 bg-violet-500 py-3 text-center text-white text-lg font-bold rounded-md">2 SEMESTER</Link>
                    <Link to="/3/subjects" className="w-1/3 bg-violet-500 py-3 text-center text-white text-lg font-bold rounded-md">3 SEMESTER</Link>
                    <Link to="/4/subjects" className="w-1/3 bg-violet-500 py-3 text-center text-white text-lg font-bold rounded-md">4 SEMESTER</Link>
                    <Link to="/5/subjects" className="w-1/3 bg-violet-500 py-3 text-center text-white text-lg font-bold rounded-md">5 SEMESTER</Link>
                    <Link to="/6/subjects" className="w-1/3 bg-violet-500 py-3 text-center text-white text-lg font-bold rounded-md">6 SEMESTER</Link>
                    <Link to="/7/subjects" className="w-1/3 bg-violet-500 py-3 text-center text-white text-lg font-bold rounded-md">7 SEMESTER</Link>
                    <Link to="/8/subjects" className="w-1/3 bg-violet-500 py-3 text-center text-white text-lg font-bold rounded-md">8 SEMESTER</Link>
                </div> */}

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-[25%] mt-11 pb-20">
                    <Link to="/1/subjects" className="hover:scale-105 hover:bg-violet-100 transition duration-300 bg-white hover:shadow-lg py-16 text-2xl rounded-xl text-violet-700 font-bold text-center">1 SEMESTER</Link>
                    <Link to="/2/subjects" className="bg-white hover:bg-violet-100 hover:scale-105 transition duration-300 hover:shadow-lg py-16 text-2xl rounded-xl text-violet-700 font-bold text-center">2 SEMESTER</Link>
                    <Link to="/3/subjects" className="bg-white hover:bg-violet-100 hover:scale-105 transition duration-300 hover:shadow-lg py-16 text-2xl rounded-xl text-violet-700 font-bold text-center">3 SEMESTER</Link>
                    <Link to="/4/subjects" className="bg-white hover:bg-violet-100 hover:scale-105 transition duration-300 hover:shadow-lg py-16 text-2xl rounded-xl text-violet-700 font-bold text-center">4 SEMESTER</Link>
                    <Link to="/5/subjects" className="bg-white hover:bg-violet-100 hover:scale-105 transition duration-300 hover:shadow-lg py-16 text-2xl rounded-xl text-violet-700 font-bold text-center">5 SEMESTER</Link>
                    <Link to="/6/subjects" className="bg-white hover:bg-violet-100 hover:scale-105 transition duration-300 hover:shadow-lg py-16 text-2xl rounded-xl text-violet-700 font-bold text-center">6 SEMESTER</Link>
                    <Link to="/7/subjects" className="bg-white hover:bg-violet-100 hover:scale-105 transition duration-300 hover:shadow-lg py-16 text-2xl rounded-xl text-violet-700 font-bold text-center">7 SEMESTER</Link>
                    <Link to="/8/subjects" className="bg-white hover:bg-violet-100 hover:scale-105 transition duration-300 hover:shadow-lg py-16 text-2xl rounded-xl text-violet-700 font-bold text-center">8 SEMESTER</Link>
                </div>
        </div>
    )
}