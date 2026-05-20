
import Comments from '@/components/comments/Comments';
import Image from 'next/image';
import React from 'react';

const detailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const res = await fetch(`http://localhost:5000/new-idea/${id}`);
    const idea = await res.json();
    // console.log(idea);
    const { startupName, imageUrl, tags, shortDescription, detailedDescription, proposedSolution, _id, targetAudience, estimatedBudget, problemStatement } = idea;

    


    return (
        <div>

            <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-10 pb-32 space-y-10">

                {/* 1. Cover Image */}
                <div className="w-full h-[280px] sm:h-[400px] rounded-3xl overflow-hidden border border-[#3c4a42]/30 shadow-2xl relative">
                    <Image
                        height={400}
                        width={600}
                        src={imageUrl}
                        alt={startupName}   
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00170f] via-transparent to-transparent"></div>
                </div>

                {/* Info Card Container */}
                <div className="space-y-6 bg-[#002117]/30 backdrop-blur-md rounded-3xl border border-[#3c4a42]/30 p-8 shadow-xl">

                    {/* 2. Idea Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-[-0.03em] text-[#b0f0d6]">
                        {startupName}
                    </h1>

                    {/* 3. Subtitle */}
                    <p className="text-lg sm:text-xl md:text-2xl text-[#bbcabf] font-medium leading-relaxed italic border-l-4 border-[#4edea3]/50 pl-5 py-1">
                        {shortDescription}
                    </p>

                    {/* 4. Idea Owner's Avatar, Name, and Creation Date */}
                    <div className="flex items-center gap-4 pt-2 border-t border-[#3c4a42]/20">
                        {/* Avatar */}
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#4edea3] shadow-[0_0_15px_rgba(78,222,163,0.2)]">
                            <Image
                                height={40}
                                width={40}
                                src={idea.userImage || "/placeholder.svg"}
                                alt="Idea Owner Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Name & Date */}
                        <div className="space-y-0.5">
                            <h4 className="text-base sm:text-lg font-bold text-[#4edea3] tracking-tight">
                                {idea.username || "Anonymous"}
                            </h4>
                            <span className="font-['JetBrains_Mono',monospace] text-xs sm:text-sm text-[#86948a] block">
                                {idea.createdAt ? new Date(idea.createdAt).toLocaleDateString() : "Unknown date"}
                            </span>
                        </div>
                    </div>

                    {/* 5. Tags */}
                    <div className="flex flex-wrap gap-2.5 pt-4">
                        {
                            tags.split(" ").map((tag, index) => (
                                <span key={index} className="font-['JetBrains_Mono',monospace] text-xs sm:text-sm text-[#4edea3] border border-[#4edea3]/30 bg-[#4edea3]/5 px-3.5 py-1.5 rounded-full font-semibold">
                                    #{tag.trim()}
                                </span>
                            ))
                        }
                     
                       
                    </div>
                </div>

                {/* 6. Target Audience & 7. Budget scope */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Target Audience */}
                    <div className="bg-[#002117]/30 border border-[#3c4a42]/30 rounded-2xl p-6 space-y-2 shadow-lg">
                        <span className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-xs sm:text-sm font-bold uppercase tracking-[0.1em]">Target Audience</span>
                        <p className="text-[#b0f0d6] text-base sm:text-lg font-bold leading-snug">
                            {targetAudience}
                        </p>
                    </div>
                    {/* Budget */}
                    <div className="bg-[#002117]/30 border border-[#3c4a42]/30 rounded-2xl p-6 space-y-2 shadow-lg">
                        <span className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-xs sm:text-sm font-bold uppercase tracking-[0.1em]">Estimated Budget Scope</span>
                        <p className="text-[#b0f0d6] text-base sm:text-lg font-bold leading-snug">
                            {estimatedBudget}
                        </p>
                    </div>
                </div>

                {/* Deep-Dive Specifications Container */}
                <div className="space-y-8 bg-[#002117]/30 border border-[#3c4a42]/30 rounded-3xl p-8 sm:p-10 shadow-xl">

                    {/* 8. Problem Statement */}
                    <div className="space-y-2.5">
                        <h3 className="font-['Geist',sans-serif] text-xl sm:text-2xl font-bold flex items-center gap-2 text-[#ffb3af] border-b border-[#3c4a42]/20 pb-2">
                            <span className="material-symbols-outlined">warning</span>
                            Problem Statement
                        </h3>
                        <p className="text-[#bbcabf] text-base sm:text-lg leading-[26px]">
                            {problemStatement}
                        </p>
                    </div>

                    {/* 9. Problem Solution */}
                    <div className="space-y-2.5">
                        <h3 className="font-['Geist',sans-serif] text-xl sm:text-2xl font-bold flex items-center gap-2 text-[#4edea3] border-b border-[#3c4a42]/20 pb-2">
                            <span className="material-symbols-outlined">psychology</span>
                            Problem Solution
                        </h3>
                        <p className="text-[#bbcabf] text-base sm:text-lg leading-[26px]">
                            {proposedSolution}
                        </p>
                    </div>

                </div>

                {/* 11. Comments Section (Input Field, Post Button, & List) */}
                <div className="space-y-8 bg-[#002117]/30 border border-[#3c4a42]/30 rounded-3xl p-8 sm:p-10 shadow-xl">
                    <h3 className="font-['Geist',sans-serif] text-xl sm:text-2xl font-bold flex items-center gap-2 border-b border-[#3c4a42]/20 pb-3 text-[#b0f0d6]">
                        Comments
                    </h3>

                    <Comments id={id} idea={idea} startupName={startupName}></Comments>


                </div>
            </main>
        </div>
    );
};

export default detailsPage;