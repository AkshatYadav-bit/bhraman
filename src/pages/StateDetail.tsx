import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Hotel } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import assamHero from "@/assets/assam-hero.jpg";
import keralaHero from "@/assets/kerala-hero.jpg";
import rajasthanHero from "@/assets/rajasthan-hero.jpg";

const stateData: Record<string, any> = {
  assam: {
    name: "Assam",
    heroImage: assamHero,
    description: "Known as the land of red rivers and blue hills, Assam is famous for its tea gardens, wildlife sanctuaries, and rich cultural heritage.",
    attractions: [
      {
        name: "Kaziranga National Park",
        description: "UNESCO World Heritage Site, home to the one-horned rhinoceros",
        image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
      },
      {
        name: "Majuli Island",
        description: "World's largest river island with vibrant Vaishnavite culture",
        image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
      },
      {
        name: "Kamakhya Temple",
        description: "Ancient Hindu temple and important pilgrimage site",
        image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80",
      },
      {
        name: "Tea Gardens",
        description: "Sprawling tea estates offering scenic beauty and tea tasting",
        image: "https://images.unsplash.com/photo-1587483166702-bf9aa66bd791?w=800&q=80",
      },
    ],
  },
  kerala: {
    name: "Kerala",
    heroImage: keralaHero,
    description: "God's Own Country - Kerala offers serene backwaters, lush hill stations, pristine beaches, and rich ayurvedic traditions.",
    attractions: [
      {
        name: "Alleppey Backwaters",
        description: "Experience houseboat cruises through scenic waterways",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
      },
      {
        name: "Munnar Hill Station",
        description: "Tea plantations and misty mountains at their finest",
        image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&q=80",
      },
      {
        name: "Periyar Wildlife Sanctuary",
        description: "Spot elephants and tigers in their natural habitat",
        image: "https://images.unsplash.com/photo-1558818498-28c1e002b655?w=800&q=80",
      },
      {
        name: "Kovalam Beach",
        description: "Crescent-shaped beaches perfect for relaxation",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      },
    ],
  },
  rajasthan: {
    name: "Rajasthan",
    heroImage: rajasthanHero,
    description: "The Land of Kings - Explore magnificent forts, colorful bazaars, golden deserts, and royal heritage.",
    attractions: [
      {
        name: "Amber Fort, Jaipur",
        description: "Majestic hilltop fort with stunning architecture",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
      },
      {
        name: "Lake Pichola, Udaipur",
        description: "Romantic lake surrounded by palaces and temples",
        image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=800&q=80",
      },
      {
        name: "Thar Desert",
        description: "Experience camel safaris and desert camping",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
      },
      {
        name: "City Palace, Jaipur",
        description: "Royal residence showcasing Rajput and Mughal architecture",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
      },
    ],
  },
};

const StateDetail = () => {
  const { stateId } = useParams();
  const state = stateId ? stateData[stateId] : null;

  if (!state) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">State not found</h1>
            <Link to="/places">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Places
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={state.heroImage}
            alt={state.name}
            className="w-full h-full object-cover"
          />
          <div className="gradient-overlay" />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center px-4 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{state.name}</h1>
              <p className="text-xl max-w-2xl mx-auto">{state.description}</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <Link to="/places">
              <Button variant="ghost">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All States
              </Button>
            </Link>
          </div>

          {/* Attractions */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Top Attractions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {state.attractions.map((attraction: any, index: number) => (
                <div
                  key={index}
                  className="travel-card overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
                    <p className="text-muted-foreground">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="travel-card p-8 bg-gradient-to-br from-primary/10 to-secondary/10 text-center">
            <Hotel className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-4">Ready to Visit {state.name}?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Find the perfect accommodation for your stay
            </p>
            <Link to="/hotels">
              <Button variant="hero" size="lg">
                Browse Hotels
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StateDetail;
