import IdeaCart from '@/components/ideaCart/IdeaCart';
import SearchBar from '@/components/searchBar/SearchBar';
import React from 'react';

export const metadata = { title: 'IdeaVault - Ideas' }

const page = async ({ searchParams }) => {
    const sParams = await searchParams;

    const searchTerm = sParams?.searchTerm || '';
    
    const category = sParams?.category || '';

    const url = `http://localhost:5000/new-idea?search=${searchTerm}&category=${category}`;

    const res = await fetch(url, { cache: 'no-store' });
    const allIdeas = await res.json();

    return (
        <div>
            <main className=" mx-auto  px-6 py-8 pb-32 space-y-8">
                {/* Intro Title & Stats */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#4edea3]/10 pb-6">
                    <div>
                        <h1 className="text-[#b0f0d6] text-4xl md:text-5xl font-extrabold tracking-[-0.03em]">Idea Explorer</h1>
                        <p className="text-[#bbcabf] text-base mt-1">Review, validate, and collaborate on highly protected conceptual assets.</p>
                    </div>

                </div>

                {/* Filter & Search Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center bg-[#002117]/40 backdrop-blur-md border border-[#3c4a42]/30 rounded-2xl p-6">
                    {/* Search Field — SearchBar component */}
                    <div className="lg:col-span-2 relative">
                        <SearchBar />
                    </div>

                    {/* Sorting selector */}
                    {/* <div className="relative">
                        <select
                            className="w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/25 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] h-12 pl-11 pr-4 text-base appearance-none transition-all font-['JetBrains_Mono',monospace] cursor-pointer"
                        >
                            <option value="popularity" className="bg-[#00170f]">SORT_BY: POPULARITY</option>
                            <option value="recency" className="bg-[#00170f]">SORT_BY: RECENCY</option>
                        </select>
                    </div> */}
                </div>

            

                {/* Ideas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allIdeas.length > 0
                        ? allIdeas.map(idea => <IdeaCart key={idea._id} idea={idea} />)
                        : <p className="text-[#bbcabf] col-span-3 text-center">No ideas found.</p>
                    }
                </div>
            </main>
        </div>
    );
};

export default page;