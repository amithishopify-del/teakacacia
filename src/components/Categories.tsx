import { ArrowRight } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Living Room",
      description: "Sofas, coffee tables, and entertainment centers",
      count: "45+ pieces"
    },
    {
      name: "Dining",
      description: "Dining tables, chairs, and storage solutions",
      count: "38+ pieces"
    },
    {
      name: "Bedroom",
      description: "Beds, nightstands, and wardrobe collections",
      count: "52+ pieces"
    },
    {
      name: "Office",
      description: "Desks, chairs, and organizational furniture",
      count: "28+ pieces"
    },
    {
      name: "Outdoor",
      description: "Weather-resistant patio and garden furniture",
      count: "34+ pieces"
    },
    {
      name: "Accent Pieces",
      description: "Decorative items and unique statement furniture",
      count: "41+ pieces"
    }
  ];

  return (
    <section id="collections" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
          </div>
          
          <h2 className="heading-font text-4xl sm:text-5xl font-medium text-foreground mb-6 tracking-tight">
            Explore Our Collections
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover expertly crafted furniture for every space in your home, 
            each piece designed to bring natural elegance and lasting quality to your life.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#shop"
              className="group relative overflow-hidden rounded-sm bg-muted hover:shadow-hover transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
                <span className="text-4xl text-muted-foreground/20 heading-font">
                  {category.name}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="heading-font text-2xl font-medium text-foreground group-hover:text-primary transition-smooth">
                    {category.name}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-smooth" />
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="text-sm text-primary font-medium">
                  {category.count}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
