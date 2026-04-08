import { SEO } from "@/components/ui/SEO";
import { PageTransition } from "@/components/ui/PageTransition";
import { blogPosts } from "@/data/blog";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogIndex() {
  return (
    <PageTransition>
      <SEO 
        title="Web Development Insights for Melbourne Businesses"
        description="Practical articles on web development, SEO, WordPress, and building websites that perform. Written for Australian businesses by a Melbourne-based web developer."
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Insights & Writing
          </h1>
          <p className="text-xl text-muted-foreground">
            Practical advice on web development, performance, and digital strategy. No fluff, just actionable insights based on real-world experience building sites for businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-4xl">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group relative border-b border-border pb-12 last:border-0">
              <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono mb-4">
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" />{post.date}</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2" />{post.readTime}</span>
              </div>
              
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h2>
              </Link>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center font-medium text-foreground hover:text-accent transition-colors uppercase tracking-wide text-sm">
                Read Article <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
