import IdeaCart from '@/components/ideaCart/IdeaCart';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = async () => {


    const res = await fetch('http://localhost:5000/new-idea');
    const allIdeas = await res.json();

    console.log(allIdeas);

    return (
        <div>
            <main className=" mx-auto  px-6 py-8 pb-32 space-y-8">
                {/* Intro Title & Stats */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#4edea3]/10 pb-6">
                    <div>
                        <h1 className="text-[#b0f0d6] text-4xl md:text-5xl font-extrabold tracking-[-0.03em]">Idea Explorer</h1>
                        <p className="text-[#bbcabf] text-base mt-1">Review, validate, and collaborate on highly protected conceptual assets.</p>
                    </div>
                    <div className="text-left md:text-right font-['JetBrains_Mono',monospace] text-md text-[#bbcabf]/75 space-y-1">
                        <div>ACTIVE_VAULTS: <span className="text-[#4edea3]">3</span></div>
                        <div>SEARCH_MATCHES: <span className="text-[#4edea3]">3</span></div>
                    </div>
                </div>

                {/* Filter & Search Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center bg-[#002117]/40 backdrop-blur-md border border-[#3c4a42]/30 rounded-2xl p-6">
                    {/* Search Field */}
                    <div className="lg:col-span-2 relative">

                        <input
                            type="text"
                            placeholder="Query conceptual assets by title or description..."
                            className="w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/25 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] h-12 pl-11 pr-4 text-base placeholder:text-[#bbcabf]/40 transition-all font-['JetBrains_Mono',monospace]"
                        />
                    </div>

                    {/* Sorting selector */}
                    <div className="relative">

                        <select
                            className="w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/25 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] h-12 pl-11 pr-4 text-base appearance-none transition-all font-['JetBrains_Mono',monospace] cursor-pointer"
                        >
                            <option value="popularity" className="bg-[#00170f]">SORT_BY: POPULARITY</option>
                            <option value="recency" className="bg-[#00170f]">SORT_BY: RECENCY</option>
                        </select>
                    </div>
                </div>

                {/* Category Pills (Horizontal Scrollable) */}
                <div className="flex gap-2.5 overflow-x-auto pb-3 custom-scrollbar">
                    <button className="px-5 py-2 rounded-full font-['JetBrains_Mono',monospace] text-lg font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer bg-[#4edea3] text-[#003824] border-[#4edea3] shadow-[0_0_12px_rgba(78,222,163,0.3)]">
                        All
                    </button>
                    <button className="px-5 py-2 rounded-full font-['JetBrains_Mono',monospace] text-lg font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer border-[#4edea3]/20 text-[#bbcabf] hover:text-[#4edea3] hover:border-[#4edea3]/40 bg-[#002117]/30">
                        Agri-Tech
                    </button>
                    <button className="px-5 py-2 rounded-full font-['JetBrains_Mono',monospace] text-lg font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer border-[#4edea3]/20 text-[#bbcabf] hover:text-[#4edea3] hover:border-[#4edea3]/40 bg-[#002117]/30">
                        AI/ML
                    </button>
                    <button className="px-5 py-2 rounded-full font-['JetBrains_Mono',monospace] text-lg font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer border-[#4edea3]/20 text-[#bbcabf] hover:text-[#4edea3] hover:border-[#4edea3]/40 bg-[#002117]/30">
                        HealthTech
                    </button>
                    <button className="px-5 py-2 rounded-full font-['JetBrains_Mono',monospace] text-lg font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer border-[#4edea3]/20 text-[#bbcabf] hover:text-[#4edea3] hover:border-[#4edea3]/40 bg-[#002117]/30">
                        Sustainability
                    </button>
                    <button className="px-5 py-2 rounded-full font-['JetBrains_Mono',monospace] text-lg font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer border-[#4edea3]/20 text-[#bbcabf] hover:text-[#4edea3] hover:border-[#4edea3]/40 bg-[#002117]/30">
                        SaaS
                    </button>
                </div>

                {/* Ideas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  


                  {
                    allIdeas.map(idea => <IdeaCart key={idea._id} idea={idea} />)
                  }


                </div>
            </main>
        </div>
    );
};

export default page;