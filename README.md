```markdown
# 🏥 VidaPlus - Sistema de Gestão Hospitalar e Serviços de Saúde (SGHSS)

## 📌 Sobre o Projeto

Este é o **front-end** do Sistema de Gestão Hospitalar e Serviços de Saúde (SGHSS) desenvolvido para a instituição **VidaPlus**, como parte do Projeto Multidisciplinar do curso de **Análise e Desenvolvimento de Sistemas** da **UNINTER**.

O sistema oferece uma interface web completa, responsiva e acessível para gestão de:
- Pacientes (cadastro, prontuário, histórico)
- Profissionais de saúde
- Agendamentos de consultas (presenciais e teleconsultas)
- Leitos hospitalares
- Telemedicina (simulação)
- Relatórios e indicadores

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| HTML5 | Estruturação semântica das páginas |
| CSS3 | Estilização visual, responsividade e animações |
| JavaScript (Vanilla) | Interatividade, validações, dados mockados e gráficos |
| Chart.js | Geração de gráficos na tela de relatórios |
| Font Awesome | Ícones vetoriais para melhor experiência visual |
| Google Fonts (Inter) | Tipografia moderna e legível |
| Git / GitHub | Versionamento e hospedagem do código |
| GitHub Pages | Publicação do sistema na web |

---

## 📁 Estrutura do Projeto

```
sghss-frontend/
│
├── index.html                 # Tela de Login
├── dashboard.html             # Dashboard principal
├── pacientes.html             # Lista de pacientes
├── paciente-cadastro.html     # Cadastro de paciente
├── paciente-prontuario.html   # Prontuário do paciente
├── agendamentos.html          # Agendamentos
├── profissionais.html         # Profissionais de saúde
├── leitos.html                # Gestão de leitos
├── telemedicina.html          # Telemedicina
├── relatorios.html            # Relatórios com gráficos
├── perfil.html                # Perfil do usuário
│
└── js/
    └── mock-data.js           # Dados mockados (pacientes, profissionais, agendamentos, leitos, prontuários)
```

**Total de telas implementadas:** 11

---

## 🔐 Credenciais de Acesso (Demonstração)

| Campo | Valor |
|-------|-------|
| **E-mail** | `admin@vidaplus.com` |
| **Senha** | `123456` |

---

## 🖥️ Como Executar Localmente

### Pré-requisitos
- Navegador web (Chrome, Firefox, Edge ou Safari)
- Git (opcional, para clonar o repositório)

### Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/nescossio/sghss-frontend.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd sghss-frontend
   ```

3. **Abra o arquivo `index.html` no navegador:**
   - Clique duas vezes no arquivo
   - Ou utilize uma extensão como "Live Server" no VS Code

4. **Faça login com as credenciais acima**

---

## 🌍 Acesse Online (GitHub Pages)

O sistema está publicado e pode ser acessado através do link:

🔗 **[https://nescossio.github.io/sghss-frontend/](https://nescossio.github.io/sghss-frontend/)**

---

## 📱 Responsividade

O sistema foi desenvolvido com abordagem **mobile-first**, adaptando-se a diferentes tamanhos de tela:

| Dispositivo | Largura | Comportamento |
|-------------|---------|---------------|
| **Mobile** | até 768px | Menu lateral oculto (hambúrguer), cards empilhados |
| **Tablet** | 768px - 1024px | Menu reduzido, grid de cards com 2 colunas |
| **Desktop** | acima de 1024px | Menu lateral fixo, layout completo |

---

## ✅ Funcionalidades Implementadas

- [x] Login com validação e proteção de rotas
- [x] Dashboard com cards de métricas e tabela de consultas
- [x] Listagem de pacientes com busca por nome, CPF ou telefone
- [x] Cadastro de paciente com validação de CPF e telefone em tempo real
- [x] Prontuário do paciente (histórico, alergias, exames, consultas)
- [x] Agendamentos com filtros por data e tipo
- [x] Cancelamento de agendamentos
- [x] Listagem de profissionais de saúde
- [x] Gestão de leitos com mapa visual interativo
- [x] Telemedicina com simulação de videochamada e prescrição
- [x] Relatórios com gráficos interativos (Chart.js)
- [x] Perfil do usuário com edição de dados
- [x] Logout com redirecionamento para login
- [x] Design responsivo (mobile, tablet, desktop)
- [x] Validações visuais em formulários
- [x] Proteção de rotas (redireciona para login se não autenticado)

---

## 📋 Lista de Telas

| # | Tela | Arquivo | Descrição |
|---|------|---------|-----------|
| 1 | Login | `index.html` | Autenticação de usuários |
| 2 | Dashboard | `dashboard.html` | Visão geral com métricas |
| 3 | Lista de Pacientes | `pacientes.html` | Tabela com busca e ações |
| 4 | Cadastro de Paciente | `paciente-cadastro.html` | Formulário com validações |
| 5 | Prontuário | `paciente-prontuario.html` | Histórico clínico completo |
| 6 | Agendamentos | `agendamentos.html` | Gestão de consultas |
| 7 | Profissionais | `profissionais.html` | Cards com dados dos médicos |
| 8 | Gestão de Leitos | `leitos.html` | Mapa visual de leitos |
| 9 | Telemedicina | `telemedicina.html` | Simulação de videochamada |
| 10 | Relatórios | `relatorios.html` | Gráficos e indicadores |
| 11 | Perfil | `perfil.html` | Edição de dados do usuário |

## 📄 Documentação do Projeto

A documentação completa do projeto (PDF) inclui:
- Capa e sumário
- Introdução e contexto
- Requisitos funcionais e não funcionais
- Diagrama de Casos de Uso
- Diagrama Entidade-Relacionamento (DER)
- Wireframes das telas (Figma)
- Prints das telas implementadas
- Plano de testes detalhado
- Conclusão e referências

---

## 👨‍🎓 Informações Acadêmicas

| Campo | Informação |
|-------|-------------|
| **Curso** | Tecnologia em Análise e Desenvolvimento de Sistemas (EaD) |
| **Disciplina** | Projeto Multidisciplinar |
| **Instituição** | UNINTER - Centro Universitário Internacional |
| **Ênfase** | Front-end |
| **Professor** | Prof. Winston Sen Lun Fung, Me. |

---

## 🔧 Melhorias Futuras

- [ ] Integração com backend real (API REST)
- [ ] Autenticação com JWT
- [ ] Banco de dados real (PostgreSQL/MySQL)
- [ ] Testes automatizados com Cypress ou Selenium
- [ ] Notificações em tempo real (WebSocket)
- [ ] Modo offline com PWA (Progressive Web App)
- [ ] Videochamada real (WebRTC)

---

## 📝 Licença

Este projeto foi desenvolvido para fins acadêmicos, como parte do curso de Análise e Desenvolvimento de Sistemas da UNINTER.

---

## ✨ Agradecimentos

- Professores e tutores da UNINTER pelo suporte
- Comunidade de desenvolvimento open-source pelas ferramentas gratuitas
- Figma, Chart.js, Font Awesome e Google Fonts

---

## 📞 Contato

**Aluno:** Nathalia Escossio Cavalcante
**RU:** 4888825
**GitHub:** https://github.com/nescossio/sghss-frontend.git

---

⭐ Se você gostou deste projeto, deixe uma estrela no repositório!
```

---

