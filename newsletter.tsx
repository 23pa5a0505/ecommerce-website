import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-card to-secondary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-glow">
            Stay in the Loop
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Be the first to know about new arrivals, exclusive deals, and special offers. 
            Join our community of savvy shoppers!
          </p>

          {isSubscribed ? (
            <div className="gradient-bg glow-border rounded-lg p-6 shadow-xl">
              <p className="text-primary font-semibold text-lg text-glow">
                🎉 Thank you for subscribing!
              </p>
              <p className="text-muted-foreground mt-2">
                Welcome to the EliteStore family. Check your email for a special welcome offer!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
              />
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2 font-semibold glow-border hover-lift"
              >
                Subscribe
              </Button>
            </form>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <span className="mr-2 text-primary">✓</span>
              Exclusive discounts
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-primary">✓</span>
              Early access to sales
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-primary">✓</span>
              New product alerts
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-primary">✓</span>
              No spam, unsubscribe anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
