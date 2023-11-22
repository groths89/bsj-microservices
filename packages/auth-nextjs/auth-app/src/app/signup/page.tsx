"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const res = await axios.post("/api/users/signup", user);
            console.log("Success: ", res.data);
            toast.success("Signup successful!");
            router.push("/login");
        } catch (error: any) {
            console.log("Failure: ", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
    <div className="backdrop-blur-md bg-gradient-to-tr from-primary via-[#51118e] to-secondary">
        <p className="font-bold">{loading ? "Processing..." : ""}</p>            
        <div className="flex flex-col items-center justify-center min-w-screen min-h-screen py-2">
            
            <div className="flex flex-col bg-neutral-50 items-center justify-center w-2/4 h-fit text-center shadow-md rounded p-2">
                <h1 className="text-xl font-bold">Sign Up</h1>
                <hr className="w-full my-7" />
                <label className="text-left" htmlFor="username">Username</label>
                <input id="username" className="w-full p-2 border border-gray-300 rounded-lg mb-4" type="text" placeholder="Username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                <label className="text-left" htmlFor="email">Email</label>
                <input id="email" className="w-full p-2 border border-gray-300 rounded-lg mb-4" type="email" placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <label className="text-left" htmlFor="password">Password</label>
                <input id="password" className="w-full p-2 border border-gray-300 rounded-lg mb-4" type="password" placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <button disabled={buttonDisabled ? true : false} className={buttonDisabled ? "w-full p-2 border border-gray-300 bg-slate-50 text-slate-300 rounded-lg mb-4" : "w-full p-2 border border-gray-300 rounded-lg mb-4"} onClick={onSignup}>{buttonDisabled ? "No Signup" : "Signup"}</button>
                <Link href="/login">Visit Login Page</Link>
            </div>
        </div>
    </div>
    )
}