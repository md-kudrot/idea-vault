'use client';

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { ThemeSwitch } from '../ThemeToggle/ThemeToggle';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const {
        data: session,
    } = authClient.useSession()
    // console.log(session);

    const user = session?.user;
    // console.log(user);

    const handleLogout = async () => {
        await authClient.signOut();

        redirect('/login');
    }

    // const navLinks = [
    //     { href: '/', label: 'Home' },
    //     { href: '/ideas', label: 'Ideas' },
    //     { href: '/add-idea', label: 'Add Idea' },
    //     { href: '/my-ideas', label: 'My Ideas' },
    //     { href: '/my-interactions', label: 'My Interactions' },
    // ];
    const navLinks = <>

        <Link
            href={"/"}
            className="font-['JetBrains_Mono',monospace] text-sm font-bold tracking-[0.05em] text-[#4edea3] hover:text-[#b0f0d6] transition-colors duration-300 py-1 relative group"
        >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#4edea3] group-hover:w-full transition-all duration-300" />
        </Link>

        <Link
            href={"/ideas"}
            className="font-['JetBrains_Mono',monospace] text-sm font-bold tracking-[0.05em] text-[#4edea3] hover:text-[#b0f0d6] transition-colors duration-300 py-1 relative group"
        >
            Ideas
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#4edea3] group-hover:w-full transition-all duration-300" />
        </Link>


        {user && <>
            <Link
                href={"/add-idea"}
                className="font-['JetBrains_Mono',monospace] text-sm font-bold tracking-[0.05em] text-[#4edea3] hover:text-[#b0f0d6] transition-colors duration-300 py-1 relative group"
            >
                Add-Idea
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#4edea3] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
                href={"/my-ideas"}
                className="font-['JetBrains_Mono',monospace] text-sm font-bold tracking-[0.05em] text-[#4edea3] hover:text-[#b0f0d6] transition-colors duration-300 py-1 relative group"
            >
                My-Ideas
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#4edea3] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
                href={"/my-interactions"}
                className="font-['JetBrains_Mono',monospace] text-sm font-bold tracking-[0.05em] text-[#4edea3] hover:text-[#b0f0d6] transition-colors duration-300 py-1 relative group"
            >
                My-Interactions
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#4edea3] group-hover:w-full transition-all duration-300" />
            </Link>
            
            <div className='flex justify-end md:hidden'>
                <ThemeSwitch />
            </div>
        </>}


    </>

    return (
        <div className="sticky top-0 z-50 py-4 bg-[#00170f]/85 backdrop-blur-xl border-b border-[#4edea3]/10 transition-all duration-300">
            <header className="w-full md:max-w-[80%] mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                {/* Ambient glass glow */}
                <div className="absolute inset-0 bg-[#003123]/5 pointer-events-none -z-10"></div>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="md:w-9 md:h-9 p-1 rounded-xl bg-gradient-to-br from-[#4edea3] to-[#12a970] flex items-center justify-center text-[#003824] shadow-[0_0_15px_rgba(78,222,163,0.3)] group-hover:scale-105 transition-all duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                    </div>
                    <h1 className="font-['Geist',sans-serif] text-xl md:text-[24px] tracking-[-0.04em] font-extrabold text-[#b0f0d6] group-hover:text-[#4edea3] transition-colors duration-300">
                        Idea<span className="text-[#4edea3]">Vault</span>
                    </h1>
                </Link>

                {/* Desktop Navigation links */}
                <nav className="hidden md:flex items-center gap-2 lg:gap-4">
                    {navLinks}
                </nav>

                {/* Right side: Avatar + Hamburger */}
                <div className="flex items-center gap-3">
                    <>
                        <div className='hidden md:flex'>
                            <ThemeSwitch />
                        </div>
                        {!user ? <div className='flex items-center justify-center gap-0.5 md:gap-2'>
                            {/*login button */}
                            <button className="md:w-20 px-2 bg-gradient-to-r from-[#4edea3] to-[#12a970] text-[#003824] font-['JetBrains_Mono',monospace] font-bold text-sm md:text-[14px]  tracking-wider md:h-8 rounded-xl shadow-[0_0_20px_rgba(78,222,163,0.25)] hover:shadow-[0_0_30px_rgba(78,222,163,0.45)] active:scale-[0.98] transition-all">
                                <Link href="/login">
                                    LogIn
                                </Link>
                            </button>





                            {/* signup button */}
                            <button className="md:w-20 px-2 bg-gradient-to-r from-[#4edea3] to-[#12a970] text-[#003824] font-['JetBrains_Mono',monospace] font-bold text-[14px] uppercase tracking-wider  md:h-8 rounded-xl shadow-[0_0_20px_rgba(78,222,163,0.25)] hover:shadow-[0_0_30px_rgba(78,222,163,0.45)] active:scale-[0.98] transition-all">
                                <Link href="/signup">
                                    Sign Up
                                </Link>
                            </button>


                        </div>


                            : <div className='flex items-center justify-center gap-2'>

                                <Link href={'/profile'} className="w-10 h-10 rounded-full border border-[#4edea3]/30 p-0.5 hover:border-[#4edea3] hover:shadow-[0_0_15px_rgba(78,222,163,0.25)] hover:scale-105 transition-all duration-300 cursor-pointer">
                                    <Image
                                        referrerPolicy='no-referrer'
                                        height={40}
                                        width={40}
                                        alt={user?.name}
                                        className="w-full h-full rounded-full object-cover"
                                        src={user?.image || `${user?.name[1]}`}
                                    />
                                </Link>

                                <button onClick={handleLogout} className="w-20 bg-gradient-to-r from-[#4edea3] to-[#12a970] text-[#003824] font-['JetBrains_Mono',monospace] font-bold text-[14px] uppercase tracking-wider h-8 rounded-xl shadow-[0_0_20px_rgba(78,222,163,0.25)]  active:scale-[0.98] transition-all
                                 hover:bg-[#df2121] cursor-pointer
                                ">

                                    Log Out

                                </button>

                                {/* logout button */}
                                {/* <button onClick={handleLogout} className="border cursor-pointer font-['JetBrains_Mono',monospace] font-bold text-[14px]  p-1 rounded-xl bg-[#2ddda898] text-[#003824] hover:bg-[#df2121] transition-colors duration-200">
                                    Log Out
                                </button> */}
                            </div>}
                    </>
                    {/* Hamburger button — mobile only */}
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                        className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-lg border border-[#4edea3]/20 hover:border-[#4edea3]/50 hover:bg-[#4edea3]/5 transition-all duration-300"
                    >
                        <span
                            className={`block w-5 h-[2px] bg-[#4edea3] rounded-full transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                                }`}
                        />
                        <span
                            className={`block w-5 h-[2px] bg-[#4edea3] rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''
                                }`}
                        />
                        <span
                            className={`block w-5 h-[2px] bg-[#4edea3] rounded-full transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                                }`}
                        />
                    </button>
                </div>
            </header>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col px-4 sm:px-6 pt-2 pb-4 gap-1 border-t border-[#4edea3]/10 mt-3">
                    {
                        navLinks
                    }
                </nav>
            </div>
        </div>
    );
};

export default Navbar;