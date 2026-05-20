import React from 'react';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';


const CommentsEditMOdal = ({ idea, comment }) => {

    const handleSubmit = async (e) => {
        console.log('submit edit form');
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const UpdateComments = Object.fromEntries(formData.entries())



        console.log(UpdateComments);

        const res = await fetch(`http://localhost:5000/update-comments/${comment._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateComments)
        })

        const data = await res.json()
        console.log(data);

        alert('Comment updated successfully!');
        window.location.reload();

    };

    return (
        <div>
            <Modal >
                {/* <button className="bg-[#4edea3]/10 border border-[#4edea3]/25 px-2.5 py-0.5 rounded-full font-['JetBrains_Mono',monospace] text-md text-[#4edea3] hover:bg-[#4edea3]/20 transition-colors duration-300">
                                Edit
                            </button> */}

                <Button variant="secondary" className="bg-[#4edea3]/10 border border-[#4edea3]/25 px-2.5 py-0.5 rounded-full font-['JetBrains_Mono',monospace] text-md text-[#4edea3] hover:bg-[#4edea3]/20 transition-colors duration-300">Edit</Button>
                <Modal.Backdrop >
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md bg-[#002117]/30 ">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading className='text-[#4edea3]'>Edit Your Comment</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form className="px-6 py-6 space-y-6 max-w-3xl mx-auto bg-[#002117]/30" onSubmit={handleSubmit}>
                                        {/* Idea Title */}
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[#4edea3] font-['JetBrains_Mono',monospace] text-sm font-bold uppercase tracking-[0.1em]">Your comment</label>
                                            <input className="form-input flex w-full rounded-xl text-[#b0f0d6] border border-[#4edea3]/20 bg-[#003123]/20 focus:ring-2 focus:ring-[#4edea3]/50 focus:border-[#4edea3] h-14 placeholder:text-[#bbcabf]/50 p-4 text-base transition-all" placeholder="Enter your comment" required type="text" name='comment' defaultValue={comment.comment} />
                                        </div>



                                        {/* Primary Action */}
                                        <div className="pt-6 pb-8">
                                            <button className="w-full bg-gradient-to-r from-[#4edea3] to-[#12a970] text-[#003824] font-['JetBrains_Mono',monospace] font-bold text-[14px] uppercase tracking-wider h-16 rounded-xl shadow-[0_0_20px_rgba(78,222,163,0.25)] hover:shadow-[0_0_30px_rgba(78,222,163,0.45)] active:scale-[0.98] transition-all" type="submit">
                                                save changes
                                            </button>
                                        </div>
                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default CommentsEditMOdal;