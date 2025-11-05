import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const states = [
  { id: "assam", name: "Assam", region: "Northeast", color: "from-green-500 to-emerald-600" },
  { id: "kerala", name: "Kerala", region: "South", color: "from-blue-500 to-cyan-600" },
  { id: "rajasthan", name: "Rajasthan", region: "North", color: "from-orange-500 to-amber-600" },
  { id: "goa", name: "Goa", region: "West", color: "from-teal-500 to-blue-600" },
  { id: "himachal", name: "Himachal Pradesh", region: "North", color: "from-purple-500 to-indigo-600" },
  { id: "karnataka", name: "Karnataka", region: "South", color: "from-red-500 to-pink-600" },
  { id: "meghalaya", name: "Meghalaya", region: "Northeast", color: "from-lime-500 to-green-600" },
  { id: "tamil-nadu", name: "Tamil Nadu", region: "South", color: "from-yellow-500 to-orange-600" },
  { id: "uttarakhand", name: "Uttarakhand", region: "North", color: "from-sky-500 to-blue-600" },
  { id: "west-bengal", name: "West Bengal", region: "East", color: "from-rose-500 to-red-600" },
  { id: "maharashtra", name: "Maharashtra", region: "West", color: "from-indigo-500 to-purple-600" },
  { id: "punjab", name: "Punjab", region: "North", color: "from-amber-500 to-yellow-600" },
];

const Places = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Indian States
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select a state to discover its top attractions, culture, and hidden gems
            </p>
          </div>

          {/* States Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {states.map((state, index) => (
              <Link
                key={state.id}
                to={`/state/${state.id}`}
                className="group travel-card"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`h-48 bg-gradient-to-br ${state.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="flex items-center gap-2 text-white mb-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm opacity-90">{state.region} India</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{state.name}</h3>
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">
                    Discover the top attractions and experiences
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Places;
