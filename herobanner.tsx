import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-secondary text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/5"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-glow"></div>
      <div className="absolute bottom-10 right-32 w-24 h-24 bg-accent/10 rounded-full blur-lg animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/5 rounded-full blur-md"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-glow">Discover</span>
            <span className="text-primary block text-glow">Premium Quality</span>
          </h1>
          <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
            Explore our curated collection of premium products. From cutting-edge electronics to timeless fashion, find everything you need in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold glow-border hover-lift">
              <Link to="/categories">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent/50 text-accent bg-transparent hover:bg-accent/10 hover:border-accent px-8 py-3 text-lg font-semibold hover-lift">
              <Link to="/deals">View Deals</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
