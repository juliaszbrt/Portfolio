'use client'
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const Skills = () => {
  return (
    <div>
        <div className='h-[3rem] bg-[#a3b9ca] flex items-center'>
            <Marquee>
                <p className="text-[1.5rem] tracking-[6px] text-[#fdf8f4] whitespace-nowrap">
                    &nbsp;Python&nbsp;&nbsp;Java&nbsp;&nbsp;HTML&nbsp;&nbsp;CSS&nbsp;
                    JavaScript&nbsp;&nbsp;Tailwind&nbsp;&nbsp;React&nbsp;&nbsp;Next.js
                    &nbsp;Vercel&nbsp;&nbsp;Figma&nbsp;&nbsp;Canva&nbsp;&nbsp;Procreate
                    &nbsp;Voiceflow&nbsp;&nbsp;GPT&nbsp;
                </p>
            </Marquee>
        </div>
        <div className="relative h-[20rem]">
            <Image fill src="/clouds.jpg" className="object-cover"/>
        </div>
    </div>
  )
}

export default Skills