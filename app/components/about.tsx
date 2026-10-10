import Link from "next/link"
import Image from "next/image"

const areas = [
    { title: "Desenvolvimento de sistemas", text: "Aplicações web e soluções sob medida, conectando regras de negócio, interfaces e dados às necessidades de quem usa." },
    { title: "Automação e dados", text: "Automações para extrair informações de outros sistemas, reduzir tarefas manuais e apoiar as rotinas da operação." },
    { title: "Implantação e processos", text: "Organização de fluxos operacionais e implantação de sistemas alinhados aos serviços e às regras de cada negócio." },
]

const experiences = [
    {
        role: "Analista de Implantação", company: "WCR Saneamento · Freelance", period: "ago. 2026 – out. 2026",
        activities: [
            "Implantação e sustentação de sistemas e serviços voltados ao saneamento, conectando processos operacionais, gestão de dados e tecnologia.",
            "Controle, organização e análise de dados internos e operacionais, com foco na confiabilidade e disponibilidade das informações.",
            "Planejamento dos fluxos de implantação de novos serviços, da estruturação à entrada em operação, e evolução de sistemas internos e aplicações web em nuvem.",
            "Interface entre as necessidades da operação e as regras de negócio dos sistemas, identificando melhorias e oportunidades de automação.",
            "Responsável pela organização da operação de levantamento de hidrômetros já instalados na obra de universalização do principal contrato.",
        ],
    },
    {
        role: "Cofundador", company: "Synora Smart Operations", period: "jul. 2026 – atual",
        activities: [
            "Desenvolvimento de soluções de software sob medida para empresas, com foco em automação de processos e integração de sistemas.",
            "Atuação em todo o ciclo de desenvolvimento: levantamento de requisitos, arquitetura, implementação, implantação e evolução contínua das aplicações.",
            "Desenvolvimento com React, Next.js, TypeScript, Python, SQL e serviços em nuvem.",
            "Participação na entrega de um sistema completo de vistorias, do banco de dados das solicitações e análises ao aplicativo mobile utilizado pelo técnico em campo.",
        ],
    },
    {
        role: "Técnico de TI", company: "Sabesp · Terceirizado", period: "jul. 2025 – jul. 2026",
        activities: [
            "Desenvolvimento e manutenção de aplicações para as áreas operacionais, participando da lógica de negócio, do backend e da construção das interfaces.",
            "Contribuição significativa na definição e no aprimoramento das regras de negócio dos sistemas internos, conectando as necessidades da operação ao funcionamento das aplicações.",
            "Desenvolvimento direto do frontend e de automações para extrair dados de sistemas terceiros, utilizando Python, Selenium e Pandas.",
            "Elaboração de relatórios operacionais, transformando dados em informações estruturadas para o acompanhamento das atividades e o apoio à tomada de decisões.",
            "Participação na gestão dos projetos, na proposição de melhorias e nos testes, com foco em usabilidade, inovação e segurança da informação.",
        ],
    },
    {
        role: "Analista Administrativo", company: "Nsure Foundation Corretora de Seguros", period: "nov. 2024 – jul. 2025",
        activities: [
            "Desenvolvimento de relatórios sobre a utilização dos planos de saúde contratados pelos clientes, transformando dados de uso em informações claras para o acompanhamento dos benefícios e o apoio à tomada de decisões.",
            "Controle e atualização de planilhas gerenciais, além da manutenção e operação do sistema interno da empresa.",
            "Suporte às áreas administrativas e operacionais, contribuindo para a organização e a eficiência dos processos internos.",
            "Organização de dados e atualização de informações para apoiar a tomada de decisões e identificar oportunidades de otimização.",
        ],
    },
    {
        role: "Analista de Processos", company: "Sam’s Club", period: "jul. 2023 – out. 2023",
        activities: [
            "Análise e conferência dos processos do clube, verificando a conformidade com as normas estabelecidas pela empresa.",
            "Mapeamento de oportunidades de melhoria e otimização dos processos nas diferentes áreas da operação.",
        ],
    },
]

