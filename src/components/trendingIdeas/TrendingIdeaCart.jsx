import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TrendingIdeaCart = ({ idea }) => {

    const { startupName, imageUrl, tags, shortDescription, detailedDescription, _id } = idea;

    return (
        <div>
            <div className="bg-[#003123]/10 backdrop-blur-xl border border-[#4edea3]/10 hover:border-[#4edea3]/30 transition-all duration-500 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative group overflow-hidden h-[500px]">

                <div className="absolute top-0 right-0 p-8 z-20">
                    {/* Premium Tech SVG Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-[#00170f]/80 backdrop-blur-md border border-[#4edea3]/20 flex items-center justify-center text-[#4edea3] group-hover:border-[#4edea3]/50 transition-all duration-500 shadow-lg">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547Z" />
                        </svg>
                    </div>
                </div>

                {/* Image background with deep elegant gradient overlay */}
                <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-40 transition-opacity duration-700">
                    <Image
                        height={500}
                        width={500}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" alt="Vertical Farming" src={imageUrl} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00170f] via-[#00170f]/50 to-transparent"></div>
                </div>

                {/* Top Content Block */}
                <div className="relative z-10 max-w-lg ">
                    <div className="inline-flex  items-center  gap-2 bg-[#4edea3]/10 backdrop-blur-md border border-[#4edea3]/20 px-3 py-1.5 rounded-full mb-6">
                    
                            {
                                tags.split(' ').map((tag, index) => (
                                    <span key={index} className="font-['JetBrains_Mono',monospace] font-bold text-sm tracking-[0.1em] text-[#4edea3]">
                                        #{tag.trim()}
                                    </span>
                                ))
                            }
                    
                        {/* <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
                        <span className="font-['JetBrains_Mono',monospace] font-bold text-sm tracking-[0.1em] text-[#4edea3]">{tags}</span> */}
                    </div>
                    <h4 className="font-['Geist',sans-serif] text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.03em] font-extrabold text-[#b0f0d6] group-hover:text-[#4edea3] transition-colors duration-300">
                        {startupName}
                    </h4>
                    {/* {detailedDescription show only 3 lines} */}
                    <h1 className='line-clamp-4'>{detailedDescription}</h1>
                </div>

                {/* Bottom Content Block */}
                <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pt-6 border-t border-[#3c4a42]/20">
                    <p className="font-['Geist',sans-serif] text-[15px] leading-[22px] text-[#bbcabf] max-w-sm">
                        {shortDescription}
                    </p>
                    <button className=" px-2 w-[50%] bg-gradient-to-r from-[#4edea3] to-[#12a970] text-[#003824] font-['JetBrains_Mono',monospace] font-bold   tracking-wider  rounded-xl shadow-[0_0_20px_rgba(78,222,163,0.25)] hover:shadow-[0_0_30px_rgba(78,222,163,0.45)] active:scale-[0.98] transition-all">
                        <Link href={`/ideas/${_id}`}>
                            View Idea
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrendingIdeaCart;