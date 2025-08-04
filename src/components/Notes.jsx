import {Link, useNavigate, useParams} from "react-router-dom";
import {Header} from "./Header";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const Notes = () => {
    const { subject } = useParams();
    const [notes, setNotes] = useState(null);
    const navigate = useNavigate();
    let count = 1;

    const fetchNotes = () => {
        axios.get("http://localhost:8080/notes/"+subject).then((res) => setNotes(res.data))
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        axios.get("http://localhost:8080/auth", {withCredentials: true}).then((res) => {
        })
        .catch((err) => {
            navigate("/login");
        })
        fetchNotes();
    },[])

    if(notes === null) return;

    return (
        <div className="bg-gradient-to-b from-purple-100 to-blue-100 min-h-[100dvh]">
            <Header />

            <div className="my-8 text-4xl font-extrabold text-violet-700 flex justify-center items-center"><h1>{subject.toUpperCase()}</h1></div>

            <div className="flex flex-col justify-center items-center gap-2 pb-10">
                {
                    notes.map((note) => (
                        <Link className="md:w-1/3 w-2/3 hover:bg-violet-100 rounded-md hover:opacity-70 border-2 border-violet-500 hover:scale-105 transition duration-300 bg-white py-5 text-violet-700 font-bold text-xl text-center" to={note}>UNIT {count++}</Link>
                    ))
                }
            </div>
        </div>
    )
}