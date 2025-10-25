import { Sparkles } from "lucide-react";

interface HeaderProps {
  postCount: number;
}

export const Header = ({ postCount }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              帖子广场
            </h1>
            <p className="text-sm text-muted-foreground">
              发现 {postCount} 篇精彩内容
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
