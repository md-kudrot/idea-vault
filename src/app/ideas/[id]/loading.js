
export default function Loading() {
    return (
       <div className="flex items-center justify-center h-screen">
            <div className="relative h-16 w-16">
                <div className="absolute inset-0 rounded-full border-4 border-[#4edea3]/20" />
                <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-r-[#4edea3] border-t-[#12a970]" />
                <div className="absolute inset-3 rounded-full bg-[#00170f]" />
            </div>
       </div>

    )
}