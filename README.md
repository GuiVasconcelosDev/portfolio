# Portfólio Full Stack

Portfólio profissional de Guilherme Vasconcelos (eu), construído com React e TypeScript no frontend e uma API Spring Boot no backend. O projeto apresenta perfil, competências e projetos, além de receber mensagens de contato e propostas de recrutadores.

## Demonstração

[portfolio-dev-full.vercel.app](https://portfolio-dev-full.vercel.app)

## Funcionalidades

- Apresentação profissional e seção sobre o desenvolvedor
- Exibição de tecnologias e projetos por categoria
- Formulário de contato integrado ao backend
- Formulário para propostas de recrutadores
- Animações e interface responsiva
- Persistência de mensagens e propostas em PostgreSQL
- Configuração de CORS por variável de ambiente

## Tecnologias

### Frontend

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- Motion
- Lucide React
- ESLint

### Backend

- Java 25
- Spring Boot 4.1.0
- Spring Web MVC
- Spring Data JPA
- PostgreSQL
- Lombok
- Maven
- Docker

## Estrutura

```text
portfolio/
├── frontend/   # Interface React
└── backend/    # API Spring Boot
```

## Executando localmente

### Backend

Configure as variáveis:

```bash
export DB_URL=jdbc:postgresql://localhost:5432/portfolio
export DB_USERNAME=postgres
export DB_PASSWORD=sua_senha
export FRONTEND_URL=http://localhost:5173
```

Depois execute:

```bash
cd backend
./mvnw spring-boot:run
```

Caso o Maven Wrapper não esteja disponível, use `mvn spring-boot:run`.

### Frontend

Crie `frontend/.env.local`:

```env
VITE_API_URL=http://localhost:8080
```

Instale as dependências:

```bash
cd frontend
npm install
npm run dev
```

A interface ficará disponível em `http://localhost:5173`.

## Endpoints do backend

| Método | Endpoint | Descrição |
|---|---|---|
| `POST` | `/api/contato` | Registra uma mensagem |
| `GET` | `/api/contato` | Lista mensagens armazenadas |
| `POST` | `/api/propostas` | Registra uma proposta |
| `GET` | `/api/propostas` | Lista propostas armazenadas |

## Comandos do frontend

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run lint     # análise estática
npm run preview  # prévia do build
```

## Testes do backend

```bash
cd backend
mvn test
```

## Segurança

Use somente variáveis de ambiente para credenciais. Se uma credencial real já tiver sido versionada, altere-a no provedor e remova o valor do histórico do Git.

## Deploy

- Frontend: preparado para Vercel
- Backend: pode ser empacotado com Maven ou Docker
- Banco: PostgreSQL, incluindo serviços compatíveis como Supabase

No ambiente publicado, configure `VITE_API_URL`, `DB_URL`, `DB_USERNAME`, `DB_PASSWORD` e `FRONTEND_URL`.

## Autor

Desenvolvido por [Guilherme Vasconcelos](https://github.com/GuiVasconcelosDev).
