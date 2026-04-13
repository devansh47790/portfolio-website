import { SEO } from "@/components/ui/SEO";
import { PageTransition } from "@/components/ui/PageTransition";
import { ArrowRight, CheckCircle2, Terminal, Code2, MonitorSmartphone } from "lucide-react";
import { Link } from "wouter";

import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { useEffect, useState } from "react";
import { getFeaturedProjects, type Project } from "@/lib/api/projects";


const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
const [loadingFeatured, setLoadingFeatured] = useState(true);
useEffect(() => {
  async function loadFeatured() {
    try {
      const data = await getFeaturedProjects();
      setFeaturedProjects(data);
    } catch (err) {
      console.error("Failed to load featured projects", err);
    } finally {
      setLoadingFeatured(false);
    }
  }

  loadFeatured();
}, []);


export default function Home() {
  return (
    <PageTransition>
      <SEO 
        title="Melbourne Web Developer Building Websites That Work"
        description="Freelance web developer based in Melbourne. I build fast, modern, SEO-friendly websites for businesses that want results. WordPress, custom frontend, and landing pages."
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/80 to-background z-10" />
          <img 
            src="/images/hero-bg.png" 
            alt="Abstract background" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Building websites that <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">actually work.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              I'm a freelance web developer based in Melbourne. I partner with small businesses and brands who need someone reliable, technical, and communication-friendly to build fast, SEO-optimised websites.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-none bg-foreground px-8 py-4 text-base font-medium text-background hover:bg-accent transition-all duration-300 hover-elevate"
              >
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/projects" 
                className="inline-flex items-center justify-center rounded-none border border-border bg-transparent px-8 py-4 text-base font-medium text-foreground hover:bg-accent/5 hover:border-accent/30 transition-all duration-300"
              >
                View Selected Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50">
            <div className="text-center px-4">
              <div className="text-4xl font-display font-bold text-foreground mb-2">10+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-display font-bold text-foreground mb-2">50+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects Launched</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-display font-bold text-foreground mb-2">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Satisfaction Rate</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-display font-bold text-foreground mb-2">&lt;24h</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Expertise & Focus</h2>
              <p className="text-lg text-muted-foreground">
                A well-built website isn't just about looking good — it should load fast, rank well, and convert visitors into leads. I focus on the technical foundations that drive real business results.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center text-accent hover:text-foreground transition-colors font-medium">
              View all services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="group p-8 rounded-none border border-border bg-card hover:border-accent/50 transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                  {index === 0 ? <Terminal /> : index === 1 ? <Code2 /> : <MonitorSmartphone />}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-24 md:py-32 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Selected Work</h2>
              <p className="text-lg text-muted-foreground">
                Recent projects combining sharp design with robust technical execution.
              </p>
            </div>
            <Link href="/projects" className="inline-flex items-center text-accent hover:text-foreground transition-colors font-medium">
              View all projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {loadingFeatured && <p>Loading...</p>}

{!loadingFeatured && (
  <>
    {featuredProjects.map((project) => (
      <a
        key={project.documentId}
        href={project.projectUrl || "#"}
        target="_blank"
        rel="noreferrer"
        className="group relative overflow-hidden rounded-none border border-border bg-background"
      >
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-xs font-mono text-muted-foreground bg-accent/5 px-2 py-1 border border-accent/10"
              >
                {t}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          <p className="text-muted-foreground">{project.excerpt}</p>
        </div>
      </a>
    ))}
  </>
)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Work</h2>
            <p className="text-lg text-muted-foreground">
              A transparent, predictable process designed to eliminate surprises and deliver exactly what was promised.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-border hidden lg:block -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {[
                { title: "Discovery", desc: "Understanding your goals, audience, and technical needs." },
                { title: "Design & Plan", desc: "Mapping the structure, wireframes, and tech stack." },
                { title: "Development", desc: "Writing clean, performant code with regular updates." },
                { title: "Review & Test", desc: "Rigorous testing across devices and browsers." },
                { title: "Launch & Support", desc: "Deployment, training, and ongoing maintenance." }
              ].map((step, i) => (
                <div key={i} className="relative bg-background p-6 border border-border rounded-none shadow-sm hover:border-accent/50 transition-colors">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent text-background flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2 mt-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Client Feedback</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "The attention to detail and technical execution was flawless. Our new site is significantly faster and conversion rates are up 40% since launch.", name: "Sarah Jenkins", role: "Marketing Director" },
              { quote: "Finally, a developer who communicates clearly, hits deadlines, and actually understands SEO. The whole process was completely frictionless.", name: "David Chen", role: "Founder, local SME" },
              { quote: "We needed a complex custom booking flow built into our WordPress site. It was delivered on time, perfectly matching the design specs, and works flawlessly.", name: "Emma Robertson", role: "Operations Manager" }
            ].map((t, i) => (
              <div key={i} className="p-8 border border-border bg-background flex flex-col justify-between">
                <div className="mb-8">
                  <div className="flex gap-1 text-accent mb-6">
                    {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <p className="text-lg italic text-foreground/90">"{t.quote}"</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to build something better?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Whether you have a detailed brief or just an idea, let's discuss how we can elevate your digital presence.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-none bg-accent px-10 py-5 text-lg font-bold text-foreground hover:bg-white transition-all duration-300 hover-elevate"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
