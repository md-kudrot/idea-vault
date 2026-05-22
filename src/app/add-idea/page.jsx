'use client'
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';


const page = () => {

    const {
        data: session,
    } = authClient.useSession()
    // console.log(session);

    const user = session?.user;

    // const userEmail = user?.email;
    // console.log(userEmail);
    

    const handleSubmit = async (e) => {


        e.preventDefault();

       
        
        const formData = new FormData(e.currentTarget);
        const newIdea = {
            ...Object.fromEntries(formData.entries()),
            userEmail: user?.email,
            username: user?.name,
            userImage: user?.image
        };
        
        const { data: tokenData } = await authClient.token();
        const res = await fetch('http://localhost:5000/new-idea', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(newIdea)
        });

        const data = await res.json()
        // console.log(data);

        toast.success('Idea submitted successfully!');
        redirect('/ideas');

    };

    return (
        <div>
            <main className="flex-1 overflow-y-auto pb-32">
                <div className="px-6 pt-8 pb-4 max-w-3xl mx-auto">
                    <h1 className="text-[#b0f0d6] text-center tracking-[-0.03em] text-[36px] font-extrabold leading-tight">Submit Your Idea</h1>
                    <p className="text-[#bbcabf] text-center text-base font-normal leading-relaxed mt-2 ">Share your startup concept with the world and get valuable feedback from top architects.</p>
                </div>

                <form className="px-6 py-6 space-y-6 max-w-3xl mx-auto" onSubmit={handleSubmit}>
                    {/* Idea Title */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-sm font-bold uppercase tracking-[0.1em]">Idea Title*</label>
                        <input className="form-input flex w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/20 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] h-14 placeholder:text-[#bbcabf]/50 p-4 text-base transition-all" placeholder="Enter your startup name" required type="text" name='startupName' />
                    </div>

                    {/* Category */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-sm font-bold uppercase tracking-[0.1em]">Category*</label>
                        <select className="form-select flex w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/20 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] h-14 p-4 text-base appearance-none transition-all" required defaultValue="">
                            <option disabled value="" className="bg-[#00170f]">Select a category</option>
                            <option value="SaaS" className="bg-[#00170f]">SaaS</option>
                            <option value="FinTech" className="bg-[#00170f]">FinTech</option>
                            <option value="AI/ML" className="bg-[#00170f]">AI/ML</option>
                            <option value="HealthTech" className="bg-[#00170f]">HealthTech</option>
                            <option value="E-commerce" className="bg-[#00170f]">E-commerce</option>
                            <option value="Sustainability" className="bg-[#00170f]">Sustainability</option>
                        </select>
                    </div>

                    {/* Short Description */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-sm font-bold uppercase tracking-[0.1em]">Short Description*</label>
                        <input className="form-input flex w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/20 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] h-14 placeholder:text-[#bbcabf]/50 p-4 text-base transition-all" placeholder="One sentence pitch" required type="text" name='shortDescription' />
                    </div>

                    {/* Detailed Description */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-sm font-bold uppercase tracking-[0.1em]">Detailed Description*</label>
                        <input className="form-textarea flex w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/20 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] placeholder:text-[#bbcabf]/50 p-4 text-base transition-all" placeholder="Tell us more about how it works..." required rows={4} name='detailedDescription'></input>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-sm font-bold uppercase tracking-[0.1em]">Tags</label>
                        <input className="form-input flex w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/20 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] h-14 placeholder:text-[#bbcabf]/50 p-4 text-base transition-all" placeholder="e.g. mobile, b2b, automation" type="text" name='tags' />
                    </div>

                    {/* Image URL */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-sm font-bold uppercase tracking-[0.1em]">Cover Image</label>
                        <div className="relative">
                            <input className="form-input flex w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/20 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] h-14 placeholder:text-[#bbcabf]/50 pl-4 pr-4 text-base transition-all" placeholder="https://image-url.com/hero.jpg" type="url" name='imageUrl' />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Estimated Budget */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-sm font-bold uppercase tracking-[0.1em]">Estimated Budget</label>
                            <input className="form-input flex w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/20 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] h-14 placeholder:text-[#bbcabf]/50 p-4 text-base transition-all" placeholder="e.g. $10k - $50k" type="text" name='estimatedBudget' />
                        </div>
                        {/* Target Audience */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-sm font-bold uppercase tracking-[0.1em]">Target Audience</label>
                            <input className="form-input flex w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/20 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] h-14 placeholder:text-[#bbcabf]/50 p-4 text-base transition-all" placeholder="Who is this for?" type="text" name='targetAudience' />
                        </div>
                    </div>

                    {/* Problem Statement */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-sm font-bold uppercase tracking-[0.1em]">Problem Statement</label>
                        <input className="form-textarea flex w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/20 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] placeholder:text-[#bbcabf]/50 p-4 text-base transition-all" placeholder="What pain point are you solving?" rows={3} name='problemStatement'></input>
                    </div>

                    {/* Proposed Solution */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-sm font-bold uppercase tracking-[0.1em]">Proposed Solution</label>
                        <input className="form-textarea flex w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/20 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] placeholder:text-[#bbcabf]/50 p-4 text-base transition-all" placeholder="How does your idea solve the problem?" rows={3} name='proposedSolution'></input>
                    </div>


                    {/* Primary Action */}
                    <div className="pt-6 pb-8">
                        <button className="w-full bg-gradient-to-r from-[#4edea3] to-[#12a970] text-[#003824] font-['JetBrains_Mono',monospace] font-bold text-[14px] uppercase tracking-wider h-16 rounded-xl shadow-[0_0_20px_rgba(78,222,163,0.25)] hover:shadow-[0_0_30px_rgba(78,222,163,0.45)] active:scale-[0.98] transition-all" type="submit">
                            Submit Idea to Vault
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default page;