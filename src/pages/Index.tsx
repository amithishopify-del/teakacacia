import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PlaceholderSection from "@/components/PlaceholderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        
        <PlaceholderSection
          id="collections"
          title="Featured Collections"
          description="Explore our curated selection of handcrafted furniture pieces, each telling a story of exceptional design and sustainable sourcing."
        />
        
        <div className="bg-muted/20">
          <PlaceholderSection
            id="about"
            title="Our Philosophy"
            description="At Teakacacia, we believe in creating furniture that transcends trends. Every piece is a testament to our commitment to quality, sustainability, and timeless design."
          />
        </div>
        
        <PlaceholderSection
          id="shop"
          title="New Arrivals"
          description="Discover the latest additions to our collection. Fresh designs that honor traditional craftsmanship while embracing contemporary aesthetics."
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
