import Link from "next/link";
import { blogPosts } from "@/lib/blogPost"; 

type PostPageProps = {
  params: {
    slug: string;
  };
};


export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;

  
  const post = blogPosts.find((p) => p.slug === slug);


  if (!post) {
    return (
      <main className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Post não encontrado
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          O post que você está procurando não existe.
        </p>
        <Link href="/" className="text-indigo-600 hover:underline">
          &larr; Voltar para a página inicial
        </Link>
      </main>
    );
  }

  // Renderiza o post
  return (
    <article className="m-20 max-w-4xl mx-auto py-8 px-4 bg-white rounded-lg shadow-lg">
      <Link
        href="/"
        className="text-indigo-600 hover:underline mb-6 inline-block"
      >
        &larr; Voltar para o Blog
      </Link>

      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 mb-2">
        {post.title}
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        Por {post.author} em {post.date}
      </p>

      <div
        className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
