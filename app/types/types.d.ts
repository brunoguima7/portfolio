interface Image {
    url: string,
    alt: string,
}

interface Project {
    slug: string,
    name: string,
    image: Image,
}

interface ProjectsProps {
    projects: Project[]
}