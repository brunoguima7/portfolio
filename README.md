# Bruno Guimarães — Portfolio

> Portfolio pessoal desenvolvido com Next.js, apresentando meus projetos, experiências e um formulário de contato funcional.

🌐 **Acesse em:** [brunoguimaraesdev.vercel.app](https://brunoguimaraesdev.vercel.app)

---

## 📋 Sobre o Projeto

Portfolio desenvolvido do zero com foco em performance, responsividade e boas práticas de desenvolvimento. Conta com:

- Apresentação de projetos recentes carregados dinamicamente via API
- Seção sobre mim com experiências profissionais e educação
- Formulário de contato funcional com envio de e-mail real via Resend
- Proteção anti-bot com campo honeypot
- Animações de transição de página com Framer Motion
- Design responsivo para mobile, tablet e desktop

---

## 🚀 Tecnologias

| Tecnologia                                      | Uso                              |
| ----------------------------------------------- | -------------------------------- |
| [Next.js 14](https://nextjs.org/)               | Framework principal (App Router) |
| [TypeScript](https://www.typescriptlang.org/)   | Tipagem estática                 |
| [Tailwind CSS](https://tailwindcss.com/)        | Estilização                      |
| [Framer Motion](https://www.framer.com/motion/) | Animações de página              |
| [React Hook Form](https://react-hook-form.com/) | Gerenciamento do formulário      |
| [Resend](https://resend.com/)                   | Envio de e-mails                 |
| [React Hot Toast](https://react-hot-toast.com/) | Notificações de feedback         |

---

## 🗂️ Estrutura do Projeto

```
├── app/
│   ├── api/send/        # Route Handler para envio de e-mail
│   ├── components/      # Componentes reutilizáveis (Navbar, Footer, Form...)
│   ├── contact/         # Página de contato
│   ├── layout.tsx       # Layout raiz
│   ├── page.tsx         # Página principal
│   └── template.tsx     # Animação de transição de páginas
├── lib/
│   └── types.ts         # Tipos e interfaces TypeScript
└── utils/
    └── index.ts         # Funções utilitárias (sendEmail)
```

---

## ⚙️ Rodando Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18+
- npm, yarn, pnpm ou bun

### Instalação

**1. Clone o repositório:**

```bash
git clone https://github.com/brunoguima7/portfolio.git
cd portfolio
```

**2. Instale as dependências:**

```bash
npm install
```

**3. Configure as variáveis de ambiente:**

Crie um arquivo `.env.local` na raiz do projeto:

```bash
RESEND_API_KEY=sua_chave_aqui
```

> Obtenha sua chave gratuita em [resend.com](https://resend.com)

**4. Rode o servidor de desenvolvimento:**

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📦 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Inicia o servidor de produção
npm run lint     # Verifica erros de lint
```

---

## 🌍 Deploy

O projeto está hospedado na [Vercel](https://vercel.com). Para fazer seu próprio deploy:

1. Faça o fork do repositório
2. Importe o projeto na Vercel
3. Configure a variável de ambiente `RESEND_API_KEY` em **Settings → Environment Variables**
4. Faça o deploy

---

## 📬 Contato

- **E-mail:** [devbrunoguimaraes@gmail.com](mailto:devbrunoguimaraes@gmail.com)
- **LinkedIn:** [linkedin.com/in/bruno-guimarães77](https://www.linkedin.com/in/bruno-guimar%C3%A3es77/)
- **GitHub:** [github.com/brunoguima7](https://github.com/brunoguima7)
