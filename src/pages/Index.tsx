import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import { posts } from "@/data/posts";

const Index = () => {
  return (
<div className="min-h-screen bg-background">
      <Header postCount={posts.length} />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
