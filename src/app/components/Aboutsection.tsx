"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>Pycharm</li>
                <li>Pytorch</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Nanyang University Of Technology</li>
            </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
            <ul className="list-disc pl-2">
                <li>Software Tester at Alpsoft</li>
                <li>AI researcher Intern at DSO</li>
            </ul>
        ),
    },
];
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: any) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
                <Image
                    alt="test"
                    src="/images/about.png"
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-base md:text-lg ">
                        I'm a penultimate-year Computer Science student at
                        Nanyang Technological University, Singapore, deeply
                        passionate about software engineering. My dedication to
                        honing technical skills is evident through my active
                        involvement in academic and hackathon projects. Notably,
                        Proficient in Python, C++, Java, JavaScript, TypeScript,
                        React, Git, HTML, CSS and Nextjs. I'm driven to make an
                        impact in software engineering.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {""}
                            Skills
                            {""}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {""}
                            Education
                            {""}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("experiences")}
                            active={tab === "experiences"}
                        >
                            {""}
                            Experience
                            {""}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
