'use client'
import './globals.css'
import Tile from "@/components/Tile";
import projects from "./projects.json";
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";

const Portfolio = () => {

    const [selectedTags, setSelectedTags] = useState(new Set());

    const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

    const toggleTag = (tag) => {
        const updated = new Set(selectedTags);
        if (updated.has(tag)) {
            updated.delete(tag);
        } else {
            updated.add(tag);
        }
        setSelectedTags(updated);
    };

    const filteredProjects = selectedTags.size === 0
    ? projects
    : projects.filter(project =>
        Array.from(selectedTags).every(tag => project.tags.includes(tag))
    );

    const tagColors = {
        "Development": "bg-[#FFDC83]",
        "Design": "bg-[#BFDFF1]",
        "Community": "bg-[#FFD8B9]",
        "UI/UX": "bg-[#b9d193]",
        "Hobby": "bg-[#d6c2ac]",
        "Case Study": "bg-[#FFBB73]",
    };

    const getTagClass = (tag) => {
        const baseColor = tagColors[tag]
        return selectedTags.has(tag)
            ? `${baseColor} border border-[3.5px] border-[#493423]`
            : `border border-dashed border-[#493423] border-[3.5px] bg-transparent`;
    };

    return (
            <div className="h-auto bg-[#fff8f3]">
                <div id="circles" className="w-full">
                    <div className="flex items-center justify-center w-full overflow-x-auto whitespace-nowrap">
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#f9b57d] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#f9b57d] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#f9b57d] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#f9b57d] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#f9b57d] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#f9b57d] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#f9b57d] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#f9b57d] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#f9b57d] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#f9b57d] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#f9b57d] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#f9b57d] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#f9b57d] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#f9b57d] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#f9b57d] rounded-full flex-shrink-0"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-[3rem] lg:pb-[6rem] lg:gap-[4rem]">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{
                            opacity: 1, y: 0
                        }}
                        transition={{
                            type: "spring",
                            duration: 2,
                            bounce: 0,
                        }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-[2rem]"
                    >
                        <h1 className="text-[3rem] text-center tracking-[6px] text-[#493423] font-black lg:text-[6rem] [font-family:var(--font-domine)]">Projects:</h1>
                        <div className="flex flex-wrap justify-center gap-3 lg:gap-5">
                        {allTags.map((tag, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => toggleTag(tag)}
                                    className={`hover:scale-[110%] tracking-[1.5px] transition-all duration-500 px-2 py-1 lg:px-4 lg:py-2 text-[#493423] rounded-full text-[10px] lg:text-[12px] xl:text-[15px] [font-family:var(--font-murecho)] ${getTagClass(tag)}`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                <div className="mb-[3rem] grid lg:grid-cols-3 gap-[2rem] lg:mb-0 lg:gap-[2rem] xl:gap-[4rem]">
                    <AnimatePresence>
                        {filteredProjects.map((proj, idx) => (
                            <motion.div
                                key={proj.title}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                >
                                <Tile
                                    key={idx}
                                    title={proj.title}
                                    link={proj.link}
                                    tags={proj.tags}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>    

                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{
                                opacity: 1, y: 0
                            }}
                            transition={{
                                type: "spring",
                                duration: 2,
                                bounce: 0,
                                delay: 0.5,
                                duration: 0.4
                            }}
                            viewport={{ once: true }}
                            className="col-span-full [font-family:var(--font-murecho)] tracking-[2px] mb-[2rem] text-center text-[14px] px-[10px] lg:text-[18px] text[#493423]">
                            Hmm... maybe you should remove some filters!
                        </motion.div>
                    )}

                </div>
                </div>
            </div>
    )
}

export default Portfolio