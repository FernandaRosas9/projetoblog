"use client";

import { useState, useMemo, useEffect } from "react";
import BlogPostCard from "@/app/components/Cards";
import { blogPosts } from "@/lib/blogPost";


type FilterOption = "all" | "faved" | "loved";

export default function Home() {
  const [filter, setFilter] = useState<FilterOption>("all");
  const [searchTerm] = useState("");
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

    let filtered = blogPosts;

    if (filter === "faved") {
      filtered = blogPosts.filter((post) => userFaved.includes(post.slug));
    } else if (filter === "loved") {
      filtered = blogPosts.filter((post) => userLoved.includes(post.slug));
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
  }, [filter, searchTerm, reactionTrigger, userId]);

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center md:justify-end space-x-4 mb-8">
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
                ? "bg-indigo-600 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Favoritos
          </button>
          <button
            onClick={() => setFilter("loved")}
            className={`px-4 py-2 rounded-full font-medium ${
              filter === "loved"
                ? "bg-indigo-600 text-white shadow"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Amados
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogPostCard
                key={post.slug}
                post={post}
                onReaction={onReaction}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-xl py-10">
              Nenhum post encontrado.
            </div>
          )}
        </div>
      </main>
    </>
  );
}
