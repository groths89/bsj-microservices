import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BsJournal } from "react-icons/bs";
import { GrScorecard } from "react-icons/gr";
import { ImStatsBars } from "react-icons/im";


const NAV_ITEMS_ARRAY = [
    {
        title: 'Home',
        icon: IoHomeOutline
    },
    {
        title: 'Journals',
        icon: BsJournal
    },
    {
        title: 'Scorecards',
        icon: GrScorecard
    },
    {
        title: 'Statistics',
        icon: ImStatsBars
    }
]

const Header = () => {

    return <header className="flex flex-col h-screen w-1/2 space-y-4 py-6 px-3 lg:pb-0">
        <div className="flex-shrink-0">
            <button href="#" title="" className="flex">
                <img className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
            </button>
        </div>
        {
            NAV_ITEMS_ARRAY.map((item) => (
                <a className="hover:bg-slate-600/10 transition duration-200 text-xl flex items-center justify-start w-fit space-x-2 rounded-3xl py-2 px-4" href={`/${item.title.toLowerCase()}`} key={item.title}>
                    <div>
                        <item.icon/>
                    </div>
                    <div>
                        {item.title}
                    </div>                    
                </a>
            ))
        }
        <button className="w-full rounded-full bg-primary text-white text-2xl text-center px-6 py-4 hover:bg-opacity-90">
            Community Post
        </button>
    </header>   
}

export default Header;