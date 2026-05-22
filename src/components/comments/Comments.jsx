'use client';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import CommentsEditMOdal from './commentsEiditModal/CommentsEditMOdal';
import CommentsDeleteModal from './commentsDeleteModal/CommentsDeleteModal';
import toast from 'react-hot-toast';

const { data: tokenData } = await authClient.token();
console.log("Token in my interactions page:", tokenData?.token);


const res = await fetch('http://localhost:5000/comments',{
    headers: {
        authorization: `Bearer ${tokenData?.token}`,
    },
});
const allComments = await res.json();
console.log(allComments);

const Comments = ({ id, startupName, idea }) => {

    const {
        data: session,
    } = authClient.useSession()
    // console.log(session);

    const user = session?.user;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const comments = {
            ...Object.fromEntries(formData.entries()),
            createdAt: user?.createdAt,
            userEmail: user?.email,
            username: user?.name,
            userImage: user?.image,
            postId: id,
            postTitle: startupName
        };

        console.log(comments);
        const res = await fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(comments)
        })

        const data = await res.json()
        console.log(data);

        toast.success('Comment submitted successfully!');
        window.location.reload();


    };

    // filter comment by id
    // console.log(allComments);
    
    // const filteredComments = allComments.filter(comment => comment?.postId === id);
    // console.log(filteredComments, 'filtered comments');

    let filteredComments;
    if (Array.isArray(allComments)) {
        filteredComments = allComments.filter(comment => comment?.postId === id);
    } else {
        filteredComments = [allComments].filter(comment => comment?.postId === id);
    }


    return (
        <div>
            {/* Comment Input Field & Post Comment Button */}
            <form onSubmit={handleSubmit} className="space-y-4">

                <div className="space-y-4">

                    <input
                        placeholder="Write your comment here..."
                        name='comment'
                        className="form-textarea w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/25 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] p-4 text-base placeholder:text-[#bbcabf]/30 transition-all"
                    />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#4edea3] to-[#12a970] text-[#003824] font-['JetBrains_Mono',monospace] font-bold text-sm uppercase tracking-wider h-14 rounded-xl shadow-[0_0_15px_rgba(78,222,163,0.25)] hover:shadow-[0_0_25px_rgba(78,222,163,0.4)] active:scale-95 transition-all cursor-pointer flex items-center justify-center"
                    >
                        Post Comment
                    </button>
                </div>
            </form>

            {/* Posted Comment with Owner Avatar, Name, Date, and Content */}
            <div className="border-t border-[#3c4a42]/20 pt-8 space-y-4">
                <span className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-xs sm:text-sm font-bold uppercase tracking-[0.1em] block">
                    Recent Handshakes
                </span>

                {
                    filteredComments.map((comment, index) => (
                        <div key={index} className="bg-[#003123]/15 border border-[#3c4a42]/25 rounded-2xl p-6 space-y-3">
                            <div className="flex items-center gap-3.5">
                                {/* Comment Owner Avatar */}
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#4edea3] shadow-[0_0_10px_rgba(78,222,163,0.15)]">
                                    <Image
                                        height={40}
                                        width={40}
                                        src={comment?.userImage || "/placeholder.svg"}
                                        alt="Comment Owner Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Comment Owner Name & Date */}
                                <div className="space-y-0.5 w-full">
                                    <div className='flex items-center justify-between w-full'>
                                        <div className="font-['JetBrains_Mono',monospace] text-sm sm:text-base font-extrabold text-[#4edea3]">
                                            {comment?.username || "Anonymous"}
                                        </div>

                                        {user?.email === comment?.userEmail &&
                                            <div className=' flex gap-1 cursor-pointer'>
                                                {/* <div className='bg-[#4edea3] text-[#003123] font-bold py-1 px-3 rounded-lg hover:bg-[#3da88c] transition-colors'>Edit</div> */}

                                                {/* jodi login kore user and comment user same hoy taholei ei button dikhabe */}

                                                <CommentsEditMOdal idea={idea} comment={comment} ></CommentsEditMOdal>
                                                <CommentsDeleteModal comments={comment}></CommentsDeleteModal>

                                               
                                            </div>

                                        }
                                    </div>
                                    <span className="font-['JetBrains_Mono',monospace] text-xs text-[#86948a]">
                                        {comment?.createdAt ? new Date(comment.createdAt).toLocaleDateString() : "Unknown date"}
                                    </span>
                                </div>
                            </div>

                            {/* Comment Content */}
                            <p className="font-['Geist',sans-serif] text-base sm:text-lg text-[#bbcabf] italic pl-1 leading-relaxed">
                                {comment.comment}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Comments;