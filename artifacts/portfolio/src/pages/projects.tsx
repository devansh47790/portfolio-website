import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

import { getProjects, type Project } from "@/lib/api/projects";
import { PageTransition } from "@/components/ui/PageTransition";
import { SEO } from "@/components/ui/SEO";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load projects");
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <PageTransition>
      <SEO
        title="Selected Projects - Web Development Work"
        description="Browse web development projects by a Melbourne-based freelance developer."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Selected Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            A showcase of recent web development work.
          </p>
        </div>

        {loading && <p>Loading projects...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.documentId}
                href={project.projectUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col border border-border bg-card/30 hover:border-accent/50 transition-colors"
                aria-label={`Open project website: ${project.title}`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-background text-foreground px-4 py-2 text-sm font-medium flex items-center gap-2">
                      View Details <ExternalLink size={14} />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                  <p className="text-muted-foreground text-sm flex-grow leading-relaxed">
                    {project.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
}
