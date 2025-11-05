import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Hotel, Compass } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-india.jpg";

const Index = () => {
  const features = [
    {
      icon: MapPin,
      title: "Discover States",
      description: "Explore unique destinations across all Indian states",
    },
    {
      icon: Hotel,
      title: "Find Hotels",
      description: "Handpicked stays from budget to luxury",
    },
    {
      icon: Compass,
      title: "Travel Tips",
      description: "Expert advice for a smooth journey",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="India Landscape"
            className="w-full h-full object-cover"
          />
          <div className="gradient-overlay" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bhraman
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-medium">
            Explore India, One State at a Time
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Discover the beauty, culture, and flavors of India — state by state
          </p>
          <Link to="/places">
            <Button variant="hero" size="xl" className="group">
              Start Exploring
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Journey Starts Here
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to plan the perfect Indian adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="travel-card p-8 text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-muted-foreground">
              Start with these traveler favorites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Kerala",
                image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
                description: "God's Own Country",
              },
              {
                name: "Rajasthan",
                image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
                description: "Land of Kings",
              },
              {
                name: "Assam",
                image: "https://images.unsplash.com/photo-1587483166702-bf9aa66bd791?w=800&q=80",
                description: "Tea Capital",
              },
            ].map((destination, index) => (
              <Link
                key={index}
                to={`/state/${destination.name.toLowerCase()}`}
                className="travel-card overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="gradient-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/places">
              <Button variant="outline" size="lg">
                View All States
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Indian Adventure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            From the Himalayas to the beaches of Kerala, your perfect journey awaits
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/places">
              <Button variant="hero" size="lg">
                Explore Destinations
              </Button>
            </Link>
            <Link to="/hotels">
              <Button variant="outline" size="lg">
                Browse Hotels
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
