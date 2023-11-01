"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
const projectsData = [
    {
        id: 1,
        title: "Bot Charlie",
        description:
            "Interactive 24/7 LLM customized data-trained CHATBOT. Centralized database with Pinecone for efficient data retrieval. User-friendly interface powered by Next.js and Tailwind.",
        image: "/images/projects/1.png",
        tag: ["All", "AI", "Web"],
        gitUrl: "https://github.com/Arcyonix/Citi_Hack_Overflow",
        previewUrl:
            "https://github.com/Arcyonix/Citi_Hack_Overflow/blob/main/images/demo.gif",
    },
    {
        id: 2,
        title: "Ediplants Web App",
        description:
            "Experience the power of sustainable gardening and conscious consumption, right in the palm of your hand. EdiPlants brings you a step closer to a greener future, one plant at a time.",
        image: "/images/projects/2.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Arcyonix/hacksingapore2023",
        previewUrl: "https://github.com/Arcyonix/hacksingapore2023",
    },
    {
        id: 3,
        title: "Youtube Trending Video Predictor",
        description:
            "This is a Mini-Project for SC1015 (Introduction to Data Science and Artificial Intelligence) which focuses on youtube videos from Kaggle. For the dataset, the original file was too big, the following link will have the downloadable file.",
        image: "/images/projects/3.png",
        tag: ["All", "AI"],
        gitUrl: "https://github.com/Arcyonix/Projects/tree/main/AI%20Best%20Movie%20Title%20Predictor",
        previewUrl:
            "https://github.com/Arcyonix/Projects/tree/main/AI%20Best%20Movie%20Title%20Predictor",
    },
    {
        id: 4,
        title: "Reco Flat",
        description:
            "A web application that allows users to compare HDB flat prices and make a better decision on selecting a HDB flat based on the data set from data.gov. This application was built with React and Typescript.",
        image: "/images/projects/4.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Arcyonix/Projects/tree/main/RecoFlat%20Webpage#recoflat",
        previewUrl:
            "https://github.com/Arcyonix/Projects/tree/main/RecoFlat%20Webpage#recoflat",
    },
];
const Projectsection = () => {
    const [tag, setTag] = useState("All");
    const handleTagChange = (newTag: any) => {
        setTag(newTag);
    };
    const filterProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="AI"
                    isSelected={tag === "AI"}
                />
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filterProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </>
    );
};

export default Projectsection;
