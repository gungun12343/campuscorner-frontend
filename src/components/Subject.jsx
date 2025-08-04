import axios from "axios";
import { Header } from "./Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export const Subject = () => {
    const [syllabus, setSyllabus] = useState(null);
    const {subject} = useParams();
    const {sem} = useParams();
    const navigate = useNavigate();

    const getSyllabus = () => {
        axios.get("http://localhost:8080/syllabus/"+sem).then((res) => setSyllabus(res.data[0].url))
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        axios.get("http://localhost:8080/auth", {withCredentials: true}).then((res) => {
        })
        .catch((err) => {
            navigate("/login");
        })

        getSyllabus();
    }, [])

    return (
        <div className="bg-gradient-to-b from-purple-100 to-blue-100 h-screen">
            <Header />

            <h1 className="text-4xl font-extrabold my-8 mb-8 text-center text-violet-700">{subject.toUpperCase()}</h1>

                <div className="grid grid-cols-1 gap-2 lg:mx-[35%] md:mx-[25%] mx-[20%]">
                    
                    <Link to={syllabus}>
                        <h2 className="text-2xl rounded-lg hover:bg-violet-100 hover:scale-105 transition duration-300 border-violet-500 border-2 font-bold text-violet-700 cursor-pointer mb-4 px-5 py-5 bg-white">VIEW SYLLABUS</h2>
                    </Link>

                    <Link to={"/notes/"+subject}>
                        <h2 className="text-2xl rounded-lg hover:bg-violet-100 hover:scale-105 transition duration-300 border-violet-500 border-2 font-bold text-violet-700 cursor-pointer px-5 py-5 mb-4 bg-white">ACCESS NOTES</h2>
                    </Link>

                    <Link to={"/paper/"+subject}>
                        <h2 className="text-2xl rounded-lg hover:bg-violet-100 hover:scale-105 transition duration-300 border-violet-500 border-2 font-bold text-violet-700 cursor-pointer px-5 py-5 bg-white"> SOLVE PREVIOUS YEAR PAPERS</h2>
                    </Link>

                </div>
        </div>
    )
}