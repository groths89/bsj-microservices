import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const Main = () => {

    return <main className="ml-[50%] w-full h-full p-6">
        <PostCreate />
        <PostList />
    </main>
}

export default Main;