import Image from 'next/image';
import React from 'react';

const detailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const res = await fetch(`http://localhost:5000/new-idea/${id}`);
    const idea = await res.json();
    console.log(idea);
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
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlP9awPDAUhpGtdpWHA7j6Z6hkYxksYwDjl-96Q0hcted_L_ifjK1ZjaZ2i3IQQrUmYhNwZrEK6ExeESBt1cz0ugTe8wWpTO1vTi24SpCCdcW0yjLYirVeWLlLR6PhyA5m447aq_xECypfjNqwFy9btc71n9_smUZGifpNByOQUOOr43SW2YEHfezDxAuZ8iuKOuIe_onGME8VSIzielpMfaRenPPyEajzwOpNfKrMPYww1x57VX9Z62NFXzU7srikfFFjuNTFRFc"
                                alt="Idea Owner Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Name & Date */}
                        <div className="space-y-0.5">
                            <h4 className="text-base sm:text-lg font-bold text-[#4edea3] tracking-tight">
                                Dr. Evelyn Sterling
                            </h4>
                            <span className="font-['JetBrains_Mono',monospace] text-xs sm:text-sm text-[#86948a] block">
                                CREATED_ON // MAY 18, 2026
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

                    {/* 10. Proposed Solution */}
                    {/* <div className="space-y-2.5">
                        <h3 className="font-['Geist',sans-serif] text-xl sm:text-2xl font-bold flex items-center gap-2 text-[#4edea3] border-b border-[#3c4a42]/20 pb-2">
                            <span className="material-symbols-outlined">architecture</span>
                            Proposed Solution
                        </h3>
                        <p className="text-[#bbcabf] text-base sm:text-lg leading-[26px]">
                            The proposed neural-synchronization hub deploys flexible bio-sensor mesh arrays wrapped directly around crops. These arrays stream continuous electrochemical data into our AI core, dynamically tuning automated valves to deliver micro-doses of precise mineral formulations with absolute zero waste.
                        </p>
                    </div> */}
                </div>

                {/* 11. Comments Section (Input Field, Post Button, & List) */}
                <div className="space-y-8 bg-[#002117]/30 border border-[#3c4a42]/30 rounded-3xl p-8 sm:p-10 shadow-xl">
                    <h3 className="font-['Geist',sans-serif] text-xl sm:text-2xl font-bold flex items-center gap-2 border-b border-[#3c4a42]/20 pb-3 text-[#b0f0d6]">
                        Comments
                    </h3>

                    {/* Comment Input Field & Post Comment Button */}
                    <form className="space-y-4">

                        <div className="space-y-4">

                            <input
                                placeholder="Write your comment here..."
                                className="form-textarea w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/25 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] p-4 text-base placeholder:text-[#bbcabf]/30 transition-all"
                            />
                            <button
                                type="button"
                                className="w-full bg-gradient-to-r from-[#4edea3] to-[#12a970] text-[#003824] font-['JetBrains_Mono',monospace] font-bold text-sm uppercase tracking-wider h-14 rounded-xl shadow-[0_0_15px_rgba(78,222,163,0.25)] hover:shadow-[0_0_25px_rgba(78,222,163,0.4)] active:scale-95 transition-all cursor-pointer flex items-center justify-center"
                            >
                                Post Comment
                            </button>
                        </div>
                    </form>

                    {/* Posted Comment with Owner Avatar, Name, Date, and Content */}
                    <div className="border-t border-[#3c4a42]/20 pt-8 space-y-4">
                        <span className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-xs sm:text-sm font-bold uppercase tracking-[0.1em] block">
                            Recent Handshakes
                        </span>

                        <div className="bg-[#003123]/15 border border-[#3c4a42]/25 rounded-2xl p-6 space-y-3">
                            <div className="flex items-center gap-3.5">
                                {/* Comment Owner Avatar */}
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#4edea3] shadow-[0_0_10px_rgba(78,222,163,0.15)]">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlP9awPDAUhpGtdpWHA7j6Z6hkYxksYwDjl-96Q0hcted_L_ifjK1ZjaZ2i3IQQrUmYhNwZrEK6ExeESBt1cz0ugTe8wWpTO1vTi24SpCCdcW0yjLYirVeWLlLR6PhyA5m447aq_xECypfjNqwFy9btc71n9_smUZGifpNByOQUOOr43SW2YEHfezDxAuZ8iuKOuIe_onGME8VSIzielpMfaRenPPyEajzwOpNfKrMPYww1x57VX9Z62NFXzU7srikfFFjuNTFRFc"
                                        alt="Comment Owner Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Comment Owner Name & Date */}
                                <div className="space-y-0.5">
                                    <h4 className="font-['JetBrains_Mono',monospace] text-sm sm:text-base font-extrabold text-[#4edea3]">
                                        Marcus Vance
                                    </h4>
                                    <span className="font-['JetBrains_Mono',monospace] text-xs text-[#86948a]">
                                        APPENDED // 2 HOURS AGO
                                    </span>
                                </div>
                            </div>

                            {/* Comment Content */}
                            <p className="font-['Geist',sans-serif] text-base sm:text-lg text-[#bbcabf] italic pl-1 leading-relaxed">
                                "The biological feedback mechanics are extremely sound. Have you performed pressure stress testing on the sensor wrapper sleeves under standard subterranean temperature anomalies?"
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default detailsPage;