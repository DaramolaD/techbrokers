import { Tag } from "../ui/tag";

interface PageHeroProps {
  tag: string;
  title: string;
  description: string;
}

export function PageHero({ tag, title, description }: PageHeroProps) {
  return (
    <section className="pt-20 pb-12 bg-gradient-to-br from-[#1E40AF]/10 via-white to-[#1E40AF]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <Tag variant="outline" className="bg-white/50 border-[#1E40AF]/20">
            {tag}
          </Tag>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
            {title}
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
} 