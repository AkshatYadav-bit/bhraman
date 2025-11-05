import { Backpack, Sun, Shield, Map, Camera, Coffee } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import travelTipsImg from "@/assets/travel-tips.jpg";

const tips = [
  {
    icon: Sun,
    title: "Best Time to Visit",
    description: "October to March is ideal for most of India. Hill stations are best in summer, while monsoons bring lush greenery to Kerala and the Northeast.",
  },
  {
    icon: Backpack,
    title: "Packing Essentials",
    description: "Light cotton clothes, comfortable walking shoes, sunscreen, hat, and a reusable water bottle. Don't forget adapters for Indian sockets (Type C, D, M).",
  },
  {
    icon: Shield,
    title: "Safety & Health",
    description: "Drink bottled water, carry hand sanitizer, and have travel insurance. Keep emergency contacts handy. Be cautious with street food initially.",
  },
  {
    icon: Map,
    title: "Getting Around",
    description: "Use apps like Uber/Ola for taxis, IRCTC for trains, and MakeMyTrip for flights. Book transport in advance during peak season.",
  },
  {
    icon: Coffee,
    title: "Local Etiquette",
    description: "Remove shoes before entering temples and homes. Dress modestly at religious sites. Use right hand for eating and greeting. Bargaining is common in markets.",
  },
  {
    icon: Camera,
    title: "Photography Tips",
    description: "Ask permission before photographing people, especially in rural areas. Golden hour lighting (sunrise/sunset) is perfect for landscapes.",
  },
];

const TravelTips = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Travel Tips & Guides
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Essential advice to make your Indian adventure smooth and memorable
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16 rounded-2xl overflow-hidden max-w-4xl mx-auto animate-fade-in">
            <img
              src={travelTipsImg}
              alt="Travel Tips"
              className="w-full h-auto"
            />
          </div>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="travel-card p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <tip.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Tips */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="travel-card p-8">
              <h2 className="text-2xl font-bold mb-4">Money Matters</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Indian Rupee (₹/INR) is the currency. Credit cards are widely accepted in cities.</li>
                <li>• ATMs are readily available. Inform your bank about travel plans.</li>
                <li>• Carry small denominations for local markets and auto-rickshaws.</li>
                <li>• Digital payments (UPI, Paytm) are increasingly popular.</li>
              </ul>
            </div>

            <div className="travel-card p-8">
              <h2 className="text-2xl font-bold mb-4">Cultural Insights</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• India has diverse cultures, languages, and customs across states.</li>
                <li>• English is widely spoken in tourist areas and cities.</li>
                <li>• Try local cuisines but choose clean, busy restaurants.</li>
                <li>• Respect religious sentiments and local traditions.</li>
                <li>• Festivals are the best time to experience local culture.</li>
              </ul>
            </div>

            <div className="travel-card p-8">
              <h2 className="text-2xl font-bold mb-4">Communication</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Purchase a local SIM card for affordable data and calls.</li>
                <li>• Download offline maps before traveling to remote areas.</li>
                <li>• Learn a few basic Hindi phrases - locals appreciate the effort.</li>
                <li>• WiFi is available in most hotels and cafes in urban areas.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TravelTips;
