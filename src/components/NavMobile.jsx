import navItems from "@/navItems";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Chrome } from 'lucide-react';

export default function NavMobile() {
    let navItemBgColor = '#09090B';

    return (
        <nav className='nav-mobile ' style={{ backgroundColor: navItemBgColor }}>
            <div className="">
                <Link to='/' className='flex gap-2 items-center'>
                    <Chrome size={20} />
                    <div className='font-bold' style={{ fontSize: '1.2rem' }}>randomUI</div>
                </Link>
            </div>
            <ul>
                {navItems.map((navItem) => {
                    return (
                        <li key={navItem.title}>
                            <Link
                                onClick={() => setOpen((prev) => !prev)}
                                to={navItem.link}
                                className="link"
                            >
                                {navItem.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}