import Logo from "./Logo"
import { Input } from "@/components/ui/input"
import { MoonStar } from 'lucide-react';
import NavDesktop from "./NavDesktop";
import Hamburger from 'hamburger-react'
import { useState } from "react";
import { Link } from "react-router-dom";
import NavMobile from "./NavMobile";
// import { useClickAway } from "react-use";
// https://streamich.github.io/react-use/?path=/story/ui-useclickaway--docs (react-use)


export default function Header() {
    const [isOpen, setOpen] = useState(false)

    return (
        <header>
            <div className="header-inner">
                <Logo />
                <div className="md:hidden hamburger-button">
                    <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
                </div>
                <NavDesktop />
                {isOpen && <NavMobile />}
                <div className="flex items-center">
                    <Input type="search" placeholder="Search documentation..." />
                </div>
                <Link className="flex items-center">
                    <MoonStar size={20} />
                </Link>
            </div>
        </header>    
    )
}