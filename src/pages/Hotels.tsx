import { useState } from "react";
import { Star, MapPin, ExternalLink, Wifi, Coffee, Car, Utensils, Waves } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const hotels = [
  {
    id: 1,
    name: "Tea Garden Resort",
    location: "Assam",
    rating: 4.5,
    price: "₹3,500/night",
    description: "Luxurious resort surrounded by lush tea gardens",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    facilities: ["Free WiFi", "Restaurant", "Parking", "Pool"],
  },
  {
    id: 2,
    name: "Backwater Paradise",
    location: "Kerala",
    rating: 4.8,
    price: "₹5,000/night",
    description: "Traditional houseboat experience on serene backwaters",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    facilities: ["Free WiFi", "Breakfast", "Boat Tours", "Restaurant"],
  },
  {
    id: 3,
    name: "Desert Palace Hotel",
    location: "Rajasthan",
    rating: 4.7,
    price: "₹6,500/night",
    description: "Heritage hotel with authentic Rajasthani architecture",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    facilities: ["Free WiFi", "Restaurant", "Parking", "Cultural Shows"],
  },
  {
    id: 4,
    name: "Beach View Resort",
    location: "Goa",
    rating: 4.6,
    price: "₹4,200/night",
    description: "Beachfront property with stunning ocean views",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    facilities: ["Free WiFi", "Pool", "Beach Access", "Restaurant"],
  },
  {
    id: 5,
    name: "Mountain Retreat",
    location: "Himachal Pradesh",
    rating: 4.9,
    price: "₹4,800/night",
    description: "Cozy mountain resort with panoramic valley views",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    facilities: ["Free WiFi", "Breakfast", "Parking", "Trekking"],
  },
  {
    id: 6,
    name: "Heritage Mansion",
    location: "Karnataka",
    rating: 4.4,
    price: "₹3,800/night",
    description: "Colonial-era mansion with modern amenities",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
    facilities: ["Free WiFi", "Restaurant", "Parking", "Garden"],
  },
  {
    id: 7,
    name: "Budget Inn Assam",
    location: "Assam",
    rating: 4.0,
    price: "₹1,500/night",
    description: "Comfortable and affordable stay near city center",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    facilities: ["Free WiFi", "Breakfast", "Parking"],
  },
  {
    id: 8,
    name: "Coastal Comfort",
    location: "Kerala",
    rating: 4.3,
    price: "₹2,800/night",
    description: "Budget-friendly hotel near the beach",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    facilities: ["Free WiFi", "Restaurant", "Beach Access"],
  },
  {
    id: 9,
    name: "City Heights",
    location: "Rajasthan",
    rating: 4.2,
    price: "₹2,200/night",
    description: "Modern hotel in the heart of Jaipur",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    facilities: ["Free WiFi", "Breakfast", "Parking", "Restaurant"],
  },
  {
    id: 10,
    name: "Sunshine Guesthouse",
    location: "Goa",
    rating: 4.1,
    price: "₹1,800/night",
    description: "Cozy guesthouse close to popular beaches",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
    facilities: ["Free WiFi", "Breakfast", "Beach Access"],
  },
  {
    id: 11,
    name: "Valley View Lodge",
    location: "Himachal Pradesh",
    rating: 4.5,
    price: "₹2,500/night",
    description: "Affordable mountain lodge with beautiful views",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    facilities: ["Free WiFi", "Breakfast", "Parking", "Bonfire"],
  },
  {
    id: 12,
    name: "Garden Stay",
    location: "Karnataka",
    rating: 4.3,
    price: "₹2,000/night",
    description: "Peaceful hotel surrounded by gardens",
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800&q=80",
    facilities: ["Free WiFi", "Breakfast", "Garden", "Parking"],
  },
  {
    id: 13,
    name: "Riverside Retreat",
    location: "Kerala",
    rating: 4.6,
    price: "₹3,200/night",
    description: "Charming property by the river",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
    facilities: ["Free WiFi", "Restaurant", "River View", "Kayaking"],
  },
  {
    id: 14,
    name: "Fort View Hotel",
    location: "Rajasthan",
    rating: 4.4,
    price: "₹3,000/night",
    description: "Mid-range hotel with fort views",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    facilities: ["Free WiFi", "Restaurant", "Parking", "Rooftop"],
  },
  {
    id: 15,
    name: "Backpacker's Haven",
    location: "Goa",
    rating: 3.9,
    price: "₹1,200/night",
    description: "Budget hostel perfect for solo travelers",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
    facilities: ["Free WiFi", "Breakfast", "Shared Kitchen"],
  },
];

const Hotels = () => {
  const [selectedLocation, setSelectedLocation] = useState("All");
  
  const locations = ["All", ...new Set(hotels.map(hotel => hotel.location))];
  
  const filteredHotels = selectedLocation === "All" 
    ? hotels 
    : hotels.filter(hotel => hotel.location === selectedLocation);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Stay
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked hotels and resorts across India for every traveler
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {locations.map((location) => (
              <Button
                key={location}
                variant={selectedLocation === location ? "default" : "outline"}
                onClick={() => setSelectedLocation(location)}
                size="sm"
              >
                {location}
              </Button>
            ))}
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map((hotel, index) => (
              <div
                key={hotel.id}
                className="travel-card animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-card px-3 py-1 rounded-full text-sm font-semibold">
                    {hotel.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold">{hotel.name}</h3>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{hotel.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {hotel.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {hotel.facilities.map((facility, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {facility}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group">
                    View Details
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Hotels;
