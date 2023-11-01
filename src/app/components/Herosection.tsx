"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className=" mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#5C2774] via-[#335CC5] to-[#637FFD]">
                            Hello, I'm{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Jeff",
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                "Inspiring Software Engineer",
                                1000,
                                "Inspiring Frontend developer",
                                1000,
                                "Inspiring Backend developer",
                                1000,
                                "Inspiring AI developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        I'm a Nanyang Technology University Undergraduate,
                        Studying Computer Science.
                    </p>
                    <div>
                        <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-[#5C2774] via-[#335CC5] to-[#637FFD] hover:bg-slate-200 text-black">
                            Hire Me
                        </button>
                        <a href="/resume.pdf" download>
                            <button className="px-1 py-1 rounded-full  w-full  sm:w-fit mr-4  mt-3  bg-gradient-to-br from-[#5C2774] via-[#335CC5] to-[#637FFD] hover:bg-slate-800 text-white ">
                                <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">
                                    Download Resume
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/Jeff_Ava.png"
                            alt="test"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
