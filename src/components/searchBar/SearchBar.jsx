'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    
    const router = useRouter();
    
    const searchParams = useSearchParams();

    const handleSearch = () => {
     
     
        const params = new URLSearchParams(searchParams.toString());
        if (search) {
            params.set('searchTerm', search);
        } else {
            params.delete('searchTerm');
        }
        router.push(`/ideas?${params.toString()}`);
    };

    const handleCategory = (category) => {
        const params = new URLSearchParams(searchParams.toString());
     
        if (category === 'all') {
     
            params.delete('category');
            params.delete('searchTerm');  
            setSearch('');
        } else {
            params.set('category', category);
        }
        router.push(`/ideas?${params.toString()}`);
    };

    return (
        <>
            <div className='flex items-center'>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Query conceptual assets by title or description..."
                    className="w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/25 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] h-12 pl-11 pr-4 text-base placeholder:text-[#bbcabf]/40 transition-all font-['JetBrains_Mono',monospace]"
                />
                {/* search button  */}
                <button onClick={handleSearch} className="ml-2 bg-[#4edea3] text-[#003824] hover:bg-[#4edea3]/80 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] border border-[#4edea3] py-2 px-4 rounded-xl font-['JetBrains_Mono',monospace] text-lg font-bold uppercase tracking-wider">
                    Search
                </button>
            </div>

            {/* Category Pills */}
            <div className="flex gap-2.5 overflow-x-auto pb-3 mt-4">
                <button onClick={() => handleCategory('all')}
                    className="px-5 py-2 rounded-full font-['JetBrains_Mono',monospace] text-lg font-bold uppercase tracking-wider border cursor-pointer bg-[#4edea3] text-[#003824] border-[#4edea3]">
                    All
                </button>
                <button onClick={() => handleCategory('biotech')}
                    className="px-5 py-2 rounded-full font-['JetBrains_Mono',monospace] text-lg font-bold uppercase tracking-wider border cursor-pointer border-[#4edea3]/20 text-[#bbcabf] bg-[#002117]/30">
                    Biotech
                </button>
                <button onClick={() => handleCategory('ai')}
                    className="px-5 py-2 rounded-full font-['JetBrains_Mono',monospace] text-lg font-bold uppercase tracking-wider border cursor-pointer border-[#4edea3]/20 text-[#bbcabf] bg-[#002117]/30">
                    AI/ML
                </button>
                <button onClick={() => handleCategory('health')}
                    className="px-5 py-2 rounded-full font-['JetBrains_Mono',monospace] text-lg font-bold uppercase tracking-wider border cursor-pointer border-[#4edea3]/20 text-[#bbcabf] bg-[#002117]/30">
                    HealthTech
                </button>
                <button onClick={() => handleCategory('saas')}
                    className="px-5 py-2 rounded-full font-['JetBrains_Mono',monospace] text-lg font-bold uppercase tracking-wider border cursor-pointer border-[#4edea3]/20 text-[#bbcabf] bg-[#002117]/30">
                    SaaS
                </button>
            </div>
        </>
    );
};

export default SearchBar;