import Link from "next/link";
import Image from "next/image";


function Navbar(){
    return(
        <>
            <nav className="bg-[#E1EEBC]">
            <div className=" flex justify-between max-w-[1440px] mx-auto items-center p-2">
                <div className="logo">
                    <Image className="w-[200px]" src="/FOODSJINN-bgs.png" alt="logo" width={200} height={38}/>
                </div>
                <div className="flex items-center gap-10 text-[#41B3A2] text-[18px] font-medium">
                    <Link href="/" className="hover:text-[#328E6E] hover:font-bold hover:border-b-2 border-[#328E6E]">Home</Link>
                    <Link href="/about" className="hover:text-[#328E6E] hover:font-bold hover:border-b-2 border-[#328E6E]">About</Link>
                    <Link href="/contact" className="hover:text-[#328E6E] hover:font-bold hover:border-b-2 border-[#328E6E]">Contact</Link>
                </div>
                <div>
                    <a className="cursor-pointer bg-[#41B3A2] hover:bg-[#328E6E] text-white rounded px-6 py-2">Order Now</a>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar;