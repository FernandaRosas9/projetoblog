"use client";

import { useState, useEffect } from "react";
import BlogPostCard from "@/app/components/Cards";
import { blogPosts, BlogPost } from "@/lib/blogPost";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [searchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [reactionTrigger, setReactionTrigger] = useState(0);

  const handleReaction = () => {
    setReactionTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    // Verifica o userId no localStorage ou cria um novo
    let currentUserId = localStorage.getItem("userId");
    if (!currentUserId) {
      currentUserId = `anon-${Math.random().toString(36).slice(2, 11)}`;
      localStorage.setItem("userId", currentUserId);
    }

    let postsToFilter = blogPosts;

    if (filter === "faved") {
      const favedSlugs = blogPosts
        .filter(
          (post) =>
            localStorage.getItem(`faved-${currentUserId}-${post.slug}`) ===
            "true"
        )
        .map((post) => post.slug);
      postsToFilter = blogPosts.filter((post) =>
        favedSlugs.includes(post.slug)
      );
    } else if (filter === "loved") {
      const lovedSlugs = blogPosts
        .filter(
          (post) =>
            localStorage.getItem(`loved-${currentUserId}-${post.slug}`) ===
            "true"
        )
        .map((post) => post.slug);
      postsToFilter = blogPosts.filter((post) =>
        lovedSlugs.includes(post.slug)
      );
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const searchedPosts = postsToFilter.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        (post.summary &&
          post.summary.toLowerCase().includes(lowerCaseSearchTerm)) ||
        post.author.toLowerCase().includes(lowerCaseSearchTerm)
    );

    setFilteredPosts(searchedPosts);
  }, [filter, searchTerm, reactionTrigger]);

  return (
    <>
      <div className="space-y-8 container mx-auto px-4 py-8">
        {/* Seção de Título, Imagem e Parágrafo - Exclusiva da Página Inicial */}
        <div className="text-center flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="logo do blog"
            width={400}
            height={200}
            className="mb-4"
          />
          <p className="text-xl text-white">
            Últimos posts, dicas e inspirações de tecnologia.
          </p>
        </div>

        {/* Botões de Filtro */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setFilter("all")}
            className={`py-2 px-6 rounded-md font-semibold transition-colors ${
              filter === "all"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter("faved")}
            className={`py-2 px-6 rounded-md font-semibold transition-colors ${
              filter === "faved"
                ? "bg-yellow-500 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Favoritos
          </button>
          <button
            onClick={() => setFilter("loved")}
            className={`py-2 px-6 rounded-md font-semibold transition-colors ${
              filter === "loved"
                ? "bg-[#DD68FA] text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Amados
          </button>
        </div>

        {/* Grid de posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post: BlogPost) => (
              <BlogPostCard
                key={post.id}
                post={post}
                onReaction={handleReaction}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-lg text-gray-600">
                Nenhum post encontrado com este filtro.
              </p>
            </div>
          )}
        </div>

        {/* Link para a página "Sobre" */}
        <div className="text-center mt-10">
          <Link
            href="/about"
            className="text-indigo-600 hover:underline font-medium"
          >
            Leia mais sobre o projeto &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}
