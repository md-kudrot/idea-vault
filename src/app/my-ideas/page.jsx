"use client"
import MyIdeaCart from "@/components/my-idea-Cart/MyIdeaCart"
import { authClient } from "@/lib/auth-client"
import React, { useEffect, useState } from "react"

const Page = () => {
    const [myIdeas, setMyIdeas] = useState([])

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user
    const userEmail = user?.email

    useEffect(() => {
        if (!userEmail) return

        const fetchIdeas = async () => {
            const { data: tokenData } = await authClient.token()
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/new-idea`, {
                headers: {
                    authorization: `Bearer ${tokenData?.token}`
                }
            })
            const data = await res.json()
            const allIdeas = Array.isArray(data) ? data : [data]
            setMyIdeas(allIdeas.filter((idea) => idea.userEmail === userEmail))
        }

        fetchIdeas()
    }, [userEmail])

    return (
        <div className="py-20">
            <h1 className="text-4xl font-bold text-[#b0f0d6]">My Idea</h1>
            <p className="text-lg pb-10 pt-4 text-[#bbcabf]">
                Manage and edit your submitted ideas, track feedback, and collaborate with architects to refine your
                concepts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isPending ? (
                    // design a loading circle for the idea cards
                    <div className="col-span-full flex justify-center items-center py-20">
                        <div className="w-12 h-12 border-4 border-[#4edea3] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    myIdeas.map((idea) => <MyIdeaCart key={idea._id} user={user} idea={idea} />)
                )}
            </div>
        </div>
    )
}

export default Page
