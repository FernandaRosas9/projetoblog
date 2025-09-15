"use client";

import { useState, useMemo, useEffect } from "react";
import BlogPostCard from "@/app/components/Cards";
import { BlogPost } from "@/app/types";

type FilterOption = "all" | "faved" | "loved";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [filter, setFilter] = useState<FilterOption>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [reactionTrigger, setReactionTrigger] = useState(0);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    let currentUserId = localStorage.getItem("userId");
    if (!currentUserId) {
      currentUserId = `anon-${Math.random().toString(36).slice(2, 11)}`;
      localStorage.setItem("userId", currentUserId);
    }
    setUserId(currentUserId);
  }, []);

  const onReaction = () => {
    setReactionTrigger((prev) => prev + 1);
  };

  const filteredPosts = useMemo(() => {
    const userFaved = userId
      ? Object.keys(localStorage)
          .filter((key) => key.startsWith(`faved-${userId}`))
          .map((key) => key.substring(`faved-${userId}-`.length))
      : [];
    const userLoved = userId
      ? Object.keys(localStorage)
          .filter((key) => key.startsWith(`loved-${userId}`))
          .map((key) => key.substring(`loved-${userId}-`.length))
      : [];

    let filtered = posts;

    if (filter === "faved") {
      filtered = posts.filter((post) => userFaved.includes(post.slug));
    } else if (filter === "loved") {
      filtered = posts.filter((post) => userLoved.includes(post.slug));
    }

    if (searchTerm) {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(lowercasedSearchTerm) ||
          (post.summary &&
            post.summary.toLowerCase().includes(lowercasedSearchTerm)) ||
          post.author.toLowerCase().includes(lowercasedSearchTerm)
      );
    }
    return filtered;
  }, [filter, searchTerm, reactionTrigger, userId, posts]);

  return (
    <>
      <div className="mt-4 flex justify-center md:justify-end space-x-4 mb-8">
        <input
          type="text"
          placeholder="Buscar posts por título, autor ou resumo..."
          className="bg-white w-full m-1 px-5 py-1 text-md border-2 border-white rounded-full shadow-sm focus:outline-none focus:border-indigo-500 transition-colors"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full font-medium ${
            filter === "all"
              ? "bg-indigo-600 text-white shadow"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setFilter("faved")}
          className={`px-4 py-2 rounded-full font-medium ${
            filter === "faved"
              ? "bg-yellow-600 text-white shadow"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Favoritos
        </button>
        <button
          onClick={() => setFilter("loved")}
          className={`px-4 py-2 rounded-full font-medium ${
            filter === "loved"
              ? "bg-pink-600 text-white shadow"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Amados
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} onReaction={onReaction} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-xl py-10">
            Nenhum post encontrado.
          </div>
        )}
      </div>
    </>
  );
}
