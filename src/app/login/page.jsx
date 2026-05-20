'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { use } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
const page = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        // console.log(user);

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        })
        // console.log({ error, data });

        if (data) {
            toast.success('Logged in successfully!');
            redirect('/')
        }


        if (error) {
            toast.error(error.message)
        }

    }

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className='w-full max-w-[92%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[45%] xl:max-w-[35%] mx-auto my-8 sm:my-12 md:my-16 border border-[#4edea3]/20 rounded-xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 bg-[#00170f]/50 backdrop-blur-lg'>
            <form onSubmit={handleSubmit} className="space-y-5 ">

                <h1 className="text-3xl font-bold text-center text-[#4edea3]">Log In</h1>

                {/* Vault Identity / Email */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-md font-bold uppercase tracking-[0.1em]">Enter Your Email</label>
                    <div className="relative">
                        <input
                            className="form-input flex w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/25 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] h-12 placeholder:text-[#bbcabf]/30 pl-10 pr-4 text-sm transition-all font-['JetBrains_Mono',monospace]"
                            placeholder="identity@domain.sec"
                            required
                            type="email"
                            name='email'
                        />
                    </div>
                </div>

                {/* Passkey */}
                <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                        <label className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-md font-bold uppercase tracking-[0.1em]">Password</label>

                    </div>
                    <div className="relative">
                        <input
                            className="form-input flex w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/25 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-none h-12 placeholder:text-[#bbcabf]/30 pl-10 pr-4 text-md transition-all"
                            placeholder="••••••••••••"
                            required
                            type="password"
                            name='password'
                        />
                    </div>

                    {/* forget password */}
                    <Link href="/forgot-password" className="mt-1 text-[#de534e] hover:underline text-sm">
                        Forgot Password?
                    </Link>
                </div>


                {/* Authorize Button */}
                <button
                    className="w-full bg-gradient-to-r from-[#4edea3] to-[#12a970] text-[#003824] font-['JetBrains_Mono',monospace] font-bold text-md uppercase tracking-wider h-12 rounded-xl shadow-[0_0_15px_rgba(78,222,163,0.25)] hover:shadow-[0_0_25px_rgba(78,222,163,0.4)] active:scale-[0.98] transition-all cursor-pointer mt-2"
                    type="submit"
                >
                    Log In
                </button>
            </form>
            <h1 className='text-center text-2xl'>or</h1>
            <button
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#4edea3] to-[#12a970] text-[#003824] font-['JetBrains_Mono',monospace] font-bold text-md uppercase tracking-wider h-12 rounded-xl shadow-[0_0_15px_rgba(78,222,163,0.25)] hover:shadow-[0_0_25px_rgba(78,222,163,0.4)] active:scale-[0.98] transition-all cursor-pointer mt-2"
                onClick={handleGoogleSignIn}
            >
                <FaGoogle /> Continue with Google
            </button>

            <div className="">
                Don't have an account?
                <Link href="/signup" className="text-[#4edea3] ml-2 hover:underline">
                    Register
                </Link>
            </div>
        </div>
    );
};

export default page;