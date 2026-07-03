import Image from "next/image"
import Link from "next/link"
import React from "react"

const TrendingIdeaCart = ({ idea }) => {
    const { startupName, imageUrl, tags, shortDescription, detailedDescription, _id } = idea

    return (
        <>
            <div className="bg-[#003123]/10 backdrop-blur-xl border border-[#4edea3]/10 hover:border-[#4edea3]/30 transition-all duration-500 rounded-3xl p-3 md:p-4 lg:p-8 flex flex-col justify-between relative group overflow-hidden h-125 cursor-pointer">
                <div className="flex flex-wrap">
                    {/* Top Content Block */}
                    <div className="relative z-10  ">
                        <div className="flex items-center justify-between flex-wrap">
                            <div className="inline-flex  items-center  gap-2 bg-[#4edea3]/10 backdrop-blur-md border border-[#4edea3]/20 px-3 py-1.5 rounded-full mb-6">
                                {tags
                                    .slice(0, 2)
                                    .split(" ")
                                    .map((tag, index) => (
                                        <span
                                            key={index}
                                            className="font-['JetBrains_Mono',monospace] font-bold text-sm tracking-[0.1em] text-[#4edea3]"
                                        >
                                            #{tag.trim()}
                                        </span>
                                    ))}
                            </div>
                        </div>
                        <h4 className="font-['Geist',sans-serif] text-[3rem] md:text-[2rem] leading-[1.05] tracking-[-0.03em] font-extrabold text-[#b0f0d6] group-hover:text-[#4edea3] transition-colors duration-300">
                            {startupName}
                        </h4>
                        {/* {detailedDescription show only 3 lines} */}
                        <h1 className="line-clamp-2">{detailedDescription}</h1>
                    </div>
                </div>
                {/* Bottom Content Block */}
                <div className="relative z-10 flex flex-wrap justify-between  gap-6 pt-6 border-t border-[#3c4a42]/20">
                    <p className="font-['Geist',sans-serif] text-[15px] leading-[22px] text-[#bbcabf] line-clamp-2">
                        {shortDescription}
                    </p>
                    <button className=" px-2  bg-gradient-to-r from-[#4edea3] to-[#12a970] text-[#003824] font-['JetBrains_Mono',monospace] font-bold   tracking-wider  rounded-xl shadow-[0_0_20px_rgba(78,222,163,0.25)] hover:shadow-[0_0_30px_rgba(78,222,163,0.45)] active:scale-[0.98] transition-all">
                        <Link href={`/ideas/${_id}`}>Details</Link>
                    </button>
                </div>
                {/* Image background with deep elegant gradient overlay */}
                <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-40 transition-opacity duration-700">
                    <Image
                        height={500}
                        width={500}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                        alt="Vertical Farming"
                        src={imageUrl}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00170f] via-[#00170f]/50 to-transparent"></div>
                </div>
            </div>
        </>
    )
}

export default TrendingIdeaCart
