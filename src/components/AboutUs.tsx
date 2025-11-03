const AboutUs = () => {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-block mb-4">
              <div className="h-1 w-16 bg-primary rounded-full" />
            </div>
            
            <h2 className="heading-font text-4xl sm:text-5xl font-medium text-foreground mb-6 tracking-tight">
              Design Your Dreams
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                At Teakacacia, we believe furniture is more than function—it's the foundation of your living spaces, 
                a reflection of your style, and an investment in quality that lasts generations.
              </p>
              
              <p>
                Every piece in our collection is thoughtfully crafted from premium teak and acacia wood, 
                selected for their natural beauty, durability, and sustainable sourcing. Our designs honor 
                traditional craftsmanship while embracing contemporary aesthetics.
              </p>
              
              <p>
                We partner with skilled artisans who share our commitment to excellence, creating furniture 
                that transcends trends and tells a story of exceptional design, natural elegance, and 
                enduring quality.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-semibold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Sustainable Wood</div>
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                  Craftsmanship
                </div>
              </div>
              <div className="aspect-[4/5] bg-muted rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                  Quality
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-[4/5] bg-muted rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                  Design
                </div>
              </div>
              <div className="aspect-square bg-muted rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                  Heritage
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
