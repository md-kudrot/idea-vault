import React from 'react';

const page = () => {
    return (
        <div>
          this is my interactions page  
            <div className="max-w-4xl mx-auto py-20 space-y-6">
                <h3 className="font-['Geist',sans-serif] text-2xl font-bold flex items-center gap-2 text-[#b0f0d6]">
                    Recent Interactions
                </h3>

                <div className="bg-[#002117]/50 backdrop-blur-md rounded-xl border border-[#3c4a42]/30 overflow-hidden shadow-xl">
                    <div className="divide-y divide-[#3c4a42]/20">
                        {/* Comment 1 */}
                        <div className="p-6 hover:bg-[#003123]/30 transition-colors duration-300">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-[14px] text-[#bacac3]">mode_comment</span>
                                <span className="font-['JetBrains_Mono',monospace] text-[12px] font-medium tracking-[0.05em] text-[#86948a]">Commented on <span className="text-[#b0f0d6]">EcoGrid API</span></span>
                            </div>
                            <p className="font-['Geist',sans-serif] text-[16px] leading-[24px] text-[#bbcabf] italic mb-2">"The scalability concerns you mentioned could be solved with a sharding layer..."</p>
                            <span className="font-['JetBrains_Mono',monospace] text-[11px] font-medium tracking-[0.05em] text-[#86948a]">3 hours ago</span>
                        </div>

                        {/* Comment 2 */}
                        <div className="p-6 hover:bg-[#003123]/30 transition-colors duration-300">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-[14px] text-[#bacac3]">mode_comment</span>
                                <span className="font-['JetBrains_Mono',monospace] text-[12px] font-medium tracking-[0.05em] text-[#86948a]">Commented on <span className="text-[#b0f0d6]">Lumina LMS</span></span>
                            </div>
                            <p className="font-['Geist',sans-serif] text-[16px] leading-[24px] text-[#bbcabf] italic mb-2">"Have you considered integrating specialized Llama models for the tutoring agent?"</p>
                            <span className="font-['JetBrains_Mono',monospace] text-[11px] font-medium tracking-[0.05em] text-[#86948a]">Yesterday</span>
                        </div>

                        {/* Comment 3 */}
                        <div className="p-6 hover:bg-[#003123]/30 transition-colors duration-300">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-[14px] text-[#bacac3]">mode_comment</span>
                                <span className="font-['JetBrains_Mono',monospace] text-[12px] font-medium tracking-[0.05em] text-[#86948a]">Commented on <span className="text-[#b0f0d6]">ZenFlow App</span></span>
                            </div>
                            <p className="font-['Geist',sans-serif] text-[16px] leading-[24px] text-[#bbcabf] italic mb-2">"Brilliant approach to the UI. The minimalism really helps the focus."</p>
                            <span className="font-['JetBrains_Mono',monospace] text-[11px] font-medium tracking-[0.05em] text-[#86948a]">2 days ago</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;