"use client";

import Projects from "./components/projects";
import About from "./components/about";

export default function Page() {

    const projects = [
        {
            slug: "calendario",
            name: "Calendário",
            image: {
                url: "https://i.pinimg.com/736x/31/a7/40/31a740fa4dac88750dd699a2bb807e89.jpg",
                alt: "Calendário"
          }
        },
        {
            slug: "sv-enterprise-service",
            name: "SVZ Enterprise",
            image: {
                url: "https://i.pinimg.com/736x/d1/45/0c/d1450cfccfc6d9be2f5c8ad33eb0e11f.jpg",
                alt: "SVZ"
            }
        },
        {
            slug: "sv-enterprise-service",
            name: "SVZ Enterprise",
            image: {
                url: "https://i.pinimg.com/736x/d1/45/0c/d1450cfccfc6d9be2f5c8ad33eb0e11f.jpg",
                alt: "SVZ"
            }
        },
        {
            slug: "sv-enterprise-service",
            name: "SVZ Enterprise",
            image: {
                url: "https://i.pinimg.com/736x/d1/45/0c/d1450cfccfc6d9be2f5c8ad33eb0e11f.jpg",
                alt: "SVZ"
            }
        },
        {
            slug: "sv-enterprise-service",
            name: "SVZ Enterprise",
            image: {
                url: "https://i.pinimg.com/736x/d1/45/0c/d1450cfccfc6d9be2f5c8ad33eb0e11f.jpg",
                alt: "SVZ"
            }
        },
        {
            slug: "sv-enterprise-service",
            name: "SVZ Enterprise",
            image: {
                url: "https://i.pinimg.com/736x/d1/45/0c/d1450cfccfc6d9be2f5c8ad33eb0e11f.jpg",
                alt: "SVZ"
            }
        },
        {
            slug: "sv-enterprise-service",
            name: "SVZ Enterprise",
            image: {
                url: "https://i.pinimg.com/736x/d1/45/0c/d1450cfccfc6d9be2f5c8ad33eb0e11f.jpg",
                alt: "SVZ"
            }
        },
    ]

    return (
        <>
            <div className="space-y-20 md:space-y-40">
                <About />
                <Projects projects={projects} />
            </div>
        </>
    )
}
