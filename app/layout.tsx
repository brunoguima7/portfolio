
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { JetBrains_Mono } from 'next/font/google';

export const metadata: Metadata = {
    title: 'Bruno Guimarães | Desenvolvedor Full Stack',
    description: "Desenvolvedor Full Stack, Analista de Implantação na WCR Saneamento e cofundador da Synora. Conheça minha experiência com React, Python, SQL e automação de processos."
};

const jetBrains = JetBrains_Mono({
    weight: '700',
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" className={`${jetBrains.className} !scroll-smooth`}>
            <body>
                <Toaster position="top-right" />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
