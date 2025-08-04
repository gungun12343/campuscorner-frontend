import { Link, useNavigate, useParams } from "react-router-dom"
import { Header } from "./Header"
import { useEffect, useState } from "react";
import axios from "axios";

export const AllSubjects = () => {
    let {sem} = useParams();
    const [subjects, setSubjects] = useState(null);
    const navigate = useNavigate();
    const colors = ["bg-blue-100", "bg-green-100", "bg-pink-100", "bg-yellow-100"];
    
    const fetchSubjects = () => {
        axios.get("http://localhost:8080/"+sem+"/subjects").then((res) => setSubjects(res.data))
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        axios.get("http://localhost:8080/auth", {withCredentials: true}).then((res) => {
        })
        .catch((err) => {
            navigate("/login");
        })

        fetchSubjects();
    }, [])

    if(subjects === null) return;

    return (
        <div className="bg-gradient-to-b from-purple-100 to-blue-100 min-h-[100dvh]">
            <Header />

            {/* <div className="flex flex-wrap gap-5 mt-[6%] justify-evenly">
                <Link to={"/subject/software architectures"} className="rounded-md hover:opacity-70 cursor-pointer py-5 px-2 bg-violet-500 w-1/4 text-white text-lg font-semibold">SOFTWARE ARCHITECTURES</Link>
                <Link to={"/subject/computational intelligence"} className="rounded-md hover:opacity-70 cursor-pointer py-5 px-2 bg-violet-500 w-1/4 text-white text-lg font-semibold">COMPUTATIONAL INTELLIGENCE</Link>
                <Link to={"/subject/deep and reinforcement learning"} className="rounded-md hover:opacity-70 cursor-pointer py-5 px-2 bg-violet-500 w-1/4 text-white text-lg font-semibold">DEEP & REINFORCEMENT LEARNING</Link>
                <Link to={"/subject/wireless and mobile computing"} className="rounded-md hover:opacity-70 cursor-pointer py-5 px-2 bg-violet-500 w-1/4 text-white text-lg font-semibold">WIRELESS & MOBILE COMPUTING</Link>
                <Link to={"/subject/big data"} className="rounded-md hover:opacity-70 cursor-pointer py-5 px-2 bg-violet-500 w-1/4 text-white text-lg font-semibold">BIG DATA</Link>
                <Link to={"/subject/cryptography and information security"} className="rounded-md hover:opacity-70 cursor-pointer py-5 px-2 bg-violet-500 w-1/4 text-white text-lg font-semibold">CRYPTOGRAPHY & INFORMATION SECURITY</Link>
                <Link to={"/subject/data mining and warehousing"} className="rounded-md hover:opacity-70 cursor-pointer py-5 px-2 bg-violet-500 w-1/4 text-white text-lg font-semibold">DATA MINIG & WARESHOUSING</Link>
                <Link to={"/subject/agile software development"} className="rounded-md hover:opacity-70 cursor-pointer py-5 px-2 bg-violet-500 w-1/4 text-white text-lg font-semibold">AGILE SOFTWARE DEVELOPMENT</Link>
                <Link to={"/subject/disaster management"} className="rounded-md hover:opacity-70 cursor-pointer py-5 px-2 bg-violet-500 w-1/4 text-white text-lg font-semibold">DISASTER MANAGEMENT</Link>
            </div> */}

            {/* <div className="flex flex-wrap gap-5 mt-[6%] justify-center">
                {
                    subjects.map((subject) =>(
                        <Link to={"/"+sem+"/subject/"+subject.name} 
                        // className="text-center rounded-md hover:opacity-70 cursor-pointer py-5 px-2 bg-violet-500 w-1/3 text-white text-lg font-semibold"
                        >
                            {subject.name}
                        </Link>
                    ))
                }
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-11 gap-6 p-4 px-10">
                {subjects.map((subject, index) => (
                <Link
                key={index}
                to={`/${sem}/subject/${subject.name}`}
                className="bg-white shadow-lg rounded-2xl p-6 text-center hover:bg-violet-100 hover:scale-105 transition duration-300"
                >
                <h2 className="text-xl font-bold text-violet-700">{subject.name.toUpperCase()}</h2>
                </Link>
                ))}
            </div>
        </div>
    )
}