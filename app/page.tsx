import { blogPosts } from "@/lib/blogPost";
import Image from "next/image";
import BlogList from "@/app/components/BlogList";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8 text-center flex flex-col items-center">
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
      <BlogList posts={blogPosts} />
    </main>
  );
}
