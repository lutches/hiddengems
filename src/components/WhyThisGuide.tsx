import { Utensils, Coffee, Music } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Eat",
    description: "Discover authentic local restaurants and hidden culinary gems off the beaten path"
  },
  {
    icon: Coffee,
    title: "Fika",
    description: "Experience the true Swedish coffee culture at cozy neighborhood cafés"
  },
  {
    icon: Music,
    title: "Party",
    description: "Find the best nightlife spots where locals actually go to have fun"
  }
];

export function WhyThisGuide() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-6">Why This Guide?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Skip the tourist traps and experience Göteborg like a local
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Icon size={32} />
                </div>
                
                <h3 className="text-2xl mb-4">{feature.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}