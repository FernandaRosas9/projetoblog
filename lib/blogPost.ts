// Este arquivo contém a lista de posts e o tipo de dado do post
// para que possa ser usado em todas as páginas do blog.

// O tipo de dado para um post do blog.
// Usamos `export` para que ele possa ser importado em outros arquivos.
export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  author: string;
  date: string;
  content: string;
  summary?: string;
  thumbnailUrl?: string;
};

// A lista completa de posts do blog.
// Usamos `export` para que as páginas de lista e de detalhes possam acessá-la.
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "por-que-usar-typescript",
    title: "Por Que Você Deveria Usar TypeScript?",
    author: "Fernanda Rosas",
    date: "16 de Setembro, 2024",
    summary:
      "Descubra como o TypeScript pode elevar a qualidade do seu código, tornando-o mais seguro, legível e escalável. Um guia essencial para desenvolvedores que desejam ir além do JavaScript.",
    thumbnailUrl: "/1.jpg",
    content: `
      <p>Se você já trabalha com JavaScript, o TypeScript oferece uma camada extra de segurança e produtividade. Ele adiciona tipagem estática ao código, o que significa que muitos erros comuns podem ser detectados antes mesmo de você rodar o seu código.</p>
      <p>Além de ajudar a evitar bugs, o TypeScript melhora a experiência de desenvolvimento com recursos de autocompletar e refatoração mais inteligentes em seu editor de código. Em projetos maiores, a legibilidade e a manutenção do código se tornam muito mais fáceis.</p>
      <p>Usar TypeScript é um investimento na qualidade e escalabilidade do seu projeto.</p>
    `,
  },
  {
    id: 2,
    slug: "dicas-de-tailwind-css",
    title: "5 Dicas Essenciais de Tailwind CSS",
    author: "Maria Oliveira",
    date: "08 de Setembro, 2024",
    summary:
      "Aprenda a otimizar seu fluxo de trabalho e construir interfaces responsivas de forma mais rápida e eficiente utilizando as classes utilitárias do Tailwind.",
    thumbnailUrl: "/2.jpg",
    content: `
      <h2>1. Use o JIT Mode</h2>
      <p>O Just-in-Time Mode compila as classes CSS à medida que você as escreve, tornando o desenvolvimento muito mais rápido.</p>
      <h2>2. Adote o Responsive Design com classes de utilidade</h2>
      <p>Classes como <code>sm:</code>, <code>md:</code> e <code>lg:</code> facilitam a criação de layouts responsivos, adaptando seu design para diferentes tamanhos de tela.</p>
      <h2>3. Extraia Componentes</h2>
      <p>Para evitar a repetição de código, crie componentes reutilizáveis. Isso mantém seu código organizado e fácil de manter.</p>
      <h2>4. Use Plugins</h2>
      <p>Plugins como o <code>@tailwindcss/typography</code> simplificam a estilização de conteúdo gerado por Markdown, como este post!</p>
      <h2>5. Use Variantes</h2>
      <p>As variantes permitem aplicar estilos com base no estado de um elemento, como <code>hover:</code>, <code>focus:</code>, e <code>active:</code>, para criar interações dinâmicas.</p>
    `,
  },
  {
    id: 3,
    slug: "gerenciando-estado-com-react",
    title: "Gerenciamento de Estado no React (e Next.js)",
    author: "Pedro Rocha",
    date: "05 de Setembro, 2024",
    summary:
      "Uma visão geral das diferentes abordagens para gerenciar o estado da sua aplicação, de useState a contextos e bibliotecas como Zustand.",
    thumbnailUrl: "/3.jpg",
    content: `
      <h3>useState</h3>
      <p>Para estado local de componentes, <code>useState</code> é a ferramenta ideal. É simples, direto e perfeito para gerenciar o estado dentro de um único componente.</p>
      <h3>Context API</h3>
      <p>Quando múltiplos componentes precisam de acesso ao mesmo estado, mas não estão diretamente relacionados (por exemplo, um tema de cor), a Context API é a solução nativa do React.</p>
      <h3>Gerenciadores de Estado (Zustand)</h3>
      <p>Para aplicações maiores, bibliotecas como o Zustand simplificam a gestão de estado global, oferecendo uma abordagem mais robusta e performática do que a Context API pura.</p>
    `,
  },
  {
    id: 4,
    slug: "comece-com-firebase",
    title: "Comece com Firebase: Seu Backend na Nuvem",
    author: "Fernanda Rosas",
    date: "18 de Setembro, 2024",
    summary:
      "Um guia rápido sobre como configurar e usar o Firebase para adicionar funcionalidades de backend, como banco de dados em tempo real e autenticação, ao seu projeto Next.js.",
    thumbnailUrl: "/4.jpg",
    content: `
      <p>O Firebase é uma plataforma completa de desenvolvimento de aplicativos que te ajuda a construir e expandir seus projetos de forma rápida, sem precisar gerenciar um servidor próprio. Ele é perfeito para um blog, pois oferece funcionalidades como um banco de dados em tempo real (Firestore) e autenticação de usuários, tudo pronto para usar.</p>
      <p>Com o Firestore, você pode armazenar dados de forma segura na nuvem e, com a sincronização em tempo real, as reações dos seus posts podem ser atualizadas instantaneamente para todos os usuários, sem a necessidade de recarregar a página.</p>
      <p>Começar é simples: basta criar um projeto no console do Firebase e instalar os SDKs necessários. Em poucos minutos, você terá um backend robusto para sua aplicação.</p>
    `,
  },
  {
    id: 5,
    slug: "estilizando-com-tailwind-typography",
    title: "Estilizando Conteúdo com Tailwind Typography",
    author: "Fernanda Rosas",
    date: "20 de Setembro, 2024",
    summary:
      "Aprenda a usar o plugin @tailwindcss/typography para estilizar automaticamente blocos de conteúdo HTML com estilos tipográficos elegantes e consistentes.",
    thumbnailUrl: "/5.jpg",
    content: `
      <p>Se você já usou frameworks CSS, sabe que estilizar conteúdo em HTML puro pode ser um desafio. É por isso que o plugin <code>@tailwindcss/typography</code> foi criado. Ele fornece um conjunto de estilos tipográficos de "bom senso" que podem ser aplicados a qualquer bloco de HTML, como o conteúdo de um post de blog.</p>
      <p>Basta adicionar a classe <code>prose</code> a um elemento pai, e todos os elementos HTML dentro dele, como parágrafos, cabeçalhos e listas, serão estilizados automaticamente com um visual limpo e profissional.</p>
      <p>Isso economiza um tempo enorme e garante que a tipografia do seu blog seja consistente e legível, sem que você precise escrever CSS para cada elemento.</p>
    `,
  },
  {
    id: 6,
    slug: "dicas-essenciais-para-o-hook-useeffect",
    title: "Dicas Essenciais para Usar o `useEffect` Corretamente",
    author: "Fernanda Rosas",
    date: "15 de Setembro, 2024",
    summary:
      "Neste post, exploraremos o hook useEffect em React, um guia para entender seu ciclo de vida, como gerenciar dependências, e a importância de limpar os efeitos para um código limpo e eficiente.",
    thumbnailUrl: "/6.jpg",
    content:
      `
      <h1>Dicas Essenciais para Usar o ` +
      "`" +
      `useEffect` +
      "`" +
      ` Corretamente</h1>
      <p>O hook ` +
      "`" +
      `useEffect` +
      "`" +
      ` é uma das ferramentas mais poderosas no React, mas também pode ser uma fonte de frustração se não for usado da maneira certa. Ele nos permite sincronizar um componente com sistemas externos, como buscar dados de uma API, assinar eventos ou manipular o DOM. No entanto, para aproveitar seu poder sem criar bugs, é crucial entender suas regras.</p>
      <h2>1. Entendendo o Ciclo de Vida do ` +
      "`" +
      `useEffect` +
      "`" +
      `</h2>
      <p>Em sua essência, o ` +
      "`" +
      `useEffect` +
      "`" +
      ` é executado após cada renderização do seu componente. A forma como você o usa depende do que você coloca (ou não coloca) no **array de dependências**, que é o segundo argumento opcional.</p>
      <ul>
        <li>
          <strong>Com um array de dependências vazio ` +
      "`" +
      `[]` +
      "`" +
      `</strong>: O efeito é executado apenas uma vez, após a primeira renderização. Isso é ideal para inicializar coisas que só precisam acontecer uma vez, como uma chamada de API para carregar dados iniciais.
        </li>
        <li>
          <strong>Com um array de dependências com valores ` +
      "`" +
      `[dependencia1, dependencia2]` +
      "`" +
      `</strong>: O efeito é executado sempre que qualquer um desses valores mudar. Essa é a forma mais comum de usar o ` +
      "`" +
      `useEffect` +
      "`" +
      ` e é essencial para manter o estado da sua aplicação atualizado.
        </li>
        <li>
          <strong>Sem array de dependências</strong>: O efeito é executado após *cada* renderização do componente. Isso raramente é o que você quer, pois pode causar loops infinitos e problemas de performance.
        </li>
      </ul>
      <h2>2. Dependências: Não Minta para o React!</h2>
      <p>O erro mais comum ao usar o ` +
      "`" +
      `useEffect` +
      "`" +
      ` é esquecer de incluir uma dependência no array. O React usa esse array para saber quando o efeito deve ser executado novamente. Se você usar uma variável de estado ou uma prop dentro do seu efeito e não a incluir nas dependências, o efeito usará um valor antigo e "congelado", levando a bugs difíceis de rastrear.</p>
      <p>Sempre inclua todas as variáveis, props e funções que o seu efeito precisa para funcionar. O React linter (o "sublinhado vermelho" no seu editor) é seu melhor amigo aqui, ele vai te alertar quando algo estiver faltando.</p>
      <h2>3. Limpando os Efeitos para Evitar Vazamentos de Memória</h2>
      <p>Alguns efeitos criam recursos que precisam ser removidos quando o componente é desmontado para evitar vazamentos de memória. Pense em assinaturas de eventos (como redimensionamento da janela) ou temporizadores (como ` +
      "`" +
      `setTimeout` +
      "`" +
      ` ou ` +
      "`" +
      `setInterval` +
      "`" +
      `).</p>
      <p>Para limpar um efeito, o ` +
      "`" +
      `useEffect` +
      "`" +
      ` permite que você retorne uma função. Essa função de "limpeza" será executada quando o componente for desmontado ou antes que o efeito seja re-executado devido a uma mudança nas dependências.</p>
      <pre><code>// Exemplo de como usar a função de limpeza\nuseEffect(() => {\n  const timer = setInterval(() => {\n    // faz algo a cada segundo\n  }, 1000);\n\n  // A função de limpeza retorna a função para o clearInterval\n  return () => {\n    clearInterval(timer);\n  };\n}, []);</code></pre>
      <h2>4. Um Efeito por Responsabilidade</h2>
      <p>Não tente colocar múltiplas responsabilidades em um único ` +
      "`" +
      `useEffect` +
      "`" +
      `. É perfeitamente aceitável, e até recomendado, usar múltiplos ` +
      "`" +
      `useEffect` +
      "`" +
      `s em um único componente. Cada um pode lidar com uma tarefa específica, com seu próprio array de dependências. Isso torna o seu código mais legível, fácil de testar e depurar.</p>
      <h2>Conclusão</h2>
      <p>Dominar o ` +
      "`" +
      `useEffect` +
      "`" +
      ` é fundamental para se tornar um desenvolvedor React proficiente. Lembre-se dessas regras de ouro: pense no array de dependências, use a função de limpeza quando necessário e separe suas lógicas em múltiplos efeitos.</p>
      <p>Se você seguir essas dicas, seus componentes serão mais eficientes, sem bugs e muito mais fáceis de manter.</p>
    `,
  },
];