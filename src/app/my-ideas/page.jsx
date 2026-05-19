'use client';
import MyIdeaCart from '@/components/my-idea-Cart/MyIdeaCart';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

// const allIdea = await getAllIdeas()
const res = await fetch('http://localhost:5000/new-idea');
const allIdeas = await res.json();

const page = () => {
    console.log(allIdeas, 'all ideas');
     const {
            data: session,
        } = authClient.useSession()
        // console.log(session);
    
        const user = session?.user;

        const userEmail = user?.email;
        // console.log(userEmail, 'my ideas');

    const myIdeas = allIdeas.filter(idea => idea.userEmail === userEmail);
        // console.log(myIdeas, 'my ideas');
        

    return (
        <div className='py-20 '>
            <h1 className='text-4xl font-bold text-[#b0f0d6] '>My Idea</h1>
            <p className='text-lg pb-10 pt-4 text-[#bbcabf]'>
                Manage and edit your submitted ideas, track feedback, and collaborate with architects to refine your concepts.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               

            {
                    myIdeas.map(idea => <MyIdeaCart key={idea._id} user={user} idea={idea} />)
            }

            </div>
        </div>
    );
};

export default page;