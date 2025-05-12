import Link from "next/link";

const Tile = ({ title, tags, link = [] }) => {

    const tagColors = {
        "Development": "bg-[#FFDC83]",
        "Design": "bg-[#BFDFF1]",
        "Community": "bg-[#FFD8B9]",
        "UI/UX": "bg-[#b9d193]",
        "Hobby": "bg-[#d6c2ac]",
        "Case Study": "bg-[#FFBB73]",
    };

    const getTagClass = (tag) => tagColors[tag];

    return (
            <Link href={link}>
                <div className="hover:scale-[110%] transition-all duration-500 text-[#493423] flex flex-col gap-[1rem] justify-center items-left px-[2rem] border-[3px] rounded-[20px] border-[#493423] h-[15rem] w-[15rem] lg:h-[17rem] lg:w-[17rem] xl:h-[20rem] xl:w-[20rem]">
                    <h2 className="text-[2rem] lg:text-[2.3rem] xl:text-[2.9rem] font-extrabold leading-[2.5rem] lg:leading-[3rem] xl:leading-[3.5rem] [font-family:var(--font-murecho)]">{title}</h2>
                    <div className="flex gap-2 flex-wrap mt-2">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className={`px-2 py-1 rounded-full tracking-[1.5px] text-[10px] lg:text-[12px] xl:text-[15px] [font-family:var(--font-murecho)] ${getTagClass(tag)}`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
    );
};

export default Tile;