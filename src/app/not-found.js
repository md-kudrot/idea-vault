import React from 'react';

const notFound = () => {
    return (
        <div>
            <div className="max-w-xl w-full mx-auto py-44 text-center space-y-8 z-10">
                {/* Telemetry Status Indicator */}
                <div className="inline-flex items-center gap-2 bg-[#ffb3af]/10 backdrop-blur-md border border-[#ffb3af]/20 px-4 py-1.5 rounded-full mx-auto w-fit">
                    <span className="w-2 h-2 rounded-full bg-[#ffb3af] animate-ping"></span>
                    <span className="font-['JetBrains_Mono',monospace] font-bold text-[10px] tracking-[0.1em] text-[#ffb3af] uppercase">SYSTEM_ALERT // SECTOR_NOT_FOUND</span>
                </div>

                {/* Glitch 404 Heading */}
                <div className="relative">
                    <h1 className="font-['Geist',sans-serif] text-[120px] sm:text-[160px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#4edea3] to-[#12a970] neon-glow select-none">
                        404
                    </h1>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-['JetBrains_Mono',monospace] text-[11px] tracking-[0.2em] text-[#86948a] uppercase bg-[#00170f] px-4 py-1 border border-[#3c4a42]/30 rounded-md">
                        ERR_SECTION_EMPTY
                    </div>
                </div>

                {/* Error Description */}
                <div className="space-y-3 px-4">
                    <h3 className="font-['Geist',sans-serif] text-2xl font-bold text-[#b0f0d6] tracking-tight">
                        Conceptual Sanctuary Desynchronized
                    </h3>
                    <p className="font-['Geist',sans-serif] text-[15px] leading-[22px] text-[#bbcabf] max-w-md mx-auto">
                        The coordinates you have requested do not match any classified intelligence sector in this mainframe. It may have been relocated or purged.
                    </p>
                </div>


            </div>
        </div>
    );
};

export default notFound;