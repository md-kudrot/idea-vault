import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TrendingIdeaCart from './TrendingIdeaCart';

const TrendingIdea = async () => {

    const res = await fetch('http://localhost:5000/new-idea/latest');
    const data = await res.json();

    const trendingIdeas = data;
    // console.log(trendingIdeas);

    return (
        <div className="w-full px-[40px] py-16 bg-[#00170f] relative overflow-hidden">
            {/* Background decorative glows */}
            <div className="absolute top-1/4 right-0  h-[500px] bg-[#4edea3]/5 blur-[150px] rounded-full -z-10"></div>
            <div className="absolute bottom-1/4 -left-10  h-[400px] bg-[#003d2d]/10 blur-[130px] rounded-full -z-10"></div>

            <section className="">
                {/* Header Section */}
                <div className="flex flex-wrap gap-2 justify-between items-center mb-12">
                    <div className="space-y-1">
                        <span className="font-['JetBrains_Mono',monospace] text-[10px] tracking-[0.2em] text-[#4edea3] font-semibold uppercase">INTELLIGENCE HUB</span>
                        <h3 className="font-['Geist',sans-serif] text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.03em] font-bold text-[#b0f0d6]">
                            Trending_<span className="text-[#4edea3] italic font-normal">Intelligence</span>
                        </h3>
                    </div>
                    <Link href="/ideas">
                        <span className="font-['JetBrains_Mono',monospace] text-xl  tracking-[0.08em] cursor-pointer font-bold text-[#4edea3]">View All</span>
                    </Link>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid  lg:grid-cols-3 grid-cols-1 gap-6">


                    {
                        trendingIdeas.map(idea => <TrendingIdeaCart key={idea._id} idea={idea} />)
                    }

       

                </div>
            </section>
        </div>
    );
};

export default TrendingIdea;