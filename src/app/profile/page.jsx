"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const page = () => {
    const {
        data: session,
    } = authClient.useSession()
    // console.log(session);

    const user = session?.user;
    console.log(user)

    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;

        // console.log(name, image);
        await authClient.updateUser({
            name,
            image
        })

        router.push('/profile');
    }

    return (
        <div>
            <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-12 pb-32 space-y-8">

                {/* 1. Box showing User Avatar & Name */}
                <div className="bg-[#002117]/30 backdrop-blur-md rounded-3xl border border-[#3c4a42]/30 p-8 flex flex-col items-center gap-5 text-center shadow-2xl relative overflow-hidden">
                    {/* Glowing Decorative Background */}
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#4edea3]/5 blur-[40px] rounded-full pointer-events-none"></div>

                    {/* User Avatar */}
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#4edea3] shadow-[0_0_25px_rgba(78,222,163,0.3)] relative z-10 bg-[#00170f]">
                        <Image
                            height={128}
                            width={128}
                            src={user?.image || "/placeholder.svg"}
                            alt="User Profile Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* User Name & System Stamp */}
                    <div className="space-y-1 z-10">
                        <h1 className="text-2xl sm:text-3xl font-black tracking-[-0.02em] text-[#b0f0d6]">
                            {user?.name || "Anonymous Architect"}
                        </h1>
                    </div>
                </div>

                {/* 2. Form (Name, Avatar URL, Save Changes button) */}
                <form className="space-y-6 bg-[#002117]/30 border border-[#3c4a42]/30 rounded-3xl p-8 shadow-xl" onSubmit={onSubmit}>
                    <span className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-xs sm:text-sm font-bold uppercase tracking-[0.1em] block border-b border-[#3c4a42]/20 pb-3">
                        Edit Identity Parameters
                    </span>

                    {/* Name Input Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-xs sm:text-sm font-bold uppercase tracking-[0.1em]">
                            Architect Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                defaultValue={user?.name || "Anonymous Architect"}
                                className="form-input w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/25 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] h-14 pl-2 pr-4 text-base placeholder:text-[#bbcabf]/30 transition-all font-medium"
                            />
                        </div>
                    </div>

                    {/* Avatar URL Input Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-xs sm:text-sm font-bold uppercase tracking-[0.1em]">
                            Avatar URL Vector
                        </label>
                        <div className="relative">
                            <input
                                type="url"
                                name="image"
                                placeholder="https://image-url.com/avatar.jpg"
                                defaultValue={user?.image || "https://image-url.com/avatar.jpg"}
                                className="form-input w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/25 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] h-14 pl-2 pr-4 text-base placeholder:text-[#bbcabf]/30 transition-all font-medium"
                            />
                        </div>
                    </div>

                    {/* Save Changes Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#4edea3] to-[#12a970] text-[#003824] font-['JetBrains_Mono',monospace] font-bold text-base uppercase tracking-wider h-14 rounded-xl shadow-[0_0_15px_rgba(78,222,163,0.25)] hover:shadow-[0_0_25px_rgba(78,222,163,0.4)] active:scale-95 transition-all cursor-pointer flex items-center justify-center"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>

            </main>
        </div>
    );
};

export default page;