import Image from "next/image";
import HeroSection from "./components/Herosection";
import Navbar from "./components/navbar";
import Aboutsection from "./components/Aboutsection";
import Projectsection from "./components/Projectsection";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212] ">
            <Navbar />
            <div className="container mt-24 mx-auto py-4 px-12">
                <HeroSection />
                <Aboutsection />
                <Projectsection />
            </div>
        </main>
    );
}
