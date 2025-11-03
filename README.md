# Tela Ver Produtos - Galeria de Tintas

Uma aplicação React moderna para visualização e gerenciamento de produtos de tintas. A aplicação oferece uma interface intuitiva com filtros avançados e informações detalhadas sobre cada produto.

## 🎨 Características

- **Galeria de Produtos**: Exibição elegante de tintas com informações detalhadas
- **Filtros Inteligentes**: Filtrar por tipo de tinta e buscar por nome, marca ou cor
- **Informações Completas**: Cada produto exibe:
  - Nome e marca
  - Descrição detalhada
  - Cor com preview visual
  - Tipo de tinta (Acrílica, Látex, Esmalte, Epóxi, etc.)
  - Acabamento (Fosco, Acetinado, Brilho)
  - Rendimento em m²/L
  - Volume disponível
  - Tempo de secagem
  - Aplicação recomendada
  - Preço
  - Características principais

- **Design Responsivo**: Interface otimizada para desktop, tablet e mobile
- **Experiência Interativa**: Animações suaves e feedback visual

## 🚀 Tecnologias Utilizadas

- **React 18**: Biblioteca JavaScript para construção de interfaces
- **Vite**: Build tool moderno e rápido
- **CSS3**: Estilos modernos com Grid e Flexbox
- **JavaScript ES6+**: Sintaxe moderna do JavaScript

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/silvak1ing/TelaVerProdutos.git
cd TelaVerProdutos
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador e acesse:
```
http://localhost:5173
```

## 📁 Estrutura do Projeto

```
TelaVerProdutos/
├── src/
│   ├── components/
│   │   └── ProductCard.jsx          # Componente de exibição de produto
│   ├── pages/
│   │   └── ProductsGallery.jsx      # Página principal da galeria
│   ├── data/
│   │   └── products.js              # Dados dos produtos de tintas
│   ├── styles/
│   │   ├── ProductCard.css          # Estilos do componente
│   │   └── ProductsGallery.css      # Estilos da galeria
│   ├── App.jsx                      # Componente raiz
│   ├── App.css                      # Estilos globais
│   ├── main.jsx                     # Ponto de entrada
│   └── index.css                    # Estilos base
├── public/
├── index.html                       # HTML principal
├── package.json                     # Dependências do projeto
├── vite.config.js                   # Configuração do Vite
└── README.md                        # Este arquivo
```

## 🎯 Como Usar

1. **Buscar Produtos**: Use a barra de busca para encontrar tintas por nome, marca ou cor
2. **Filtrar por Tipo**: Clique nos botões de filtro para visualizar apenas um tipo de tinta
3. **Visualizar Detalhes**: Cada card exibe informações completas do produto
4. **Adicionar ao Carrinho**: Clique no botão "Adicionar ao Carrinho" (funcionalidade a ser implementada)

## 🎨 Dados de Produtos

O arquivo `src/data/products.js` contém um array de produtos com as seguintes informações:

- **id**: Identificador único
- **name**: Nome do produto
- **brand**: Marca fabricante
- **description**: Descrição detalhada
- **color**: Nome da cor
- **colorHex**: Código hexadecimal da cor
- **type**: Tipo de tinta
- **finish**: Tipo de acabamento
- **yield**: Rendimento em m²/L
- **volume**: Volume do recipiente
- **dryingTime**: Tempo de secagem
- **application**: Aplicação recomendada
- **price**: Preço em reais
- **image**: URL da imagem do produto
- **features**: Array com características principais

## 🔧 Desenvolvimento

### Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Lint do código
npm run lint
```

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints em:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: Até 767px

## 🎨 Paleta de Cores

- **Primária**: #3498db (Azul)
- **Secundária**: #2ecc71 (Verde)
- **Fundo**: #f5f7fa (Cinza claro)
- **Texto**: #1a1a1a (Preto)
- **Destaque**: #2c3e50 (Cinza escuro)

## 📝 Próximas Funcionalidades

- [ ] Carrinho de compras funcional
- [ ] Sistema de login e autenticação
- [ ] Integração com banco de dados
- [ ] Avaliações de produtos
- [ ] Comparação entre produtos
- [ ] Filtros avançados (faixa de preço, rendimento, etc.)
- [ ] Página de detalhes do produto
- [ ] Sistema de recomendações

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👥 Contribuições

Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request com suas sugestões e melhorias.

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através do repositório GitHub.

---

Desenvolvido com ❤️ usando React e Vite
