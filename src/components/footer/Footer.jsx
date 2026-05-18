import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full border-t border-[#4edea3]/10 bg-[#00120b] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] py-16 relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[200px] bg-[#4edea3]/3 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            <div className="md:max-w-[80%] mx-auto">
                {/* Upper grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <a href="#" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4edea3] to-[#12a970] flex items-center justify-center text-[#003824] shadow-[0_0_10px_rgba(78,222,163,0.25)]">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                </svg>
                            </div>
                            <span className="font-['Geist',sans-serif] text-[20px] font-extrabold text-[#b0f0d6] group-hover:text-[#4edea3] transition-colors duration-300">
                                Idea<span className="text-[#4edea3]">Vault</span>
                            </span>
                        </a>
                        <p className="font-['Geist',sans-serif] text-[13px] leading-[20px] text-[#bbcabf] max-w-[240px]">
                            The digital safe for intellectual high-performers. Curate, protect, and evolve your most ambitious concepts.
                        </p>
                    </div>

                    {/* Navigation Sector */}
                    <div className="space-y-4">
                        <span className="font-['JetBrains_Mono',monospace] text-[10px] tracking-[0.1em] text-[#4edea3] font-bold block uppercase">

                        </span>
                        <div className="flex flex-col gap-2.5">
                            <a className="font-['JetBrains_Mono',monospace] text-[11px] text-[#bbcabf] hover:text-[#4edea3] transition-colors duration-300 w-fit" href="#">Manifesto</a>
                            <a className="font-['JetBrains_Mono',monospace] text-[11px] text-[#bbcabf] hover:text-[#4edea3] transition-colors duration-300 w-fit" href="#">Core Vaults</a>
                            <a className="font-['JetBrains_Mono',monospace] text-[11px] text-[#bbcabf] hover:text-[#4edea3] transition-colors duration-300 w-fit" href="#">Step Pipeline</a>
                            <a className="font-['JetBrains_Mono',monospace] text-[11px] text-[#bbcabf] hover:text-[#4edea3] transition-colors duration-300 w-fit" href="#">Top Architects</a>
                        </div>
                    </div>

                    {/* Security Sector */}
                    <div className="space-y-4">
                        <span className="font-['JetBrains_Mono',monospace] text-[10px] tracking-[0.1em] text-[#4edea3] font-bold block uppercase">

                        </span>
                        <div className="flex flex-col gap-2.5">
                            <a className="font-['JetBrains_Mono',monospace] text-[11px] text-[#bbcabf] hover:text-[#4edea3] transition-colors duration-300 w-fit" href="#">Privacy Protocol</a>
                            <a className="font-['JetBrains_Mono',monospace] text-[11px] text-[#bbcabf] hover:text-[#4edea3] transition-colors duration-300 w-fit" href="#">IP Protection</a>
                            <a className="font-['JetBrains_Mono',monospace] text-[11px] text-[#bbcabf] hover:text-[#4edea3] transition-colors duration-300 w-fit" href="#">Terms of Sync</a>
                        </div>
                    </div>

                    {/* System Info */}
                    <div className="space-y-4">
                        <span className="font-['JetBrains_Mono',monospace] text-[10px] tracking-[0.1em] text-[#4edea3] font-bold block uppercase">

                        </span>
                        <div className="space-y-2 font-['JetBrains_Mono',monospace] text-[10px] text-[#bbcabf]/75">
                            <div>NODE: <span className="text-[#4edea3]">US_EAST_01</span></div>
                            <div>SHIELD_HASH: <span className="text-[#b0f0d6]">0x4A7D9C_SEC</span></div>
                            <div>VERSION: <span className="text-[#b0f0d6]">v2.0.4-PROD</span></div>
                        </div>
                    </div>

                </div>

                {/* Lower row */}
                <div className="border-t border-[#4edea3]/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="font-['JetBrains_Mono',monospace] text-[10px] tracking-[0.05em] text-[#bbcabf]">
                        © {new Date().getFullYear()} IdeaVault. Curating the future of intellectual capital.
                    </p>
                    <div className="flex gap-4 items-center bg-[#00170f] border border-[#4edea3]/10 px-3.5 py-1.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                        <span className="font-['JetBrains_Mono',monospace] text-[8px] tracking-[0.1em] text-[#4edea3] uppercase font-bold">SECURE_GATE // FULLY_ENCRYPTED</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;