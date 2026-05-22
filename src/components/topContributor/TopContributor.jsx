import Image from 'next/image';
import React from 'react';

const TopContributor = () => {
    return (<div className="w-full px-[40px] py-16 bg-[#00170f] relative overflow-hidden">
        {/* Grid background lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3c4a42/5_1px,transparent_1px),linear-gradient(to_bottom,#3c4a42/5_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20"></div>

        <section className=" mx-auto relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                <div>
                    <h2 className="font-['Geist',sans-serif] text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.03em] font-bold text-[#b0f0d6]">
                        Top_<span className="text-[#4edea3] italic font-normal">Contributors</span>
                    </h2>
                </div>
                <p className="font-['Geist',sans-serif] text-[14px] text-[#bbcabf] max-w-[320px]">
                    The intellectual visionaries and high-performers driving deep-tech innovation forward.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                {/* Contributor 1: Sarah Chen */}
                <div className="bg-[#003123]/10 backdrop-blur-xl border border-[#4edea3]/10 hover:border-[#4edea3]/40 hover:scale-[1.03] shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_32px_rgba(78,222,163,0.15)] rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 relative group">
                    <div className="relative">
                        <Image
                            height={64}
                            width={64}
                            src="https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Sarah Chen"
                            initials="SC"
                            className="w-16 h-16 rounded-full border border-[#4edea3]/20 shadow-[0_0_10px_rgba(78,222,163,0.2)]"
                        />
                        {/* Verified Badge */}
                        <div className="absolute -bottom-1 -right-1 bg-[#4edea3] text-[#003824] rounded-full p-1 border-2 border-[#00170f] shadow-[0_0_8px_rgba(78,222,163,0.5)]">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-['Geist',sans-serif] text-xl font-extrabold text-[#b0f0d6] group-hover:text-[#4edea3] transition-colors duration-300">Sarah Chen</h4>
                        <p className="font-['JetBrains_Mono',monospace] text-[0.7rem] tracking-[0.05em] text-[#4edea3] uppercase font-bold mt-1">AI Strategist</p>
                    </div>
                    <div className="mt-2 py-1.5 px-4 bg-[#00170f] rounded-full border border-[#4edea3]/20 flex items-center justify-center gap-1.5 group-hover:border-[#4edea3]/40 transition-colors duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
                        <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#bbcabf] font-semibold">
                            <strong className="text-[#b0f0d6]">42</strong> Ideas Seeded
                        </span>
                    </div>
                </div>

                {/* Contributor 2: Marcus Thorne */}
                <div className="bg-[#003123]/10 backdrop-blur-xl border border-[#4edea3]/10 hover:border-[#4edea3]/40 hover:scale-[1.03] shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_32px_rgba(78,222,163,0.15)] rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 relative group">
                    <div className="relative">
                        <Image
                            height={64}
                            width={64}
                            src="https://images.unsplash.com/photo-1681890442554-9256eaaa3e67?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Marcus Thorne"
                            initials="MT"
                            className="w-16 h-16 rounded-full border border-[#4edea3]/20 shadow-[0_0_10px_rgba(78,222,163,0.2)]"
                        />
                    </div>
                    <div>
                        <h4 className="font-['Geist',sans-serif] text-xl font-extrabold text-[#b0f0d6] group-hover:text-[#4edea3] transition-colors duration-300">Marcus Thorne</h4>
                        <p className="font-['JetBrains_Mono',monospace] text-[0.7rem] tracking-[0.05em] text-[#4edea3] uppercase font-bold mt-1">Sustainability Lead</p>
                    </div>
                    <div className="mt-2 py-1.5 px-4 bg-[#00170f] rounded-full border border-[#4edea3]/20 flex items-center justify-center gap-1.5 group-hover:border-[#4edea3]/40 transition-colors duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
                        <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#bbcabf] font-semibold">
                            <strong className="text-[#b0f0d6]">890</strong> Impact Score
                        </span>
                    </div>
                </div>

                {/* Contributor 3: Elena Rodriguez */}
                <div className="bg-[#003123]/10 backdrop-blur-xl border border-[#4edea3]/10 hover:border-[#4edea3]/40 hover:scale-[1.03] shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_32px_rgba(78,222,163,0.15)] rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 relative group">
                    <div className="relative">
                        <Image
                            height={64}
                            width={64}
                            src="https://images.unsplash.com/photo-1630667208073-82d53b1db540?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Elena Rodriguez"
                            initials="ER"
                            className="w-16 h-16 rounded-full border border-[#4edea3]/20 shadow-[0_0_10px_rgba(78,222,163,0.2)]"
                        />
                    </div>
                    <div>
                        <h4 className="font-['Geist',sans-serif] text-xl font-extrabold text-[#b0f0d6] group-hover:text-[#4edea3] transition-colors duration-300">Elena Rodriguez</h4>
                        <p className="font-['JetBrains_Mono',monospace] text-[0.7rem] tracking-[0.05em] text-[#4edea3] uppercase font-bold mt-1">Fintech Expert</p>
                    </div>
                    <div className="mt-2 py-1.5 px-4 bg-[#00170f] rounded-full border border-[#4edea3]/20 flex items-center justify-center gap-1.5 group-hover:border-[#4edea3]/40 transition-colors duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
                        <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#bbcabf] font-semibold">
                            <strong className="text-[#b0f0d6]">28</strong> Ideas Seeded
                        </span>
                    </div>
                </div>

                {/* Contributor 4: David Park */}
                <div className="bg-[#003123]/10 backdrop-blur-xl border border-[#4edea3]/10 hover:border-[#4edea3]/40 hover:scale-[1.03] shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_32px_rgba(78,222,163,0.15)] rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 relative group">
                    <div className="relative">
                        <Image
                            height={64}
                            width={64}
                            src="https://images.unsplash.com/photo-1559718062-361155fad299?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="David Park"
                            initials="DP"
                            className="w-16 h-16 rounded-full border border-[#4edea3]/20 shadow-[0_0_10px_rgba(78,222,163,0.2)]"
                        />
                    </div>
                    <div>
                        <h4 className="font-['Geist',sans-serif] text-xl font-extrabold text-[#b0f0d6] group-hover:text-[#4edea3] transition-colors duration-300">David Park</h4>
                        <p className="font-['JetBrains_Mono',monospace] text-[0.7rem] tracking-[0.05em] text-[#4edea3] uppercase font-bold mt-1">Web3 Architect</p>
                    </div>
                    <div className="mt-2 py-1.5 px-4 bg-[#00170f] rounded-full border border-[#4edea3]/20 flex items-center justify-center gap-1.5 group-hover:border-[#4edea3]/40 transition-colors duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
                        <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#bbcabf] font-semibold">
                            <strong className="text-[#b0f0d6]">1.5k</strong> Impact Score
                        </span>
                    </div>
                </div>

            </div>
        </section>
    </div>
    );
};

export default TopContributor;