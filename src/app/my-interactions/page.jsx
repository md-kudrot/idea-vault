"use client";
import { authClient } from '@/lib/auth-client';
import React from 'react';

const {data:tokenData} = await authClient.token();
console.log("Token in my interactions page:", tokenData?.token);


const res = await fetch('http://localhost:5000/comments',{
    headers: {
        authorization: `Bearer ${tokenData?.token}`,
    },
});
const allComments = await res.json();
console.log(allComments);

const page = () => {


    const {
        data: session,
    } = authClient.useSession()
    // console.log(session);

    const user = session?.user;
    const userEmail = user?.email;
    console.log(allComments);

    const myComments = allComments?.filter(comment => comment.userEmail === user?.email);
    return (
        <div>
            <div className="max-w-4xl mx-auto py-20 space-y-6">
                <h3 className="font-['Geist',sans-serif] text-2xl font-bold flex items-center gap-2 text-[#b0f0d6]">
                    Recent Interactions
                </h3>
                <div className="bg-[#002117]/50 backdrop-blur-md rounded-xl border border-[#3c4a42]/30 overflow-hidden shadow-xl">
                    <div className="divide-y divide-[#3c4a42]/20">

                       {
                            myComments?.map((comment,index) => (
                                
                                <div key={index} className="p-6 hover:bg-[#003123]/30 transition-colors duration-300">
                                    {/* {console.log(comment)} */}
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="font-['JetBrains_Mono',monospace] text-md font-medium tracking-[0.05em] text-[#86948a]">Commented on <span className="text-[#b0f0d6]">{comment?.postTitle }</span></span>
                                    </div>
                                    <p className="font-['Geist',sans-serif] text-[16px] leading-xl text-[#bbcabf] italic mb-2">{comment?.comment}</p>
                                    <span className="font-['JetBrains_Mono',monospace] text-[11px] font-medium tracking-[0.05em] text-[#86948a]">{comment?.createdAt && new Date(comment.createdAt).toLocaleDateString()}</span>
                                </div>
                            ))
                       }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;