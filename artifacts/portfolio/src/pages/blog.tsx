import { useEffect, useState } from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";

import { type BlogPost } from "@/data/blog";
import { getBlogPosts } from "@/lib/api/blog";
import { PageTransition } from "@/components/ui/PageTransition";
import { SEO } from "@/components/ui/SEO";

export default function BlogIndex() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

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
            Practical advice on web development, performance, and digital strategy.
            No fluff, just actionable insights based on real-world experience
            building sites for businesses.
          </p>
        </div>

        {loading && <p>Loading articles...</p>}
        {error && <p className="text-muted-foreground">{error}</p>}
        {!loading && !error && posts.length === 0 && (
          <div className="max-w-3xl border border-border bg-card/30 p-8">
            <h2 className="text-2xl font-bold text-foreground mb-3">No articles yet</h2>
            <p className="text-muted-foreground">
              Blog posts will appear here once they are published in Strapi.
            </p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 gap-12 max-w-4xl">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group relative border-b border-border pb-12 last:border-0"
              >
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono mb-4">
                  {post.date && (
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </span>
                  )}
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center font-medium text-foreground hover:text-accent transition-colors uppercase tracking-wide text-sm"
                >
                  Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
}
