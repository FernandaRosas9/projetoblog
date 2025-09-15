"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blogPost";
import Reactions from "./Reactions";

// Define os tipos das props, incluindo a nova função onReaction
type BlogPostCardProps = {
  post: BlogPost;
  onReaction: () => void;
};

export default function BlogPostCard({ post, onReaction }: BlogPostCardProps) {
  return (
    <div className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white flex flex-col h-full">
      <Link href={`/blog_posts/${post.slug}`} className="block">
        {post.thumbnailUrl && (
          <div className="w-full h-48 rounded-t-lg overflow-hidden">
            <Image
              src={post.thumbnailUrl}
              alt={`Thumbnail do post: ${post.title}`}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/blog_posts/${post.slug}`} className="block">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {post.title}
          </h2>
        </Link>
        <p className="text-sm text-gray-500 mb-4">
          Por {post.author} em {post.date}
        </p>
        {post.summary && (
          <p className="text-gray-600 line-clamp-3 mb-4">{post.summary}</p>
        )}
        <div className="mt-auto">
          <hr className="border-t border-gray-300 my-2" />
          <div className="flex justify-end">
            <Reactions postId={post.slug} onReaction={onReaction} />
          </div>
        </div>
      </div>
    </div>
  );
}
