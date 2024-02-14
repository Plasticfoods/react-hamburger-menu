import Logo from "./Logo"
import { Input } from "@/components/ui/input"
import { MoonStar } from 'lucide-react';
import NavDesktop from "./NavDesktop";
import Hamburger from 'hamburger-react'
import { useState } from "react";
import { Link } from "react-router-dom";

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
                <div className="flex items-center">
                    <Input type="search" placeholder="Search..." />
                </div>
                <Link className="flex items-center">
                    <MoonStar size={20} />
                </Link>
            </div>
        </header>    
    )
}