import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import AboutUs from "@/components/AboutUs";
import PlaceholderSection from "@/components/PlaceholderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        
        <Categories />
        
        <AboutUs />
        
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
