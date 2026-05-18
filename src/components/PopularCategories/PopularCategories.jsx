import Link from 'next/link';
import React from 'react';

const PopularCategories = () => {
    return (
        <div className="w-full px-[40px] py-12 bg-[#00170f] relative overflow-hidden">
            {/* Background Decorative Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3c4a42/5_1px,transparent_1px),linear-gradient(to_bottom,#3c4a42/5_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20"></div>

            <section className="mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-12">
                   
                    <h2 className="font-['Geist',sans-serif] text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.03em] font-bold text-[#b0f0d6]">
                        Categories_<span className="text-[#4edea3] italic font-normal">toExplore</span>
                    </h2>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                    {/* Category 1: Tech */}
                    <Link className="bg-[#003123]/10 backdrop-blur-xl border border-[#4edea3]/10 hover:border-[#4edea3]/40 hover:scale-[1.03] shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_32px_rgba(78,222,163,0.15)] rounded-2xl p-8 flex flex-col items-center text-center gap-4 group transition-all duration-300" href="#">
                        {/* Custom animated node SVG */}
                        <div className="w-16 h-16 rounded-2xl bg-[#00170f] border border-[#4edea3]/20 flex items-center justify-center text-[#4edea3] group-hover:border-[#4edea3]/50 group-hover:shadow-[0_0_15px_rgba(78,222,163,0.2)] transition-all duration-300">
                            <svg className="w-8 h-8 group-hover:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M12 18.75V21m-8.25-9.75h1.5m1.875-5.25a2.25 2.25 0 0 0-2.25 2.25v6a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-6a2.25 2.25 0 0 0-2.25-2.25h-9ZM6 9.75v6h12v-6H6Z" />
                                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                            </svg>
                        </div>

                        <div className="space-y-1">
                            <span className="text-[20px] font-extrabold text-[#b0f0d6] group-hover:text-[#4edea3] transition-colors duration-300">Tech Mainframe</span>
                        </div>
                    </Link>

                    {/* Category 2: Health */}
                    <Link className="bg-[#003123]/10 backdrop-blur-xl border border-[#4edea3]/10 hover:border-[#4edea3]/40 hover:scale-[1.03] shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_32px_rgba(78,222,163,0.15)] rounded-2xl p-8 flex flex-col items-center text-center gap-4 group transition-all duration-300" href="#">
                        {/* Bio / Medical Genetics SVG */}
                        <div className="w-16 h-16 rounded-2xl bg-[#00170f] border border-[#4edea3]/20 flex items-center justify-center text-[#4edea3] group-hover:border-[#4edea3]/50 group-hover:shadow-[0_0_15px_rgba(78,222,163,0.2)] transition-all duration-300">
                            <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>

                        <div className="space-y-1">
                            <span className="text-[20px] font-extrabold text-[#b0f0d6] group-hover:text-[#4edea3] transition-colors duration-300">Bio Genetics</span>
                        </div>
                    </Link>

                    {/* Category 3: AI */}
                    <Link className="bg-[#003123]/10 backdrop-blur-xl border border-[#4edea3]/10 hover:border-[#4edea3]/40 hover:scale-[1.03] shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_32px_rgba(78,222,163,0.15)] rounded-2xl p-8 flex flex-col items-center text-center gap-4 group transition-all duration-300" href="#">
                        {/* Cognitive Neural Networks SVG */}
                        <div className="w-16 h-16 rounded-2xl bg-[#00170f] border border-[#4edea3]/20 flex items-center justify-center text-[#4edea3] group-hover:border-[#4edea3]/50 group-hover:shadow-[0_0_15px_rgba(78,222,163,0.2)] transition-all duration-300">
                            <svg className="w-8 h-8 group-hover:rotate-6 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94-3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                        </div>

                        <div className="space-y-1">
                            
                            <span className="text-[20px] font-extrabold text-[#b0f0d6] group-hover:text-[#4edea3] transition-colors duration-300">Neural Sync AI</span>
                        </div>
                    </Link>

                    {/* Category 4: Sustain */}
                    <Link className="bg-[#003123]/10 backdrop-blur-xl border border-[#4edea3]/10 hover:border-[#4edea3]/40 hover:scale-[1.03] shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_32px_rgba(78,222,163,0.15)] rounded-2xl p-8 flex flex-col items-center text-center gap-4 group transition-all duration-300" href="#">
                        {/* Ecological Kinetic SVG */}
                        <div className="w-16 h-16 rounded-2xl bg-[#00170f] border border-[#4edea3]/20 flex items-center justify-center text-[#4edea3] group-hover:border-[#4edea3]/50 group-hover:shadow-[0_0_15px_rgba(78,222,163,0.2)] transition-all duration-300">
                            <svg className="w-8 h-8 group-hover:animate-pulse transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m12-6l-3-3m0 0l-3 3m3-3v18" />
                            </svg>
                        </div>

                        <div className="space-y-1">
                         
                            <span className="text-[20px] font-extrabold text-[#b0f0d6] group-hover:text-[#4edea3] transition-colors duration-300">Eco Kinetics</span>
                        </div>
                    </Link>

                </div>
            </section>
        </div>
    );
};

export default PopularCategories;