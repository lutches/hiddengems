import { Button } from "./ui/button";
import { Mail } from "lucide-react";

export function BusinessCTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 md:p-16 text-white">
          <Mail className="mx-auto mb-6" size={48} />
          
          <h2 className="text-3xl md:text-4xl mb-6">
            Own a Hidden Gem?
          </h2>
          
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our curated collection of authentic Göteborg experiences. 
            We're always looking for special places that locals love.
          </p>
          
          <Button 
            size="lg" 
            className="px-10 py-7 text-xl rounded-full hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300 bg-yellow-400 text-blue-900 hover:bg-yellow-300"
          >
            Want to be featured? Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}