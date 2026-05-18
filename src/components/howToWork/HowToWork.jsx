import React from 'react';

const HowToWork = () => {
    return (
        <div className="w-full px-[40px] py-16 bg-[#00170f] relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] bg-[#4edea3]/5 blur-[160px] rounded-full pointer-events-none -z-10"></div>

            <section className="mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="font-['Geist',sans-serif] text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.03em] font-bold text-[#b0f0d6]">
                        How_<span className="text-[#4edea3] italic font-normal">itWorks</span>
                    </h2>
                </div>

                {/* Steps Pipeline Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    
                    {/* Step 1: Submit */}
                    <div className= "py-20 bg-[#003123]/10 backdrop-blur-xl border border-[#4edea3]/10 hover:border-[#4edea3]/40 shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(78,222,163,0.15)] rounded-2xl p-8 flex flex-col items-center text-center relative group transition-all duration-500">
                        {/* Desktop Connector Line */}
                        <div className="hidden md:block absolute top-1/2 -right-8 -translate-y-1/2 w-6 h-6 text-[#4edea3]/30 group-hover:text-[#4edea3] group-hover:translate-x-1 transition-all duration-500 z-20 pointer-events-none">
                            <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </div>

                        {/* Top: Tech Badge & Phase */}
                        <div className="flex justify-between items-center w-full mb-6">
                            <span className="font-['JetBrains_Mono',monospace] text-[12px] text-[#4edea3] bg-[#4edea3]/10 border border-[#4edea3]/20 px-2.5 py-0.5 rounded-full font-bold">01</span>
                        </div>

                        {/* SVG Icon Area */}
                        <div className="w-16 h-16 rounded-2xl bg-[#00170f] border border-[#4edea3]/20 flex items-center justify-center text-[#4edea3] group-hover:border-[#4edea3]/50 group-hover:shadow-[0_0_20px_rgba(78,222,163,0.25)] group-hover:rotate-6 transition-all duration-500 mb-6">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>

                        {/* Text */}
                        <h4 className="font-['Geist',sans-serif] text-[22px] font-extrabold text-[#b0f0d6] mb-3 group-hover:text-[#4edea3] transition-colors duration-300">
                            Secure Submit
                        </h4>
                        <p className="font-['Geist',sans-serif] text-[14px] leading-[20px] text-[#bbcabf]">
                            Upload your concept to our military-grade encrypted vault with cryptographically verified IP timestamps.
                        </p>
                    </div>

                    {/* Step 2: Collaborate */}
                    <div className="py-20 bg-[#003123]/10 backdrop-blur-xl border border-[#4edea3]/10 hover:border-[#4edea3]/40 shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(78,222,163,0.15)] rounded-2xl p-8 flex flex-col items-center text-center relative group transition-all duration-500">
                        {/* Desktop Connector Line */}
                        <div className="hidden md:block absolute top-1/2 -right-8 -translate-y-1/2 w-6 h-6 text-[#4edea3]/30 group-hover:text-[#4edea3] group-hover:translate-x-1 transition-all duration-500 z-20 pointer-events-none">
                            <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </div>

                        {/* Top: Tech Badge & Phase */}
                        <div className="flex justify-between items-center w-full mb-6">
                            <span className="font-['JetBrains_Mono',monospace] text-[12px] text-[#4edea3] bg-[#4edea3]/10 border border-[#4edea3]/20 px-2.5 py-0.5 rounded-full font-bold">02</span>
                        </div>

                        {/* SVG Icon Area */}
                        <div className="w-16 h-16 rounded-2xl bg-[#00170f] border border-[#4edea3]/20 flex items-center justify-center text-[#4edea3] group-hover:border-[#4edea3]/50 group-hover:shadow-[0_0_20px_rgba(78,222,163,0.25)] group-hover:-rotate-6 transition-all duration-500 mb-6">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94-3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                        </div>

                        {/* Text */}
                        <h4 className="font-['Geist',sans-serif] text-[22px] font-extrabold text-[#b0f0d6] mb-3 group-hover:text-[#4edea3] transition-colors duration-300">
                            Align & Collaborate
                        </h4>
                        <p className="font-['Geist',sans-serif] text-[14px] leading-[20px] text-[#bbcabf]">
                            Invite trusted partners, manage modular access rules, or open specific layers to the secure community for targeted feedback.
                        </p>
                    </div>

                    {/* Step 3: Validate */}
                    <div className="py-20 bg-[#003123]/10 backdrop-blur-xl border border-[#4edea3]/10 hover:border-[#4edea3]/40 shadow-[0_12_36px_rgba(0,0,0,0.4)] hover:shadow-[0_12_40px_rgba(78,222,163,0.15)] rounded-2xl p-8 flex flex-col items-center text-center relative group transition-all duration-500">
                        {/* Top: Tech Badge & Phase */}
                        <div className="flex justify-between items-center w-full mb-6">
                            <span className="font-['JetBrains_Mono',monospace] text-[12px] text-[#4edea3] bg-[#4edea3]/10 border border-[#4edea3]/20 px-2.5 py-0.5 rounded-full font-bold">03</span>
                        </div>

                        {/* SVG Icon Area */}
                        <div className="w-16 h-16 rounded-2xl bg-[#00170f] border border-[#4edea3]/20 flex items-center justify-center text-[#4edea3] group-hover:border-[#4edea3]/50 group-hover:shadow-[0_0_20px_rgba(78,222,163,0.25)] group-hover:rotate-12 transition-all duration-500 mb-6">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                        </div>

                        {/* Text */}
                        <h4 className="font-['Geist',sans-serif] text-[22px] font-extrabold text-[#b0f0d6] mb-3 group-hover:text-[#4edea3] transition-colors duration-300">
                            Quant Validation
                        </h4>
                        <p className="font-['Geist',sans-serif] text-[14px] leading-[20px] text-[#bbcabf]">
                            Gather automated telemetry metrics, execute predictive timeline audits, and get matched to verified deep-tech investors.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default HowToWork;