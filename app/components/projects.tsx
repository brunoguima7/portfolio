const work = [
    {
        company: "Sabesp",
        category: "Desenvolvimento e automação",
        title: "Da regra de negócio à tela: evolução dos sistemas SNI/SSI",
        context: "O trabalho partiu de rotinas operacionais que dependiam de processos manuais e informações distribuídas. Nos sistemas SNI/SSI, essas necessidades passaram a orientar funcionalidades para acompanhar equipes, consultar leituras e analisar informações de consumo e faturamento.",
        contribution: "Atuei na definição de uma parte significativa das regras de negócio e na revisão das regras existentes, ajudando a traduzir a rotina da operação em comportamento do sistema. Desenvolvi diretamente o frontend e as automações de extração de dados de sistemas terceiros. Também contribuí com ideias, testes e melhorias durante o desenvolvimento em equipe.",
        delivery: "No módulo de acompanhamento operacional, a solução passou a reunir status de leituristas, horários de sincronismo, localização e dados das leituras. O trabalho também contemplou informações de consumo médio e alto consumo. Minha atuação conectou a lógica dessas funcionalidades às interfaces e às rotinas de extração de dados que apoiavam seu uso.",
        tags: ["Frontend", "Regras de negócio", "Python", "Selenium", "Pandas"],
        scope: "Técnico de TI terceirizado · Desenvolvimento em equipe",
        detailTitle: "O que o sistema passou a permitir",
    },
    {
        company: "WCR Saneamento",
        category: "Implantação e processos",
        title: "Organização do levantamento de hidrômetros na universalização",
        context: "Na obra de universalização do principal contrato da WCR, havia uma frente dedicada ao levantamento dos hidrômetros já instalados. Minha responsabilidade foi organizar essa operação dentro do contexto dos serviços de saneamento.",
        contribution: "Assumi a organização do trabalho de levantamento. Essa experiência faz parte da minha atuação como Analista de Implantação: compreender as necessidades da operação, organizar informações e fluxos e fazer a ligação entre os processos do contrato e os sistemas internos.",
        delivery: "Além dessa frente operacional, meu escopo na WCR inclui o planejamento da implantação de novos serviços, o controle e a análise de dados e a evolução de aplicações internas. É uma atuação que exige conhecer as regras do negócio e acompanhar como elas se aplicam no dia a dia da operação.",
        tags: ["Organização operacional", "Implantação", "Gestão de dados", "Saneamento"],
        scope: "Analista de Implantação · Organização da operação de levantamento",
        detailTitle: "Como isso se conecta à minha atuação",
    },
    {
        company: "Synora Smart Operations",
        category: "Desenvolvimento sob medida",
        title: "Um sistema completo para conduzir o processo de vistorias",
        context: "O escopo da solução cobria o processo de vistorias desde as solicitações e análises até a execução do serviço pelo técnico em campo. Isso exigia atender tanto a organização das informações quanto o uso de um aplicativo durante a vistoria.",
        contribution: "Como cofundador da Synora, participei da entrega do sistema completo pela equipe. A solução abrangeu o banco de dados das solicitações e análises e o aplicativo mobile de vistoria. Esse trabalho representa a proposta da Synora: desenvolver software a partir do processo real da empresa e acompanhar sua construção até a entrega.",
        delivery: "Entregamos o sistema que atende às solicitações e análises e o aplicativo mobile utilizado pelo técnico em campo. As diferentes etapas do processo fazem parte do escopo da mesma solução, desde a estrutura de dados até a ferramenta usada para realizar a vistoria.",
        tags: ["Sistema de vistorias", "Banco de dados", "Aplicativo mobile", "Software sob medida"],
        scope: "Cofundador · Solução entregue pela equipe Synora",
        detailTitle: "Solução entregue",
    },
]
export default function ProfessionalWork() {
    return (
        <section id="portfolio" aria-labelledby="work-title" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 md:px-10 md:py-24">
            <p className="mb-3 text-sm text-cyan-300">Experiência na prática</p>
            <h2 id="work-title" className="max-w-3xl text-3xl leading-tight md:text-4xl">O trabalho por trás das soluções</h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-blue-200">Contextos em que apliquei desenvolvimento, automação e organização de processos — e como contribuí em cada um deles.</p>
            <div className="mt-12 space-y-8">
                {work.map(({ company, category, title, context, contribution, delivery, tags, scope, detailTitle }, index) => (
                    <article key={company} className="overflow-hidden rounded-2xl border border-blue-400/25 bg-slate-950/40">
                        <div className="grid lg:grid-cols-[1fr_1.5fr]">
                            <div className="border-b border-blue-400/20 bg-blue-950/40 p-6 md:p-9 lg:border-b-0 lg:border-r">
                                <p className="text-xs text-cyan-300">0{index + 1} / {category}</p>
                                <p className="mt-7 text-sm text-blue-200">{company}</p>
                                <h3 className="mt-3 text-2xl leading-snug">{title}</h3>
                                <p className="mt-5 text-xs text-blue-300">{scope}</p>
                                <ul className="mt-7 flex flex-wrap gap-2" aria-label="Áreas envolvidas">
                                    {tags.map((tag) => <li key={tag} className="rounded-full border border-blue-400/30 px-3 py-1 text-xs leading-relaxed text-blue-100">{tag}</li>)}
                                </ul>
                            </div>
                            <dl className="space-y-6 p-6 md:p-9">
                                <div>
                                    <dt className="text-sm text-cyan-200">Contexto</dt>
                                    <dd className="mt-2 text-sm leading-relaxed text-blue-200">{context}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm text-cyan-200">Minha participação</dt>
                                    <dd className="mt-2 text-sm leading-relaxed text-blue-200">{contribution}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm text-cyan-200">{detailTitle}</dt>
                                    <dd className="mt-2 text-sm leading-relaxed text-blue-200">{delivery}</dd>
                                </div>
                            </dl>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}