const skills = [
    { title: "Frontend", items: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5 e CSS3", "Tailwind CSS", "Design responsivo", "UI/UX"] },
    { title: "Backend e bancos de dados", items: ["Node.js", "Express.js", "APIs REST e integração de sistemas", "SQL", "MySQL", "Programação orientada a objetos (POO)"] },
    { title: "Automação e análise de dados", items: ["Python", "Selenium", "Pandas", "Extração de dados e web scraping", "Automação de processos", "Análise de dados", "Microsoft Excel", "Power BI"] },
    { title: "Ferramentas e tecnologia", items: ["Git", "GitHub", "Docker", "Figma", "Serviços em nuvem", "Inteligência artificial", "Segurança da informação"] },
    { title: "Processos e negócios", items: ["Implantação de software", "Administração de sistemas", "Análise de negócios", "Melhoria de processos", "Gestão de projetos", "Atendimento ao cliente", "Inglês"] },
]
export function Hero() {
    return (
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-44 lg:grid-cols-[1fr_280px]">
            <div>
                <div className="mb-8 flex items-center gap-4 lg:hidden">
                    <Image className="h-24 w-24 shrink-0 rounded-full border-2 border-cyan-300/60 object-cover object-center p-1" src="/images/pfp.jpg" width={96} height={96} alt="Bruno Guimarães" priority unoptimized />
                    <div className="min-w-0">
                        <p className="text-lg leading-snug text-white">Bruno Guimarães</p>
                        <p className="mt-1 text-sm text-cyan-300">Desenvolvedor Full Stack</p>
                        <p className="mt-2 text-xs text-blue-200">São Paulo, Brasil</p>
                    </div>
                </div>
                <p className="mb-6 hidden text-sm text-cyan-300 lg:block">Bruno Guimarães / Desenvolvedor Full Stack</p>
                <h1 className="max-w-4xl text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">Sistemas e automações para <span className="text-cyan-300">melhorar operações.</span></h1>
                <p className="mt-7 max-w-2xl text-base leading-relaxed text-blue-100 md:text-lg">Conecto desenvolvimento de software, dados e visão de negócio para criar soluções que simplificam rotinas, automatizam processos e apoiam decisões.</p>
                <div className="mt-9 flex flex-wrap gap-4">
                    <Link href="#portfolio" className="rounded-xl bg-cyan-300 px-5 py-3 text-sm text-slate-950 transition hover:bg-cyan-200">Conheça minha atuação →</Link>
                    <Link href="/contact" className="rounded-xl border border-blue-400/50 px-5 py-3 text-sm transition hover:bg-blue-900/50">Entre em contato</Link>
                </div>
                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-200">
                    <Link href="https://www.linkedin.com/in/bruno-guimaraes77/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn ↗</Link>
                    <Link href="https://github.com/brunoguima7" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub ↗</Link>
                    <a href="/Bruno_Guimaraes_Curriculo.pdf" download="Bruno_Guimaraes_Curriculo.pdf" className="hover:text-white">Baixar currículo ↓</a>
                </div>
            </div>
            <div className="hidden lg:block">
                <Image className="rounded-3xl border border-blue-400/30" src="/images/pfp.jpg" width={280} height={280} alt="Bruno Guimarães" priority unoptimized />
                <p className="mt-5 text-sm text-blue-200">São Paulo, Brasil</p>
                <p className="mt-2 text-xs leading-relaxed text-blue-300">Desenvolvimento · Automação · Processos</p>
            </div>
        </section>
    )
}

export function Services() {
    return (
        <section id="atuacao" aria-labelledby="services-title" className="scroll-mt-24 border-y border-blue-400/20 bg-black/20">
            <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
                <p className="mb-3 text-sm text-cyan-300">Áreas de atuação</p>
                <h2 id="services-title" className="text-3xl md:text-4xl">O que faço</h2>
                <div className="mt-10 grid gap-8 md:grid-cols-3">
                    {areas.map(({ title, text }, index) => (
                        <div key={title} className="border-t border-blue-400/30 pt-6">
                            <span className="text-sm text-cyan-300">0{index + 1}</span>
                            <h3 className="mb-4 mt-5 text-xl">{title}</h3>
                            <p className="text-sm leading-relaxed text-blue-200">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default function About() {
    return (
        <section id="about" aria-labelledby="about-title" className="scroll-mt-24 border-t border-blue-400/20 bg-black/20">
            <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
                <p className="mb-3 text-sm text-cyan-300">Sobre mim</p>
                <h2 id="about-title" className="text-3xl md:text-4xl">Tecnologia com visão de negócio</h2>
                <p className="mt-6 max-w-3xl leading-relaxed text-blue-200">Minha trajetória passa por administração, análise de processos e desenvolvimento de software. Essa experiência me ajuda a entender a rotina de quem usa os sistemas, identificar gargalos e transformar necessidades da operação em soluções práticas.</p>
                <p className="mt-4 max-w-3xl leading-relaxed text-blue-200">Sou formado em Análise e Desenvolvimento de Sistemas e pós-graduado em Fullstack Development. Meu trabalho reúne desenvolvimento, automação e implantação, com interesse em inteligência artificial e inovação digital.</p>
                <div className="mt-10 flex flex-wrap gap-3" aria-label="Principais tecnologias">
                    {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "SQL", "MySQL", "Tailwind CSS", "Selenium", "Pandas", "Power BI", "Git", "GitHub", "Docker", "Figma"].map((technology) => (
                        <span key={technology} className="rounded-lg border border-cyan-400/30 bg-blue-900/50 px-4 py-2 text-sm text-cyan-100">{technology}</span>
                    ))}
                </div>

                <div className="mt-16 border-t border-blue-500/30 pt-16">
                    <h3 className="mb-10 text-center text-2xl md:text-3xl">Experiência Profissional</h3>
                    <div className="mx-auto max-w-4xl space-y-8">
                        {experiences.map(({ role, company, period, activities }) => (
                            <article key={company} className="rounded-lg border border-blue-500/20 bg-gradient-to-r from-blue-950 to-blue-900 p-6 md:p-8">
                                <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-start">
                                    <div>
                                        <h4 className="text-xl text-blue-300">{role}</h4>
                                        <p className="mt-2 text-sm text-blue-200">{company}</p>
                                    </div>
                                    <span className="shrink-0 text-sm text-blue-300">{period}</span>
                                </div>
                                <ul className="space-y-3 text-sm leading-relaxed text-blue-100 md:text-base">
                                    {activities.map((activity) => (
                                        <li key={activity} className="flex items-start gap-3"><span aria-hidden="true" className="text-cyan-300">→</span><span>{activity}</span></li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-16 border-t border-blue-500/30 pt-16">
                    <h3 className="mb-10 text-center text-2xl md:text-3xl">Formação Acadêmica</h3>
                    <div className="mx-auto max-w-4xl space-y-8">
                        <article className="rounded-lg border border-cyan-500/20 bg-gradient-to-r from-cyan-950 to-cyan-900 p-6 md:p-8">
                            <div className="flex flex-col justify-between gap-3 md:flex-row">
                                <div>
                                    <h4 className="text-xl text-cyan-300">Pós-graduação em Fullstack Development</h4>
                                    <p className="mt-2 text-sm text-cyan-200">FIAP · Concluída</p>
                                </div>
                                <span className="shrink-0 text-sm text-cyan-300">jul. 2025 – jul. 2026</span>
                            </div>
                            <p className="mt-5 text-sm leading-relaxed text-blue-100 md:text-base">Especialização em desenvolvimento full stack, com foco em arquitetura de software, padrões de projeto e construção de aplicações. Formação que aprofunda a integração entre frontend, backend e dados no desenvolvimento de sistemas.</p>
                            <p className="mt-4 text-sm leading-relaxed text-cyan-200">Competências: TypeScript, React, Next.js, Node.js, Docker, SQL, UI/UX, inteligência artificial e segurança da informação.</p>
                        </article>
                        <article className="rounded-lg border border-cyan-500/20 bg-gradient-to-r from-cyan-950 to-cyan-900 p-6 md:p-8">
                            <div className="flex flex-col justify-between gap-3 md:flex-row">
                                <div>
                                    <h4 className="text-xl text-cyan-300">Análise e Desenvolvimento de Sistemas</h4>
                                    <p className="mt-2 text-sm text-cyan-200">Anhanguera Educacional · Tecnólogo</p>
                                </div>
                                <span className="shrink-0 text-sm text-cyan-300">fev. 2021 – jun. 2023</span>
                            </div>
                            <p className="mt-5 text-sm leading-relaxed text-blue-100 md:text-base">Formação em análise de sistemas, desenvolvimento de software e bancos de dados. Base técnica para compreender requisitos, estruturar a lógica das aplicações e desenvolver soluções alinhadas às necessidades do negócio.</p>
                            <p className="mt-4 text-sm leading-relaxed text-cyan-200">Competências: MySQL, SQL, programação orientada a objetos e fundamentos do desenvolvimento web.</p>
                        </article>
                    </div>
                </div>

                <div className="mt-16 border-t border-blue-500/30 pt-16">
                    <h3 className="mb-10 text-center text-2xl md:text-3xl">Tecnologias e Competências</h3>
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {skills.map(({ title, items }) => (
                            <div key={title} className="rounded-xl border border-blue-400/20 bg-slate-950/40 p-6">
                                <h4 className="mb-5 text-lg text-cyan-300">{title}</h4>
                                <ul className="list-inside list-disc space-y-3 text-sm text-blue-100 marker:text-cyan-400">
                                    {items.map((item) => <li key={item}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export function ContactInvitation() {
    return (
        <section aria-labelledby="contact-title" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <p className="mb-4 text-sm text-cyan-300">Vamos conversar</p>
            <h2 id="contact-title" className="max-w-3xl text-3xl leading-tight md:text-4xl">Sua equipe ou sua operação pode ser o próximo contexto do meu trabalho.</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
                <div className="border-t border-blue-400/30 pt-6">
                    <h3 className="text-lg">Oportunidades profissionais</h3>
                    <p className="mt-3 text-sm leading-relaxed text-blue-200">Para conversar sobre posições em desenvolvimento, automação e implantação de sistemas.</p>
                    <Link href="/contact" className="mt-5 inline-block text-cyan-300 hover:text-white">Conversar sobre uma oportunidade →</Link>
                </div>
                <div className="border-t border-blue-400/30 pt-6">
                    <h3 className="text-lg">Soluções para sua empresa</h3>
                    <p className="mt-3 text-sm leading-relaxed text-blue-200">Para explorar como a Synora pode ajudar com software sob medida e automação de processos.</p>
                    <Link href="/contact" className="mt-5 inline-block text-cyan-300 hover:text-white">Conversar sobre uma solução →</Link>
                </div>
            </div>
        </section>
    )
}
