import navItems from "@/navItems" 
import { Link } from "react-router-dom"

export default function NavDesktop() {
    
    return (
        <nav className="nav-desktop">
            <ul className="flex gap-5 items-center">
                {navItems.map((navItem, index) => (
                    <li key={index}>
                        <Link className="text-gray-400 text-extrabold">
                            {navItem.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>    
    )
}