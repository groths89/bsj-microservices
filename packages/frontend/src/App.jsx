import React from "react";
import PostCreate from "./PostCreate.jsx";
import PostList from "./PostList.jsx";
import Header from "./Header.jsx";
import Main from "./Main.jsx";

const App = () => {
    return <div className="">
        <div className="flex w-full h-full relative">
            <div className="max-w-screen-xl w-full h-full flex relative">
                <div className="flex flex-row fixed h-screen w-1/3 bg-background text-white">
                    <div className="flex flex-col h-screen w-1/2 space-y-4 py-6 px-3 lg:pb-0"></div>
                    <Header />                    
                </div>
                <Main />     
            </div>
        </div>
    </div>;
}

export default App;