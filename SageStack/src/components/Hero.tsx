import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Brain, Zap } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-dark"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-secondary rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-20 right-40 w-1 h-1 bg-primary-glow rounded-full animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.1}px)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Code className="w-8 h-8 text-primary animate-pulse" />
          <Brain className="w-8 h-8 text-accent animate-pulse delay-300" />
          <Zap className="w-8 h-8 text-secondary animate-pulse delay-600" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          SageStackSol ( S³ )
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto leading-relaxed">
          From Code to Cognition: We build software that sees, hears, and understands.
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Empowering businesses with cutting-edge technology solutions from traditional software development to advanced AI and quantum computing.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:scale-105 transition-transform duration-300 glow-primary px-8 py-6 text-lg"
            onClick={scrollToServices}
          >
            Explore Our Services
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="glass border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-6 text-lg"
          >
            Get Consultation
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-primary/20 rounded-full float" />
      <div className="absolute top-1/3 right-10 w-16 h-16 border border-accent/20 rounded-lg rotate-45 float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-secondary/20 rounded-full float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;