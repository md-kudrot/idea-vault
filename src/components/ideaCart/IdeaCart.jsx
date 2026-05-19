import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const IdeaCart = ({ idea }) => {
    const { startupName, imageUrl, tags, shortDescription, detailedDescription, _id, username, userEmail, createdAt, userImage } = idea;
    return (
        <>
            <Link
                href={`/ideas/${_id}`}
                className="group  bg-[#002117]/30 backdrop-blur-md rounded-2xl border border-[#3c4a42]/30 hover:border-[#4edea3]/40 p-6 flex flex-col gap-8 justify-between  shadow-lg hover:shadow-[0_8px_30px_rgba(78,222,163,0.06)] hover:scale-[1.01] transition-all duration-300 relative overflow-hidden"
            >
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#4edea3]/3 blur-[30px] rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                {/* Image background with deep elegant gradient overlay */}
                <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-40 transition-opacity duration-700">
                    <Image
                        height={500}
                        width={500}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" alt="Vertical Farming" src={imageUrl} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00170f] via-[#00170f]/50 to-transparent"></div>
                </div>
                <div className="space-y-10 relative z-10">
                    <div className="flex justify-between items-center">
                        <span className="bg-[#4edea3]/10 border border-[#4edea3]/25 px-2.5 py-0.5 rounded-full font-['JetBrains_Mono',monospace] text-md tracking-[0.05em] text-[#4edea3] font-bold uppercase">
                            {tags}
                        </span>
                        <span className="font-['JetBrains_Mono',monospace] text-md text-[#86948a]">
                          {createdAt ? new Date(createdAt).toLocaleDateString() : "Unknown date"}
                        </span>
                    </div>

                    <h3 className="font-['Geist',sans-serif] text-3xl leading-[30px] font-bold text-[#b0f0d6] group-hover:text-[#4edea3] transition-colors duration-300 line-clamp-2">
                        {startupName}
                    </h3>

                    <p className="font-['Geist',sans-serif] text-lg leading-[22px] text-[#bbcabf] line-clamp-3">
                        {detailedDescription}
                    </p>
                </div>
                {/* profile photo and name */}
                <div className="flex items-center gap-3">
                    <Image
                        height={40}
                        width={40}
                        src={userImage || "/placeholder.svg"}
                        alt="Profile"
                        className="w-10 h-10 rounded-full border border-[#4edea3]/20"
                    />
                    <span className="font-['JetBrains_Mono',monospace] text-lg text-[#86948a]">
                        {username || "Anonymous"}
                    </span>
                </div>

                <div className="pt-4 border-t border-[#3c4a42]/20 flex justify-between items-end relative z-10">
                    <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                        {
                             idea.tags.split(' ').map((tag, index) => (
                                <span key={index} className="font-['JetBrains_Mono',monospace] text-md text-[#86948a] border border-[#3c4a42]/30 px-2 py-0.5 rounded">
                                    #{tag.trim()}
                                </span>
                            ))
                        }
                       
                    </div>
                    <Link href={`/ideas/${_id}`} className="flex items-center gap-1 text-[#4edea3]">
                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>View details</span>

                    </Link>
                </div>
            </Link>

        </>
    );
};

export default IdeaCart;