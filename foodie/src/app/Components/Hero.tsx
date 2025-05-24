import Image from "next/image";
import heroBanner from '../../../public/heroBanner.png'
import './Hero.css'
import localfont from 'next/font/local'

const PoppinsBold = localfont({
    src: "../../../public/Fonts/Poppins-Bold.ttf"
})

function Hero(){
    return(
        <>
            <section className="h-[600px]">
                <div className="heroSection h-full">
                    <div className="herobanner h-full relative">
                        {/* <Image src={heroBanner} alt="Hero Section"></Image> */}
                        <div className={`${PoppinsBold.className} bannercontent absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center`}>
                            <h1 className="text-[50px] font-bold text-[#328e6e]">Welcome to FoodsJinn</h1>
                            <h4 className="text-[25px] font-bold text-[#328E6D]">Where Every Bite Feels Like Home</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;