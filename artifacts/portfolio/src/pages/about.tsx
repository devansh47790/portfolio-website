import { SEO } from "@/components/ui/SEO";
import { PageTransition } from "@/components/ui/PageTransition";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const skills = [
    "WordPress (Custom Themes)", "Headless CMS", "HTML5 / CSS3", 
    "JavaScript / TypeScript", "React / Next.js", "PHP", 
    "Technical SEO", "Performance Optimization", "Responsive Design", 
    "Git / Version Control", "Figma / UI Design", "Web Accessibility (a11y)"
  ];

  return (
    <PageTransition>
      <SEO 
        title="About | Melbourne-Based Web Developer"
        description="Learn about a freelance web developer in Melbourne who specialises in WordPress development, frontend builds, and SEO-friendly websites for small business."
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-8">
                A Melbourne-Based Web Developer With a Focus on What Actually Matters
              </h1>
              
              <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
                <p>
                  I'm a freelance web developer based in Melbourne, Australia. For over a decade, I've been helping businesses build digital products that aren't just visually striking, but technically robust and heavily optimised for performance.
                </p>
                <p>
                  The web development industry is full of agencies selling bloated templates and slow, unmanageable sites. My approach is different. I believe in clean code, structural integrity, and building websites that serve as actual business tools—not just digital brochures. Whether it's a custom React frontend or a tailored WordPress build, the focus is always on speed, SEO, and user experience.
                </p>
                <p>
                  When you work with me, you're not getting passed off to a junior developer or an offshore team. You work directly with the person writing the code. This means clearer communication, fewer misunderstandings, and a final product that matches the initial vision perfectly.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">My Approach</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-card/50 p-6 border border-border">
                  <h3 className="font-bold text-lg mb-3 text-accent">Performance First</h3>
                  <p className="text-muted-foreground">Every millisecond counts. I build lean, optimised sites that pass Core Web Vitals and keep users engaged.</p>
                </div>
                <div className="bg-card/50 p-6 border border-border">
                  <h3 className="font-bold text-lg mb-3 text-accent">Built for Search</h3>
                  <p className="text-muted-foreground">Semantic HTML, proper hierarchy, and technical SEO foundations are baked into the code from day one.</p>
                </div>
                <div className="bg-card/50 p-6 border border-border">
                  <h3 className="font-bold text-lg mb-3 text-accent">Long-Term Viability</h3>
                  <p className="text-muted-foreground">No messy hacks. I deliver clean, documented code and systems that are easy for your team to maintain.</p>
                </div>
                <div className="bg-card/50 p-6 border border-border">
                  <h3 className="font-bold text-lg mb-3 text-accent">Direct Communication</h3>
                  <p className="text-muted-foreground">No jargon, no runarounds. Honest advice, transparent timelines, and clear expectations.</p>
                </div>
              </div>
            </div>

            <div>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-none bg-foreground px-8 py-4 text-base font-medium text-background hover:bg-accent transition-all duration-300"
              >
                Let's discuss your project
              </Link>
            </div>
          </div>

          {/* Sidebar / Image Column */}
          <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32">
            <div className="aspect-[4/5] relative border border-border bg-card overflow-hidden">
              <img 
                src="/images/about-texture.png" 
                alt="Technical architecture and clean code representation" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <p className="font-mono text-sm text-accent mb-2">// Based in</p>
                <p className="text-2xl font-bold">Melbourne, VIC</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 border-b border-border pb-4">Technical Stack</h3>
              <ul className="grid grid-cols-2 gap-4">
                {skills.map(skill => (
                  <li key={skill} className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
