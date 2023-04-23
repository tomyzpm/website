import Image from "next/image";
import logoImg from '@/assets/img/logo.png'
import Link from "next/link";
import {FiMenu} from "@react-icons/all-files/fi/FiMenu";
import {useState} from "react";

const links = [
    ['/', 'Aktualności'],
    ['/o-nas', 'O nas'],
    ['/galeria', 'Galeria'],
    ['/dolacz-do-nas', 'Dołącz do nas'],
    ['/kontakt', 'Kontakt']
]
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className="fixed top-0 left-0 w-full h-44 bg-white border-b sm:border-none">
            <div className="flex justify-center">
                <div className="flex items-center">
                    <Image src={logoImg} className="w-32" alt="logo" />
                    <span className="brand sm:block hidden">
                    STOWARZYSZENIE PRZYJACIÓŁ PAŁACU MŁODZIEŻY W WARSZAWIE
                        <br /> "TO MY Z PAŁACU MŁODZIEŻY"
                        </span>
                </div>
            </div>
            <div className="flex justify-center mb-5 sm:hidden">
                <button className="" onClick={() => setIsMenuOpen(v => !v)}>
                    <FiMenu className="w-5 h-5" />
                </button>
            </div>
            <div className={[
                'justify-center',
                isMenuOpen ? 'flex' : 'hidden sm:flex'
            ].join(' ')}>
                <ul className="sm:w-auto w-full text-center sm:flex justify-center border-b bg-white">
                    {
                        links.map(([href, text]) => (
                            <li key={href} className="w-full sm:w-auto">
                                <Link href={href} className="block cursor-pointer px-3 py-1 hover:bg-gradient-primary hover:text-white transition rounded-t">
                                    {text}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}
const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <main className="pt-44">
                {children}
            </main>
        </div>
    )
}

export default Layout