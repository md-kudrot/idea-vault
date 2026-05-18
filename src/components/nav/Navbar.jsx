import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50  py-4  bg-[#00170f]/85 backdrop-blur-xl border-b border-[#4edea3]/10 transition-all duration-300">
            <header className="w-full md:max-w-[80%] mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                {/* Ambient glass glow */}
                <div className="absolute inset-0 bg-[#003123]/5 pointer-events-none -z-10"></div>

                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 group">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4edea3] to-[#12a970] flex items-center justify-center text-[#003824] shadow-[0_0_15px_rgba(78,222,163,0.3)] group-hover:scale-105 transition-all duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                    </div>
                    <h1 className="font-['Geist',sans-serif] text-[24px] tracking-[-0.04em] font-extrabold text-[#b0f0d6] group-hover:text-[#4edea3] transition-colors duration-300">
                        Idea<span className="text-[#4edea3]">Vault</span>
                    </h1>
                </a>

                {/* Navigation links */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-8">

                    <Link href="#" className="font-['JetBrains_Mono',monospace] text-md font-bold tracking-[0.05em] text-[#4edea3] transition-colors duration-300 py-1">
                        Home
                    </Link>
                    <Link href="#" className="font-['JetBrains_Mono',monospace] text-md font-bold tracking-[0.05em] text-[#4edea3] transition-colors duration-300 py-1">
                        Ideas
                    </Link>
                    <Link href="#" className="font-['JetBrains_Mono',monospace] text-md font-bold tracking-[0.05em] text-[#4edea3] transition-colors duration-300 py-1">
                        Add Idea
                    </Link>
                    <Link href="#" className="font-['JetBrains_Mono',monospace] text-md font-bold tracking-[0.05em] text-[#4edea3] transition-colors duration-300 py-1">
                        My Ideas
                    </Link>
                    <Link href="#" className="font-['JetBrains_Mono',monospace] text-md font-bold tracking-[0.05em] text-[#4edea3] transition-colors duration-300 py-1">
                        My Interactions
                    </Link>

                </nav>

                {/* System Status & User Profile */}
                <div className="flex items-center gap-5">
                    {/* User avatar with neon green ring */}
                    <div className="w-10 h-10 rounded-full border border-[#4edea3]/30 p-0.5 hover:border-[#4edea3] hover:shadow-[0_0_15px_rgba(78,222,163,0.25)] hover:scale-105 transition-all duration-300 cursor-pointer">
                        <Image
                            height={40}
                            width={40}
                            alt="User Profile"
                            className="w-full h-full rounded-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZIooKpC7A-R7D4VpcKNiPs_v_o9vKpYEieUuP4rx1H8vKjhugpG8_vK7xfhnMrxXGcX_Kpvj5i5v7pWsH1PHZ0Za6_YHuVQI6tpAWeYYTFpig1bns6BejE-BdoqNgG3Tct5x-3GAcbHxZOCk-qxP6GIQASqrDWLcjeSP7Q3eHnFyzHtysRhouRgoJOhXAAD-p5ZaWhuQZShAksSFpyLcox90q0UPZ9jmfCOre5SM06CLzh1e8y7EIbqrFa3JfsufYnCJrUkcvNLI"
                        />
                    </div>
                </div>
            </header>
        </div>

    );
};

export default Navbar;