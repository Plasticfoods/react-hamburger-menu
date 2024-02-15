import navItems from "@/navItems";
import { Link } from "react-router-dom";


export default function NavMobile() {
    let navItemBgColor = '#09090B';

    return (
        <nav className='nav-mobile' style={{ backgroundColor: navItemBgColor }}>
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