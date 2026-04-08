import { SEO } from "@/components/ui/SEO";
import { PageTransition } from "@/components/ui/PageTransition";
import { services } from "@/data/services";
import { Link } from "wouter";
import * as Icons from "lucide-react";

export default function Services() {
  return (
    <PageTransition>
      <SEO 
        title="Web Development Services for Melbourne Businesses"
        description="WordPress development, custom frontend builds, landing pages, website redesigns and ongoing support. Freelance web development services based in Melbourne."
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Web Development Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive development solutions tailored for businesses that demand high-performance, maintainable, and scalable digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => {
            // @ts-ignore
            const IconComponent = Icons[service.icon];
            
            return (
              <div key={service.id} className="flex gap-6 p-8 border border-border bg-card/30 hover:bg-card/80 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-accent/10 flex items-center justify-center text-accent">
                    {IconComponent && <IconComponent size={28} strokeWidth={1.5} />}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8 border-t border-border/50 pt-6">
                    <li className="flex items-center text-sm text-foreground/80">
                      <Icons.ChevronRight className="w-4 h-4 text-accent mr-2" /> 
                      Performance Optimised
                    </li>
                    <li className="flex items-center text-sm text-foreground/80">
                      <Icons.ChevronRight className="w-4 h-4 text-accent mr-2" /> 
                      SEO Fundamentals Included
                    </li>
                    <li className="flex items-center text-sm text-foreground/80">
                      <Icons.ChevronRight className="w-4 h-4 text-accent mr-2" /> 
                      Responsive Across All Devices
                    </li>
                  </ul>
                  <Link href="/contact" className="text-accent font-medium hover:text-foreground transition-colors inline-flex items-center text-sm uppercase tracking-wider">
                    Enquire about this service <Icons.ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}
