import { Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <div className="logo">
            <Link to='/' className='flex gap-2 items-center'>
                <Chrome size={20} />
                <div className='font-bold' style={{ fontSize: '1.2rem' }}>randomUI</div>
            </Link>
        </div>
    )
}