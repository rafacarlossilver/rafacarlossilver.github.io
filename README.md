# 👨‍💻 Rafael Carlos Silverio - Portfólio Profissional

> Desenvolvedor | Arquiteto de Dados | Cientista de Dados

Portfólio moderno e responsivo construído com **Next.js**, **React**, **TypeScript** e **Tailwind CSS**.

## 🌍 Live Demo

[https://rafacarlossilver.github.io](https://rafacarlossilver.github.io)

## 🚀 Tecnologias Usadas

- **Framework**: Next.js 16+ com App Router
- **Linguagem**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📋 Seções do Portfólio

- ✨ **Hero Section**: Apresentação profissional com CTA
- 📌 **Destaques**: Principais conquistas e skills
- 💼 **Experiência Profissional**: Timeline com descrições e impacto
- 🎓 **Educação**: Formação acadêmica
- 🛠️ **Skills Técnicas**: Categorias com níveis de proficiência
- 🏆 **Certificações**: Cursos e certificações relevantes
- 📞 **Contato**: Seção com CTA e links sociais

## 💻 Instalação Local

### Pré-requisitos

- Node.js 18+ e npm

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/rafacarlossilver/rafacarlossilver.github.io.git
   cd rafacarlossilver.github.io
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout global
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── Header.tsx          # Navbar/Header
│   ├── Footer.tsx          # Footer
│   ├── ExperienceTimeline.tsx    # Timeline de experiência
│   ├── SkillsGrid.tsx      # Grid de skills
│   └── ContactSection.tsx  # Seção de contato
└── data/
    └── profile.ts          # Dados estruturados (experiência, skills, etc)
```

## 📝 Como Editar o Conteúdo

Todo o conteúdo está centralizado em `src/data/profile.ts`. Para atualizar:

1. **Experiência profissional**: Edite o array `experience`
2. **Skills**: Atualize o objeto `skills` com categorias e níveis
3. **Educação**: Modifique o array `education`
4. **Certificações**: Atualize o array `certifications`
5. **Informações pessoais**: Edite `name`, `email`, `linkedin`, etc.

## 🚢 Deployment

### Automático (Recomendado)

O projeto usa **GitHub Actions** para deploy automático:

1. Faça push para a branch `main`
2. GitHub Actions automaticamente:
   - Instala dependências
   - Compila o projeto
   - Faz deploy para GitHub Pages

### Manual

Para fazer build local:

```bash
npm run build
```

Os arquivos estáticos serão gerados em `./out/`. Você pode servir dessa pasta com qualquer host.

## 🔧 Build e Format

```bash
# Development server
npm run dev

# Build para produção
npm run build

# Lint com ESLint
npm run lint

# Preview do build
npm start
```

## 📱 Responsividade

O portfólio é totalmente responsivo e otimizado para:
- 📱 Mobile (375px+)
- 📱 Tablet (768px+)
- 🖥️ Desktop (1920px+)

## 🎨 Customização

### Cores

As cores estão definidas no `tailwind.config.ts` e usam a paleta de cores padrão do Tailwind. Para customizar:

1. Edite `tailwind.config.ts`
2. Atualize as referências de cores nos componentes

### Fonts

As fonts padrão são `Geist` e `Geist Mono` (configuradas em `src/app/layout.tsx`). Para mudar:

1. Importe uma nova font do Google Fonts
2. Atualize a variável CSS no layout

## 🚀 Performance

- ✅ Next.js com App Router otimizado
- ✅ CSS-in-JS com Tailwind (sem JavaScript desnecessário)
- ✅ Imagens otimizadas
- ✅ Sem dependências externas pesadas

## 📜 Licença

MIT

## 👤 Autor

**Rafael Carlos Silverio**

- Email: [rafacarlossilver@yahoo.com.br](mailto:rafacarlossilver@yahoo.com.br)
- LinkedIn: [@rafael-carlos-developer](https://www.linkedin.com/in/rafael-carlos-developer/)
- GitHub: [@rafacarlossilver](https://github.com/rafacarlossilver)

---

**Desenvolvido com ❤️ usando Next.js, React e Tailwind CSS**
