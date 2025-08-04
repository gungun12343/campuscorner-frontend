import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
const API_BASE = import.meta.env.VITE_BACKEND_URL;

export const Header = () => {
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`${API_BASE}/auth`, {withCredentials: true}).then((res) => {
            setIsLoggedIn(true);
        })
        .catch((err) => {
            setIsLoggedIn(false);
        })
    }, [])

    const logOut = () => {
        axios.get(`${API_BASE}/logout`, {withCredentials: true}).then((res) => {
            setIsLoggedIn(false);
            navigate("/login")
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className="bg-violet-500 flex justify-between overflow-x-hidden pr-2 items-center w-full">
            <div className="flex items-center">
                <img className="w-32 aspect-auto" src="https://static.vecteezy.com/system/resources/thumbnails/044/761/413/small_2x/open-book-isolated-png.png" />
                <h1 className="text-3xl md:visible invisible font-extrabold text-white ml-2">CAMPUSCORNER</h1>
            </div>

            <div>
                {
                    isLoggedIn ? 
                    <button onClick={logOut} className="bg-white px-5 py-2 rounded-md text-lg font-semibold">LOGOUT</button>
                    :
                    <Link to="/login">
                        <button className="bg-white px-5 py-2 rounded-md text-lg font-semibold">LOGIN</button>
                    </Link>
                }  
            </div>
        </div>
    )
}

// location.pathname == "/" &&