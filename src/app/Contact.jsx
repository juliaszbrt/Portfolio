import Image from "next/image"

const Contact = () => {
  return (
    <div className="h-[35rem] bg-[#FFECDD] flex justify-center items-center">
        <div className="flex flex-col gap-[1rem]">
            <div className="mt-[-1rem]">
                <Image width={2835} height={2835} src="/connect.png" className="w-[20rem] h-[20rem]" />
            </div>
            <div className="flex gap-[1.5rem] justify-center">
                <a target="_blank" href="https://www.linkedin.com/in/juliaszubert/"><Image width={2048} height={2048} src='/linkedin.png' className="w-[3.5rem] h-[3.5rem]" /></a>
                <a target="_blank" href="https://github.com/juliaszbrt"><Image width={2048} height={2048} src='/github.png' className="w-[3.5rem] h-[3.5rem]" /></a>
                <a target="_blank" href="https://www.instagram.com/juliaszbrt/"><Image width={2048} height={2048} src='/instagram.png' className="w-[3.5rem] h-[3.5rem]" /></a>
            </div>
        </div>
    </div>
  )
}

export default Contact