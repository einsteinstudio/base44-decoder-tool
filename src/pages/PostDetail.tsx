import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { posts } from "@/data/posts";
import { Button } from "@/components/ui/button";

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">帖子不存在</h1>
          <Link to="/">
            <Button variant="default">返回列表</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <Link to="/">
          <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回列表
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto bg-card rounded-lg overflow-hidden shadow-lg">
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-card-foreground mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 pb-6 border-b border-border mb-6">
              <Avatar className="w-12 h-12">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-medium">
                  {post.author.avatar}
                </div>
              </Avatar>
              <div>
                <div className="font-medium text-card-foreground">
                  {post.author.name}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              {post.content ? (
                post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <span className="text-sm text-muted-foreground">
                帖子ID: {post.id}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PostDetail;
