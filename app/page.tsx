import ProfessionalWork from "./components/projects";
import About, { Hero, Services, ContactInvitation } from "./components/about";

export default function Page() {
    return (
        <main>
            <Hero />
            <Services />
            <ProfessionalWork />
            <About />
            <ContactInvitation />
        </main>
    );
}
