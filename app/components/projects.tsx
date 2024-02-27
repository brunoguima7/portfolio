import Link from "next/link"
import Image from "next/image"

export default function Projects({ projects }: ProjectsProps) {

    return (
        <>
            <div className="flex flex-col space-y-14 mt-24 md:mt-32 md:space-y-24 md:ml-20 xl:ml-36">
                <h2 className="text-center md:text-start text-3xl xl:text-5xl">Projetos Recentes</h2>
                <ul className="flex flex-col flex-wrap md:flex-row gap-x-20 justify-center md:justify-start space-y-12 md:space-y-0">
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