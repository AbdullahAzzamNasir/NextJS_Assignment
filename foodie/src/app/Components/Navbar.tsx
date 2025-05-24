'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import Logo from '../../../public/FOODSJINN-bgs.png'
import './Navbar.css'
import localfont from 'next/font/local'

const PoppinsRegular = localfont({
    src: "../../../public/Fonts/Poppins-Regular.ttf"
})

function Navbar(){
    const pathname = usePathname()
    return(
        <>
            <nav className="bg-[#E1EEBC]">
            <div className=" flex justify-between max-w-[1440px] mx-auto items-center p-2">
                <div className="logo">
                    <Image className="w-[200px]" src={Logo} alt="logo" width={200} height={38}/>
                </div>
                <div className="flex items-center gap-10 text-[#41B3A2] text-[18px] font-medium">
                    <Link href="/" className={`hover:text-[#328E6E] border-b-2 border-transparent hover:border-b-2 hover:border-[#328E6E] ${pathname === '/' ? 'active' : ''} ${PoppinsRegular.className} `}>Home</Link>
                    <Link href="/about" className={`hover:text-[#328E6E] border-b-2 border-transparent hover:border-b-2 hover:border-[#328E6E]  ${pathname === '/about' ? 'active' : ''} ${PoppinsRegular.className} `}>About</Link>
                    <Link href="/contact" className={`hover:text-[#328E6E] border-b-2 border-transparent hover:border-b-2 hover:border-[#328E6E]  ${pathname === '/contact' ? 'active' : ''} ${PoppinsRegular.className} `}>Contact</Link>
                </div>
                <div>
                    <a className={`cursor-pointer bg-[#41B3A2] hover:bg-[#328E6E] text-white rounded px-6 py-2 ${PoppinsRegular.className} `}>Order Now</a>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar;