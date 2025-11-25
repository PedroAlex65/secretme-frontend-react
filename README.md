⚛️ SecretMe - Frontend (React)

Visão Geral do Projeto

Este repositório contém a interface de usuário (UI) desenvolvida em React (Vite) para a plataforma SecretMe. O projeto opera como um **cliente Full-Stack desacoplado**, consumindo a API RESTful de produção hospedada no Render (Spring Boot).

O Front-end é responsável por gerenciar a navegação do usuário, exibir dados de forma responsiva e garantir o fluxo seguro de envio de dados anônimos.

---

🛠️ Tecnologias e Estilização

* **Framework:** React (Vite)
* **Gerenciamento de Estado:** React Hooks (`useState`, `useEffect`)
* **Comunicação API:** Axios
* **Roteamento:** React Router DOM (`useSearchParams` para *query parameters*)
* **Estilização:** Styled Components (Design **Mobile First** e responsivo).

---

🔗 Integração com o Backend (Spring Boot API)

A comunicação com o serviço *backend* é feita exclusivamente via requisições HTTP, utilizando o **`secretToken`** como chave de autorização.

| Camada | Método | Endpoint Consumido | Detalhe da Integração |
| :--- | :--- | :--- | :--- |
| **Criação de Link** | `POST` | `/usuario` | Envia DTO com o `nick` e salva o `secretToken` no `localStorage`. |
| **Envio de Mensagem** | `POST` | `/api/mensagens?token={token}` | Usa o token da URL para identificar o destinatário. |
| **Visualização** | `GET` | `/api/mensagens/recebidas?token={token}` | Carrega a lista de mensagens recebidas, utilizando o token para autorização. |

**URL Base da API:** A URL de produção (`https://secretme-api-springboot.onrender.com`) é injetada através da variável de ambiente **`VITE_REACT_APP_API_URL`**.

---

✨ Destaques de Desenvolvimento

1.  **Tratamento de Estado:** Gerenciamento do `secretToken` no `localStorage` para manter a sessão do dono do link.
2.  **UX Aprimorada:** Implementação de *loading states* (ex: "Enviando...") nos botões de ação para melhorar o feedback durante a latência de API.
3.  **Responsividade Total:** Utilização de Media Queries para garantir que o *layout* seja funcional e esteticamente agradável em todos os dispositivos móveis.

---

⚙️ Configuração e Execução Local

1.  **Pré-requisito:** Certifique-se de que a API Spring Boot está rodando em sua URL de produção ou localmente.
2.  **Clonar este repositório:**
    `git clone https://github.com/PedroAlex65/secretme-frontend-react.git`
3.  **Instalar dependências:**
    `npm install`
4.  **Criar o arquivo `.env`:** Crie um arquivo `.env` na raiz do projeto para testes locais.
    * `VITE_REACT_APP_API_URL="http://localhost:8080"` (ou a URL de produção)
5.  **Iniciar o servidor:**
    `npm run dev`
