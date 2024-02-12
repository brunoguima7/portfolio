import Link from "next/link"
import Image from "next/image"

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

export default function Projects({projects}: ProjectsProps) {

 return (
    <>
         <div className="flex flex-col space-y-20 md:space-y-24 md:ml-48">
             <h2 className="text-center md:text-start text-2xl md:text-4xl">Projetos Recentes</h2>
             <ul className="flex flex-col flex-wrap md:flex-row md:space-x-20 justify-center md:justify-start space-y-12 md:space-y-0">
                 {projects.map(({ slug, name, image }, index) => (
                     <Link href={`/projects/${slug}`} key={name + index}>
                         <li className="space-y-2">
                             <div className="flex justify-center">
                                 <Image
                                     src={image.url}
                                     alt={image.alt}
                                     width="300"
                                     height="300"
                                     className="rounded-2xl xl:hover:blur"
                                 />
                             </div>
                             <div className="text-center">
                                 <span className="text-lg">{name}</span>
                             </div>
                         </li>
                     </Link>
                 ))}
             </ul>
         </div>
     </>
 )

}