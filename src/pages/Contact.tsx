import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
          </div>
          
          <h1 className="heading-font text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground mb-6 tracking-tight">
            Get In Touch
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions about our furniture? Want to discuss a custom piece? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="heading-font text-2xl font-medium text-foreground mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">info@teakacacia.com</p>
                      <p className="text-muted-foreground">sales@teakacacia.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">Mon-Fri: 9AM - 6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Showroom</h3>
                      <p className="text-muted-foreground">123 Design Street</p>
                      <p className="text-muted-foreground">New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-sm">
                <h3 className="heading-font text-xl font-medium text-foreground mb-4">
                  Visit Our Showroom
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Experience our furniture firsthand. Our design consultants are available 
                  to help you find the perfect pieces for your space.
                </p>
                <Button variant="outline" className="w-full sm:w-auto">
                  Schedule a Visit
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <form className="space-y-6 bg-muted/20 p-8 rounded-sm">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
                    placeholder="General Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth resize-none"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
