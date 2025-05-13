import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <section>
        <div className="container mx-auto">
          <div className="row text-center">
            <div className="upperText w-">
              <h1 className="font-bold mb-2 mt-5 text-[25px] 2xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[25px]">Abdullah Azzam Nasir</h1>
              <h2 className="designation font-bold text-[20px] 2xl:text-[40px] lg:text-[30px] md:text-[25px] sm:text-[20px] mb-5">
                  Frontend Developer
              </h2>
            </div>
            <div className="max-w-[94%] linktrees flex gap-4 flex-col 2xl:max-w-[580px] xl:max-w-[580px] lg:max-w-[580px] md:max-w-[580px] sm:max-w-[580px] mx-auto">
              <Link href="#!">
                  <div className="flex items-center bg-[#222222] rounded p-[8px] hover:scale-[1.02]">
                      <div className="size-[48px] grow-0">
                          <div className="logo flex items-center h-full">
                              <Image className="w-[40px] 2xl:w-[48px] xl:w-[48px] lg:w-[48px] md:w-[48px] sm:w-[40px]" src="/brand-youtube.svg" alt="logo" width={48} height={48}/>
                          </div>
                      </div>
                       <div className="grow">
                          <div className="text-center text-[16px] font-bold">
                            Youtube Channel
                          </div>
                      </div>
                      <div className="size-[48px] grow-0 flex justify-end items-center">
                          <div className="size-[24px] icon hover:bg-[#ffffff1a] rounded-[50px] flex items-center">
                            <Image className="w-full h-[12px]" src="/dots.svg" alt="logo" width={3} height={12}/>
                          </div>
                      </div>
                  </div>
              </Link>

              <Link href="#!">
                  <div className="flex items-center bg-[#222222] rounded p-[8px] hover:scale-[1.02]">
                      <div className="size-[48px] grow-0">
                          <div className="logo flex items-center h-full">
                              <Image className="w-[40px] 2xl:w-[48px] xl:w-[48px] lg:w-[48px] md:w-[48px] sm:w-[40px]" src="/brand-github.svg" alt="logo" width={48} height={48}/>
                          </div>
                      </div>
                       <div className="grow">
                          <div className="text-center text-[16px] font-bold">
                            Github
                          </div>
                      </div>
                       <div className="size-[48px] grow-0 flex justify-end items-center">
                          <div className="size-[24px] icon hover:bg-[#ffffff1a] rounded-[50px] flex items-center">
                            <Image className="w-full h-[12px]" src="/dots.svg" alt="logo" width={3} height={12}/>
                          </div>
                      </div>
                  </div>
              </Link>

              <Link href="#!">
                  <div className="flex items-center bg-[#222222] rounded p-[8px] hover:scale-[1.02]">
                      <div className="size-[48px] grow-0">
                          <div className="logo flex items-center h-full">
                              <Image className="w-[40px] 2xl:w-[48px] xl:w-[48px] lg:w-[48px] md:w-[48px] sm:w-[40px]" src="/brand-linkedin.svg" alt="logo" width={48} height={48}/>
                          </div>
                      </div>
                       <div className="grow">
                          <div className="text-center text-[16px] font-bold">
                            Linkedin
                          </div>
                      </div>
                      <div className="size-[48px] grow-0 flex justify-end items-center">
                          <div className="size-[24px] icon hover:bg-[#ffffff1a] rounded-[50px] flex items-center">
                            <Image className="w-full h-[12px]" src="/dots.svg" alt="logo" width={3} height={12}/>
                          </div>
                      </div>
                  </div>
              </Link>

              <Link href="#!">
                  <div className="flex items-center bg-[#222222] rounded p-[8px] hover:scale-[1.02]">
                      <div className="size-[48px] grow-0">
                          <div className="logo flex items-center h-full">
                              <Image className="w-[40px] 2xl:w-[48px] xl:w-[48px] lg:w-[48px] md:w-[48px] sm:w-[40px]" src="/brand-facebook.svg" alt="logo" width={48} height={48}/>
                          </div>
                      </div>
                       <div className="grow">
                          <div className="text-center text-[16px] font-bold">
                            Facebook
                          </div>
                      </div>
                       <div className="size-[48px] grow-0 flex justify-end items-center">
                          <div className="size-[24px] icon hover:bg-[#ffffff1a] rounded-[50px] flex items-center">
                            <Image className="w-full h-[12px]" src="/dots.svg" alt="logo" width={3} height={12}/>
                          </div>
                      </div>
                  </div>
              </Link>

              <Link href="#!">
                  <div className="flex items-center bg-[#222222] rounded p-[8px] hover:scale-[1.02]">
                      <div className="size-[48px] grow-0">
                          <div className="logo flex items-center h-full">
                              <Image className="w-[40px] 2xl:w-[48px] xl:w-[48px] lg:w-[48px] md:w-[48px] sm:w-[40px]" src="/brand-twitter.svg" alt="logo" width={48} height={48}/>
                          </div>
                      </div>
                       <div className="grow">
                          <div className="text-center text-[16px] font-bold">
                            Twitter
                          </div>
                      </div>
                       <div className="size-[48px] grow-0 flex justify-end items-center">
                          <div className="size-[24px] icon hover:bg-[#ffffff1a] rounded-[50px] flex items-center">
                            <Image className="w-full h-[12px]" src="/dots.svg" alt="logo" width={3} height={12}/>
                          </div>
                      </div>
                  </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
}
