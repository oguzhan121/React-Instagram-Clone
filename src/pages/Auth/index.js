import {Outlet} from 'react-router-dom';
export default function AuthLayaout() {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <Outlet />
        </div>
    )
}