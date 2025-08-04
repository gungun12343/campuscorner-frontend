import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "./Header";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const Paper = () => {
    let {subject} = useParams();
    const [papers, setPapers] = useState(null);
    const navigate = useNavigate();

    const fetchPapers = () => {
        axios.get("http://localhost:8080/papers/"+subject).then((res) => setPapers(res.data))
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        axios.get("http://localhost:8080/auth", {withCredentials: true}).then((res) => {
        })
        .catch((err) => {
            navigate("/login");
        })

       fetchPapers();
    }, [])

    if(papers === null) return;

    return (
        <div className="bg-gradient-to-b from-purple-100 to-blue-100 min-h-[100dvh]">
            <Header />

            <div className="flex justify-center items-center my-8"><h1 className="text-4xl font-extrabold text-violet-700">{subject.toUpperCase()}</h1></div>
           
            {<div className="flex flex-col items-center gap-3 text-xl font-bold text-white pb-10"> 
                {papers.map((paper) => (
                    <Link key={paper._id} className="bg-white hover:bg-violet-100 text-center border-2 hover:scale-105 transition duration-300 border-violet-500 rounded-md hover:opacity-70 md:w-1/3 w-2/3 text-xl font-bold text-violet-700 py-5" to={paper.url}><p>{paper.name.toUpperCase()} ({paper.year})</p></Link>
                ))}
            </div>}
        </div>
    )
}