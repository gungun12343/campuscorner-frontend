import { useState } from "react"
import {Header} from "./Header"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({username: "", email: "", password: ""});
    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};

        if(!isLogin && !formData.email) {
            newErrors.email = "Email is required";
        } else if (!isLogin && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is not valid";
        }

        if(!formData.password) {
            newErrors.password = "Password is required";
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(formData.password)) {
            newErrors.password = "Please enter a strong password";
        }

        if(!formData.username) {
            newErrors.username = "Username is required";
        }

        return newErrors;
    }

    useEffect(() => {
        axios.get("http://localhost:8080/auth", {withCredentials: true}).then((res) => {
            navigate("/semester");
        })
        .catch((err) => {
        })
    }, [])

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        setFormSubmitted(true);

        if(Object.keys(validationErrors).length === 0) {
            if(!isLogin) {
                axios.post("http://localhost:8080/signup", formData, {withCredentials: true}).then((res) => navigate("/semester"))
                .catch((err) => console.log(err));
            } else {
                axios.post("http://localhost:8080/login", {
                    username: formData.username,
                    password: formData.password
                }, {withCredentials: true}).then((res) => navigate("/semester"))
                .catch((err) => console.log(err));
            }
        }
    }

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit} className="bg-violet-500 shadow-lg shadow-black flex flex-col p-4 py-8 rounded-lg md:mt-[5%] mt-[10%] m-auto lg:w-3/12 md:w-2/5 w-2/3 gap-3">
                <h2 className="font-bold text-2xl text-white">{isLogin ? "Login" : "Sign Up"}</h2>
                <p>
                    <span>{isLogin ? "Don't have an account yet?": "Already have a account?"}</span>
                    <button type="button" className="text-white font-semibold" onClick={() => {setIsLogin(!isLogin); setFormSubmitted(false); setErrors({})}}>{isLogin ? " Sign up here" : "Log in here"}</button>
                </p>

                
                <div>
                    <p className="text-white text-lg">Username</p>
                    <input name="username" type="text" placeholder="Enter username" className=" py-3 p-2 w-full text-lg rounded-lg" value={formData.username} onChange={handleChange} />
                    {formSubmitted && errors.username && <p className="text-red-700">{errors.username}</p>}
                </div>
        
                {!isLogin && 
                <div>
                    <p className="text-white text-lg">Email address</p>
                    <input name="email" type="text" placeholder="Enter email address" className="p-2 py-3 w-full text-lg rounded-lg" value={formData.email} onChange={handleChange} />
                    {formSubmitted && errors.email && <p className="text-red-700">{errors.email}</p>}
                </div>}

                <div>
                    <p className="text-white text-lg">Password</p>
                    <input name="password" type="password" placeholder="Enter password" className="p-2 py-3 w-full text-lg rounded-lg" value={formData.password} onChange={handleChange} />
                    {formSubmitted && errors.password && <p className="text-red-700">{errors.password}</p>}
                </div>

                <button className="bg-green-600 px-5 py-3 mt-2 rounded-md text-white font-semibold">{isLogin ? "LOGIN" : "SIGN UP"}</button>
            </form>
        </div>
    )
}