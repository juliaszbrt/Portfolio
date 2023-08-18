import Image from "next/image"

const Home = () => {
  return (
    <div className="h-screen bg-[#FFECDD]">
        {/* <nav className="h-[5rem] lg:h-[7rem] flex justify-end items-center">
            <p id="contact" className="mr-[3rem] tracking-[3px] text-[1.3rem] text-[#3C1D06] cursor-pointer hover:underline duration-500 ease-in-out decoration-[#FACE5D] underline-offset-[-8px] decoration-[15px]">&nbsp;contact.</p>
        </nav> */}
        <div className="h-screen flex justify-center items-center">
            <Image unoptimized width={2160} height={2160} src="/profile.png" className="w-[30rem] object-fit lg:w-[40rem]" />
        </div>
    </div>
  )
}

export default Home