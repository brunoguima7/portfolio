import Link from "next/link"
import Image from "next/image"

interface Image {
    url: string,
    alt: string,
}
interface Tech {
    name: string
}
   
interface Project {
    link: string,
    name: string,
    description: string,
    github: string
    techs: Tech[],
    image: Image,
}

export default async function Projects() {

    const res = await fetch("https://gist.githubusercontent.com/brunoguima7/d82c83f155e8757f8591819e4d028b24/raw/37a535b4667111b77d85e549fd4542396a559179/projects.json")

    const project: Project[] = await res.json()

    return (
        <>
            <div className="flex flex-col space-y-14 mt-24 md:mt-32 md:space-y-24 md:ml-20 xl:ml-36">
                <h2 className="text-center md:text-start text-3xl xl:text-5xl">Projetos Recentes</h2>
                <ul className="flex flex-col flex-wrap md:flex-row gap-x-20 justify-center md:justify-start space-y-12 md:space-y-0">
                    {project.map(({ link, name, description, techs, github, image }, index) => (
                        <Link href={link} target="_blank" key={name + index} className="relative">
                            <li className="space-y-2 p-3 rounded-2xl w-[17rem] h-[22rem] mx-auto md:mx-0 border border-blue-950" id="card">
                                <div className="flex justify-center">
                                    <Image
                                        src={image.url}
                                        alt={image.alt}
                                        width="250"
                                        height="250"
                                        className="rounded-lg"
                                    />
                                </div>
                                <div className="ml-2">
                                    <span className="text-lg">{name}</span>
                                </div>
                                <div className="ml-2">
                                    <span className="text-sm text-slate-400">{description}</span>
                                </div>
                                <div className="flex justify-between mx-2">
                                    <div className="flex flex-col absolute bottom-4 left-4">
                                        <div className="flex space-x-2">
                                            {techs.map(({ name }, index) => (
                                                <div key={name + index}>
                                                    <Image src={`/logos/${name}.png`} alt="" width="24" height="24"/>
                                                </div> 
                                            ))}         
                                        </div>
                                    </div>
                                    <Link href={github} target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="py-1 px-2 text-slate-300 rounded-lg bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-500 hover:to-sky-300 absolute bottom-4 right-4">
                                            <path d="m18 16 4-4-4-4" />
                                            <path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" />
                                        </svg>
                                    </Link>
                                </div>
                            </li>
                        </Link>
                    ))}
                    <div>
                        <li className="space-y-2 mx-auto md:mx-0">
                            <div className="flex justify-center">
                                <div className="flex flex-col h-[22rem] w-[17rem] rounded-2xl border border-blue-950" id="card">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="245" height="140" viewBox="0 0 24 24" fill="none" stroke="#10174c" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" className="self-center mx-16 mt-3 mb-2 rounded-xl bg-blue-900 bg-opacity-10">
                                        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                                        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M12 2v2" />
                                        <path d="M12 22v-2" /><path d="m17 20.66-1-1.73" /><path d="M11 10.27 7 3.34" />
                                        <path d="m20.66 17-1.73-1" /><path d="m3.34 7 1.73 1" /><path d="M14 12h8" /><path d="M2 12h2" />
                                        <path d="m20.66 7-1.73 1" /><path d="m3.34 17 1.73-1" /><path d="m17 3.34-1 1.73" />
                                        <path d="m11 13.73-4 6.93" />
                                    </svg>
                                    <div>
                                        <span className="text-md ml-5">Projeto em construção... </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )

}