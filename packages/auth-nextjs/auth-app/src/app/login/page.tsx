"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    });

    const onLogin = async () => {
        try {
            const res = await axios.post("/api/auth/login", user);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col items-center justify-center w-half text-center">
                <h1 className="text-6xl font-bold">Log In</h1>
                <hr className="w-full my-7" />
                <label className="text-left" htmlFor="email">Email</label>
                <input id="email" className="w-full p-2 border border-gray-300 rounded-lg mb-4" type="email" placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <label className="text-left" htmlFor="password">Password</label>
                <input id="password" className="w-full p-2 border border-gray-300 rounded-lg mb-4" type="password" placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <button className="w-full p-2 border border-gray-300 rounded-lg mb-4" onClick={onLogin}>Log In</button>
                <Link href="/signup">Register</Link>
            </div>
        </div>
    )
}