import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { PiTrashThin } from 'react-icons/pi';
const DeleteDialog = ({ idea }) => {


    const handleDelete = async () => {
        try {
            const { data: tokenData } = await authClient.token();
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/delete-idea/${idea._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${tokenData?.token}`
                },
            });
            const data = await res.json();
            console.log(data, 'delete response');
            window.location.reload();
        } catch (error) {
            console.error('Error deleting idea:', error);
        }
    }


    return (
        <div>
            <AlertDialog>
                <Button variant="danger" className="bg-[#ff6b6b]/10 border border-[#ff6b6b]/25 px-2.5 py-0.5 rounded-full font-['JetBrains_Mono',monospace] text-md text-[#ff6b6b] hover:bg-[#ff6b6b]/20 transition-colors duration-300"
                >
                    <PiTrashThin></PiTrashThin> Delete
                </Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete idea permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>{idea.startupName}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button slot="close" variant="danger" onClick={handleDelete}>
                                    Delete Project
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteDialog;