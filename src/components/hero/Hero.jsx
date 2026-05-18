'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';




const Hero = () => {
    const heroSlides = [
        {
            title: 'Turn Your Vision Into Reality',
            subtitle: 'Share your startup ideas with a community of innovators, get feedback, and find collaborators to build the next big thing.',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop',
        },
        {
            title: 'Validate Before You Build',
            subtitle: 'Get real feedback from entrepreneurs and investors before investing time and resources into your startup idea.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
        },
        {
            title: 'Connect With Like-Minded Innovators',
            subtitle: 'Join a thriving community of founders, developers, and visionaries who are shaping the future of technology.',
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop',
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000); 
        return () => clearInterval(interval);
    });

    console.log(currentSlide)



    return (

        <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-[40px] pt-8 sm:pt-10 relative overflow-hidden bg-[#00170f]">
            {/* Cyber banner container */}
            <div className="relative w-full min-h-[580px] md:min-h-[460px] rounded-3xl overflow-hidden bg-[#003123]/10 backdrop-blur-xl border border-[#4edea3]/10 hover:border-[#4edea3]/30 group shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-all duration-500">

                {/* Glowing Accent Gradients */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#4edea3]/5 blur-[120px] rounded-full pointer-events-none z-10"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#003d2d]/25 blur-[100px] rounded-full pointer-events-none z-10"></div>

                {/* Sibling 1: Standalone Image Tag */}
                <Image
                    height={400}
                    width={600}
                    sizes="100vw"
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-[1.02] transition-all duration-1000 ease-out"
                    alt="Futuristic digital landscape"
                    src={heroSlides[currentSlide].image}
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00170f] via-[#00170f]/75 to-transparent z-10"></div>


                {/* Sibling 3: Content Panel */}
                <div className="absolute inset-0 z-20 flex flex-col justify-center px-5 sm:px-8 md:px-16 py-8 sm:py-12 max-w-full sm:max-w-3xl">

                    {/* Status System Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#4edea3]/10 backdrop-blur-md border border-[#4edea3]/20 px-3.5 py-1.5 rounded-full mb-6 w-fit hover:border-[#4edea3]/40 transition-all duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                        <span className="font-['JetBrains_Mono',monospace] font-bold text-[9px] tracking-[0.1em] text-[#4edea3] uppercase">SYSTEM_READY // SECURE_GATE_V2</span>
                    </div>

                    {/* Title */}
                    <h1 className="font-['Geist',sans-serif] text-[36px] sm:text-[48px] md:text-[56px] leading-[1.05] tracking-[-0.03em] font-extrabold text-[#b0f0d6] mb-4">
                        {heroSlides[currentSlide].title}
                        </h1>

                    {/* Paragraph Description */}
                    <p className="font-['Geist',sans-serif] text-[15px] sm:text-[16px] leading-[24px] text-[#bbcabf] mb-8 max-w-xl">
                        {heroSlides[currentSlide].subtitle}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="w-full sm:w-auto bg-gradient-to-r from-[#4edea3] to-[#12a970] text-[#003824] px-7 py-3.5 rounded-full font-['JetBrains_Mono',monospace] font-bold text-[12px] uppercase tracking-wider hover:scale-[1.03] transition-all duration-300 shadow-[0_0_20px_rgba(78,222,163,0.25)] hover:shadow-[0_0_30px_rgba(78,222,163,0.45)] active:scale-97 cursor-pointer">
                            Explore Ideas
                        </button>
                        <button className="w-full sm:w-auto border border-[#4edea3]/20 text-[#b0f0d6] hover:text-[#4edea3] hover:border-[#4edea3]/40 bg-[#00170f]/50 hover:bg-[#003123]/25 px-7 py-3.5 rounded-full font-['JetBrains_Mono',monospace] font-bold text-[12px] uppercase tracking-wider transition-all duration-300 backdrop-blur-sm active:scale-97 cursor-pointer">
                            How it Works
                        </button>
                    </div>
                </div>

                {/* Sibling 4: Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 items-center">
                    <span className="w-8 h-1 bg-[#4edea3] rounded-full shadow-[0_0_8px_#4edea3] transition-all duration-300"></span>
                    <span className="w-2 h-1 bg-[#3c4a42]/80 rounded-full opacity-60 hover:opacity-100 cursor-pointer transition-all duration-300"></span>
                    <span className="w-2 h-1 bg-[#3c4a42]/80 rounded-full opacity-60 hover:opacity-100 cursor-pointer transition-all duration-300"></span>
                </div>

            </div>
        </section>

    );
};

export default Hero;