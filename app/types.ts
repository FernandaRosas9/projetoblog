export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  author: string;
  date: string;
  summary?: string;
  thumbnailUrl?: string;
  content: string;
};
