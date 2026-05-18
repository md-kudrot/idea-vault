import Image from 'next/image';
import React from 'react';

const TrendingIdea = () => {
    return (
        <div className="w-full px-[40px] py-16 bg-[#00170f] relative overflow-hidden">
            {/* Background decorative glows */}
            <div className="absolute top-1/4 right-0  h-[500px] bg-[#4edea3]/5 blur-[150px] rounded-full -z-10"></div>
            <div className="absolute bottom-1/4 -left-10  h-[400px] bg-[#003d2d]/10 blur-[130px] rounded-full -z-10"></div>

            <section className="">
                {/* Header Section */}
                <div className="flex flex-wrap gap-2 justify-between items-center mb-12">
                    <div className="space-y-1">
                        <span className="font-['JetBrains_Mono',monospace] text-[10px] tracking-[0.2em] text-[#4edea3] font-semibold uppercase">INTELLIGENCE HUB</span>
                        <h3 className="font-['Geist',sans-serif] text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.03em] font-bold text-[#b0f0d6]">
                            Trending_<span className="text-[#4edea3] italic font-normal">Intelligence</span>
                        </h3>
                    </div>
                    <div className="flex items-center gap-2 bg-[#002619] border border-[#4edea3]/20 px-3.5 py-1.5 rounded-full">
                        <span className="font-['JetBrains_Mono',monospace] text-xl  tracking-[0.08em] cursor-pointer font-bold text-[#4edea3]">View All</span>
                    </div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid  lg:grid-cols-3 grid-cols-1 gap-6">


                    <div className="bg-[#003123]/10 backdrop-blur-xl border border-[#4edea3]/10 hover:border-[#4edea3]/30 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-500 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative group overflow-hidden h-[500px]">
                        {/* Interactive overlay card highlight */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#4edea3]/0 via-[#4edea3]/0 to-[#4edea3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

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
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" alt="Vertical Farming" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPMGIeNh6-hSwB2_aZf_FoCQ2DcHe9BU61HFuk6jWJTkA1MORICHb4eI3Uo6Diijzl12comxyIMI9kCvKuKOxC-CRLZHXFtN8MnzLC2qM4q_Fq0zkdJvYYOdhfclwBzvvIAfBd_gqTtWeTQ6NLRz5benUBmBl5qhL1jHhnz6tNTaf1BnMVY6aBiBCeJnCVX6DEN9MNLi1-RNu1OGxGzlR0lljz174fG1a51FLQ8j2e8PNUL-66sthblT39wPWhWeDZGbn-bEnFt3g" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#00170f] via-[#00170f]/50 to-transparent"></div>
                        </div>

                        {/* Top Content Block */}
                        <div className="relative z-10 max-w-lg ">
                            <div className="inline-flex items-center  gap-2 bg-[#4edea3]/10 backdrop-blur-md border border-[#4edea3]/20 px-3 py-1.5 rounded-full mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
                                <span className="font-['JetBrains_Mono',monospace] font-bold text-[9px] tracking-[0.1em] text-[#4edea3]">AGRI-TECH // SECTION_001</span>
                            </div>
                            <h4 className="font-['Geist',sans-serif] text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.03em] font-extrabold text-[#b0f0d6] group-hover:text-[#4edea3] transition-colors duration-300">
                                AI-Driven Vertical Farming Neural-Sync
                            </h4>
                        </div>

                        {/* Bottom Content Block */}
                        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pt-6 border-t border-[#3c4a42]/20">
                            <p className="font-['Geist',sans-serif] text-[15px] leading-[22px] text-[#bbcabf] max-w-sm">
                                Autonomous nutrient delivery systems mapped to real-time neural growth patterns and predictive root intelligence.
                            </p>
                            <button className="w-14 h-14 rounded-full bg-[#4edea3] text-[#003824] flex items-center justify-center hover:scale-110 active:scale-95 hover:rotate-45 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(78,222,163,0.3)] shrink-0 self-end">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </button>
                        </div>
                    </div>

       

                </div>
            </section>
        </div>
    );
};

export default TrendingIdea;