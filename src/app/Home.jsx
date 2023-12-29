import Image from "next/image"

const Home = () => {
  return (
    <div className="h-screen bg-[#FFECDD]">
        <div className="h-screen flex justify-center items-center">
              <Image quality={100} alt="profile picture" priority={true} width={2160} height={2160} src="/profile.png" className="w-[30rem] object-fit lg:w-[37rem]" />
        </div>
    </div>
  )
}

export default Home