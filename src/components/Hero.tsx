import { Button } from "./ui/button";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1728132282732-bc4433aaa231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3RoZW5idXJnJTIwc3dlZGVuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1NzA2Mjg4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Göteborg Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
          Discover Göteborg's
          <br />
          <span className="italic">Hidden Gems</span>
        </h1>
        
        <div className="text-xl md:text-2xl mb-12 opacity-90">
          <span>Eat</span>
          <span className="mx-4">•</span>
          <span>Fika</span>
          <span className="mx-4">•</span>
          <span>Party</span>
          <span className="mx-4">•</span>
          <span>Explore</span>
        </div>
        
        <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 hover:scale-105 px-10 py-7 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
          View Map
        </Button>
      </div>
    </div>
  );
}