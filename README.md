# Clone TabNews

> Projeto desenvolvido do zero ao deploy com Next.js, React e testes automatizados.

## 📋 Descrição

Este é um projeto de aprendizado que demonstra como estruturar uma aplicação web com **Next.js** e **React**, incluindo testes automatizados com **Jest** e formatação de código com **Prettier**. O projeto inclui uma página inicial de boas-vindas e um módulo calculadora com testes.

## 🛠️ Tecnologias Utilizadas

- **Next.js** (^15.5.14) - Framework React com SSR e otimizações
- **React** (^19.2.4) - Biblioteca para construir interfaces
- **Jest** (^29.6.2) - Framework de testes
- **Prettier** (^3.8.1) - Formatador de código
- **Node.js** - Runtime JavaScript

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

Para verificar se tem Node.js instalado:

```bash
node --version
npm --version
```

## 🚀 Como Instalar

1. Clone o repositório:

```bash
git clone https://github.com/rodrigoteles85/clone-tabnews.git
cd clone-tabnews
```

2. Instale as dependências:

```bash
npm install
```

## ▶️ Como Rodar o Projeto

### Modo Desenvolvimento

Para rodar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Modo Produção

Para criar um build otimizado:

```bash
npm run build
npm start
```

## 🧪 Testes

### Executar testes uma vez:

```bash
npm test
```

### Executar testes em modo watch (reexecuta ao detectar mudanças):

```bash
npm run test:watch
```

## 🎨 Formatação de Código

### Verificar formatação:

```bash
npm run lint:check
```

### Corrigir formatação automaticamente:

```bash
npm run lint:fix
```

## 📁 Estrutura do Projeto

```
clone-tabnews/
├── models/
│   └── calculadora.js          # Módulo com função soma
├── pages/
│   └── index.js                # Página inicial (Home)
├── tests/
│   └── calculadora.test.js     # Testes do módulo calculadora
├── package.json                # Dependências e scripts
├── README.md                   # Este arquivo
└── .editorconfig              # Configuração de editor
```

### Descrição dos Módulos

- **`models/calculadora.js`**: Contém funções de cálculo. Atualmente inclui a função `soma()` que valida se o primeiro argumento é um número.
- **`pages/index.js`**: Página principal da aplicação (Next.js renderiza automaticamente as páginas desta pasta).
- **`tests/calculadora.test.js`**: Suite de testes para validar a função soma com diferentes cenários.

## 💡 Exemplo de Uso

### Usando a função calculadora:

```javascript
const { soma } = require("./models/calculadora.js");

console.log(soma(2, 2)); // Output: 4
console.log(soma(5, 100)); // Output: 105
console.log(soma("banana", 100)); // Output: "Erro"
```

## 🤝 Como Contribuir

1. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
2. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
3. Push para a branch (`git push origin feature/MinhaFeature`)
4. Abra um Pull Request

## 📝 Próximos Passos (Sugestões)

- [ ] Implementar mais funções na calculadora (subtração, multiplicação, divisão)
- [ ] Criar componentes React para UI da calculadora
- [ ] Adicionar validação de entrada do usuário
- [ ] Implementar CI/CD com GitHub Actions
- [ ] Fazer deploy na Vercel

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## ✍️ Autor

Rodrigo Teles

---

**Última atualização**: 2026
