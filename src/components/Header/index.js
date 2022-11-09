import { Link, NavLink } from "react-router-dom"
import Search from "../Search"
import { logout } from "../../firebase"
import SVG from 'react-inlinesvg';


export default function Header() {
    return (
        <header className="bg-white border-b border-gray-300 ">
            <div className="h-[60px] flex items-center justify-between container mx-auto px-20">
                <Link to="/">
                    <img className="h-[30px]" src="/images/logo.png" />
                </Link>
                <Search />

                <nav className="flex items-center gap-x-6">
                    <NavLink to="/"><SVG src={`${process.env.PUBLIC_URL}/images/icons/home.svg`} width={24} height={24} /></NavLink>
                    <NavLink to="/"><SVG src={`${process.env.PUBLIC_URL}/images/icons/direct.svg`} width={24} height={24} /></NavLink>
                    <NavLink to="/"><SVG src={`${process.env.PUBLIC_URL}/images/icons/new.svg`} width={24} height={24} /></NavLink>
                    <NavLink to="/"><SVG src={`${process.env.PUBLIC_URL}/images/icons/explore.svg`} width={24} height={24} /></NavLink>
                    <NavLink to="/"><SVG src={`${process.env.PUBLIC_URL}/images/icons/like.svg`} width={24} height={24} /></NavLink>

                    <button onClick={logout}>
                        <img className="w-[24px] rounded " src="/images/avatar.jpg" />
                    </button>
                </nav>
            </div>

        </header>
    )
}