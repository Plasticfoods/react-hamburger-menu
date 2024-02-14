import navItems from "@/navItems";
import { Link } from "react-router-dom";


export default function NavMobile() {
    return (
        <nav className='nav-mobile'>
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