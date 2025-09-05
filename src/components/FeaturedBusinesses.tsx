import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Utensils, Coffee, Music } from "lucide-react";

type Business = {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
};

const businesses: Business[] = [
  {
    id: 1,
    name: "Café Husaren",
    description: "Famous for their giant cinnamon buns and cozy atmosphere in the heart of Haga district.",
    category: "Fika",
    image: "https://images.unsplash.com/photo-1567183826141-f4f9a9a6249f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VkaXNoJTIwY29mZmVlJTIwY2FmZSUyMGZpa2F8ZW58MXx8fHwxNzU3MDYyODg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "Björk & Bambu",
    description: "Innovative Nordic cuisine with a modern twist in an intimate setting.",
    category: "Eat",
    image: "https://images.unsplash.com/photo-1658875148655-6b9ef49b481c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3MDYyODg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    name: "Pustervik",
    description: "Underground music venue hosting everything from indie bands to electronic acts.",
    category: "Party",
    image: "https://images.unsplash.com/photo-1672520860553-60f3ba641257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VkaXNoJTIwbmlnaHRsaWZlJTIwYmFyfGVufDF8fHx8MTc1NzA2Mjg4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    name: "Saltimporten Canteen",
    description: "Local favorite for fresh seafood and traditional Swedish dishes.",
    category: "Eat",
    image: "https://images.unsplash.com/photo-1686821327812-887bb1faf261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3RoZW5idXJnJTIwdHJhbSUyMHN0cmVldHxlbnwxfHx8fDE3NTcwNjI4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    name: "Da Matteo",
    description: "Award-winning specialty coffee roastery with multiple cozy locations around the city.",
    category: "Fika",
    image: "https://images.unsplash.com/photo-1559305616-f42c2e59c65c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VkaXNoJTIwY29mZmVlJTIwc2hvcCUyMGludGVyaW9yfGVufDF8fHx8MTc1NzA2Mjg4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 6,
    name: "Nefertiti Jazz Club",
    description: "Intimate live music venue featuring jazz, blues, and experimental sounds in a basement setting.",
    category: "Party",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwY2x1YiUyMGludGVyaW9yfGVufDF8fHx8MTc1NzA2Mjg4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const categoryInfo = {
  'Eat': {
    icon: Utensils,
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    bgGradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
    description: 'Taste the authentic flavors of Göteborg'
  },
  'Fika': {
    icon: Coffee,
    color: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    bgGradient: 'bg-gradient-to-br from-yellow-50 to-amber-50',
    description: 'Experience Swedish coffee culture at its finest'
  },
  'Party': {
    icon: Music,
    color: 'bg-slate-50 text-slate-700 border-slate-200',
    bgGradient: 'bg-gradient-to-br from-slate-50 to-blue-50',
    description: 'Dance the night away like a local'
  }
};

const BusinessCard = ({ business }: { business: Business }) => {
  const categoryStyle = categoryInfo[business.category as keyof typeof categoryInfo];
  
  return (
    <Card className="overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-lg">
      <div className="aspect-[4/3] overflow-hidden relative">
        <ImageWithFallback
          src={business.image}
          alt={business.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <Badge className={`${categoryStyle.color} border rounded-full px-3 py-1 shadow-sm`}>
            {business.category}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl mb-3">{business.name}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {business.description}
        </p>
        <Button 
          className="w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all duration-300"
        >
          See on Map
        </Button>
      </div>
    </Card>
  );
};

const CategorySection = ({ category, businesses }: { 
  category: keyof typeof categoryInfo, 
  businesses: Business[] 
}) => {
  const categoryData = categoryInfo[category];
  const Icon = categoryData.icon;
  
  return (
    <div className={`${categoryData.bgGradient} rounded-3xl p-8 md:p-12 mb-16`}>
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg">
          <Icon size={24} className="text-blue-600" />
        </div>
        <div>
          <h3 className="text-3xl mb-2">{category}</h3>
          <p className="text-muted-foreground">{categoryData.description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {businesses.map((business) => (
          <React.Fragment key={business.id}>
            <BusinessCard business={business} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export function FeaturedBusinesses() {
  const categorizedBusinesses = businesses.reduce((acc, business) => {
    if (!acc[business.category]) {
      acc[business.category] = [];
    }
    acc[business.category].push(business);
    return acc;
  }, {} as Record<string, Business[]>);

  return (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-6">Featured Hidden Gems</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Handpicked local favorites that capture the true spirit of Göteborg
          </p>
        </div>
        
        {Object.entries(categorizedBusinesses).map(([category, categoryBusinesses]) => (
          <div key={category}>
            <CategorySection 
              category={category as keyof typeof categoryInfo}
              businesses={categoryBusinesses}
            />
          </div>
        ))}
      </div>
    </section>
  );
}