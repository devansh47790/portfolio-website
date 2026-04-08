import { SEO } from "@/components/ui/SEO";
import { PageTransition } from "@/components/ui/PageTransition";
import { blogPosts } from "@/data/blog";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Markdown from "react-markdown";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you are looking for doesn't exist or has been moved.</p>
        <Link href="/blog" className="text-accent hover:underline">Return to blog</Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <SEO 
        title={`${post.title} | Web Dev Insights`}
        description={post.excerpt}
        type="article"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-12 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to all articles
          </Link>
          
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono mb-6">
              <span className="flex items-center bg-card px-3 py-1 border border-border"><Calendar className="w-4 h-4 mr-2" />{post.date}</span>
              <span className="flex items-center bg-card px-3 py-1 border border-border"><Clock className="w-4 h-4 mr-2" />{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-8">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-accent pl-6">
              {post.excerpt}
            </p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-accent hover:prose-a:text-accent/80 prose-strong:text-foreground prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-3xl prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-4 prose-li:marker:text-accent">
            <Markdown>{post.content}</Markdown>
          </div>
          
          <hr className="my-16 border-border" />
          
          <div className="bg-card border border-border p-8 flex flex-col sm:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-accent/20 border border-accent/30 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold text-accent font-display">
              MD
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Written by a Melbourne Developer</h3>
              <p className="text-muted-foreground mb-4">I build fast, modern websites for businesses that want results. If your site isn't pulling its weight, let's talk.</p>
              <Link href="/contact" className="text-accent font-medium hover:underline">Start a conversation →</Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
