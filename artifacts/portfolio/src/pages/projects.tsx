import { SEO } from "@/components/ui/SEO";
import { PageTransition } from "@/components/ui/PageTransition";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <PageTransition>
      <SEO 
        title="Selected Projects — Web Development Work"
        description="Browse web development projects by a Melbourne-based freelance developer. From WordPress builds to custom frontend work, each project is built for performance and results."
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Selected Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            A showcase of recent web development work. From headless e-commerce to highly-customised WordPress platforms, every project prioritises performance, clean code, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col border border-border bg-card/30 hover:border-accent/50 transition-colors">
              <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-background text-foreground px-4 py-2 text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details <ExternalLink size={14} />
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 border border-border">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                <p className="text-muted-foreground text-sm flex-grow leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center border-t border-border pt-16">
          <h3 className="text-2xl font-bold mb-6">Have a project in mind?</h3>
          <a href="/contact" className="inline-flex items-center justify-center rounded-none bg-foreground px-8 py-4 text-base font-medium text-background hover:bg-accent transition-colors">
            Let's discuss requirements
          </a>
        </div>
      </div>
    </PageTransition>
  );
}
