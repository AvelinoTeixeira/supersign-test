Aplicativo de Assinatura de Documentos
Descrição
Este projeto é um aplicativo web para gerenciamento e assinatura digital de documentos. Desenvolvido com Next.js, Prisma e NextAuth.js, oferece uma solução segura e eficiente para o fluxo de trabalho de documentos.

Tecnologias Utilizadas
Framework: Next.js
Linguagem: TypeScript
ORM: Prisma
Autenticação: NextAuth.js
Estilização: TailwindCSS
Banco de Dados: PostgreSQL
Estrutura do Projeto
-supersign-test/
├── src/
│   ├── pages/
│   │   ├── api/          # Rotas da API
│   │   │   ├── auth/     # Autenticação (NextAuth.js)
│   │   │   │   └── [...nextauth].ts
│   │   │   ├── documents/ # Endpoints para manipulação de documentos
│   │   │   │   ├── upload.ts
│   │   │   │   ├── list.ts
│   │   │   │   ├── delete.ts
│   │   │   │   ├── sign.ts
│   │   ├── login.tsx       # Página de login
│   │   ├── dashboard.tsx   # Painel do usuário
│   ├── components/     # Componentes React reutilizáveis
│   │   ├── Navbar.tsx
│   │   ├── DocumentList.tsx
│   ├── styles/        # Estilos globais
│   │   └── globals.css
├── prisma/           # Configuração do Prisma
│   └── schema.prisma
├── public/           # Arquivos estáticos
├── .env              # Variáveis de ambiente
├── next.config.js     # Configuração do Next.js
├── package.json      # Dependências e scripts
└── tsconfig.json     # Configuração do TypeScript

Configuração
Clone o repositório:

Bash
1.Clone o repositório: `git clone https://github.com/AvelinoTeixeira/supersign-test`
2.Instale as dependências: `npm install`


npm install
Configure o banco de dados:

Adicione as seguintes variáveis de ambiente:

DATABASE_URL="postgresql://usuario:senha@localhost:5432/seu_banco"
NEXTAUTH_SECRET="sua_chave_secreta"
Execute as migrações do Prisma:

Bash

npx prisma migrate dev --name init
Inicie o servidor de desenvolvimento:

Bash

npm run dev
Autenticação
A autenticação é gerenciada pelo NextAuth.js, com configuração em pages/api/auth/[...nextauth].ts.

Funcionalidades: 
Upload de Documentos: Os usuários podem enviar documentos para a plataforma.
Listagem de Documentos: Exibição de todos os documentos disponíveis no painel do usuário.
Exclusão de Documentos: Remoção de documentos da plataforma.
Assinatura Digital: Os usuários podem assinar documentos digitalmente através da interface.
Licença
Este projeto é de código aberto e está disponível sob a licença MIT.