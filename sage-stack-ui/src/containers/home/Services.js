import { useState } from 'react';
import { 
  Globe, 
  ShoppingCart, 
  Layers, 
  Smartphone, 
  Brain, 
  Eye, 
  Mic, 
  TrendingUp, 
  Waves, 
  Radio,
  Atom,
  Zap
} from 'lucide-react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('agency');

  const categories = [
    { id: 'agency', name: 'Agency Services', icon: Globe },
    { id: 'ai', name: 'Artificial Intelligence', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom }
  ];

  const services = {
    agency: [
      {
        title: 'Software Development',
        description: 'Custom software solutions tailored to your business needs',
        icon: Layers,
        level: 'Foundation',
        features: ['Desktop Applications', 'API Development', 'Database Design', 'System Integration']
      },
      {
        title: 'Website & Mobile Apps',
        description: 'Responsive web applications and mobile solutions',
        icon: Smartphone,
        level: 'Basic',
        features: ['Responsive Design', 'Progressive Web Apps', 'Cross-platform Mobile', 'SEO Optimization']
      },
      {
        title: 'E-commerce Solutions',
        description: 'Complete online store development and management',
        icon: ShoppingCart,
        level: 'Medium',
        features: ['Payment Integration', 'Inventory Management', 'Analytics Dashboard', 'Multi-vendor Support']
      },
      {
        title: 'SaaS Development',
        description: 'Scalable Software-as-a-Service platforms',
        icon: Zap,
        level: 'Advanced',
        features: ['Multi-tenant Architecture', 'Subscription Management', 'Real-time Analytics', 'Auto-scaling Infrastructure']
      }
    ],
    ai: [
      {
        title: 'Natural Language Processing',
        description: 'Advanced text analysis and language understanding',
        icon: Mic,
        level: 'AIaaS',
        features: ['Sentiment Analysis', 'Text Classification', 'Language Translation', 'Chatbot Development']
      },
      {
        title: 'Computer Vision',
        description: 'Image and video processing with AI',
        icon: Eye,
        level: 'AIaaS',
        features: ['Object Detection', 'Facial Recognition', 'Quality Control', 'Medical Imaging']
      },
      {
        title: 'Time Series Analysis',
        description: 'Predictive analytics for temporal data',
        icon: TrendingUp,
        level: 'AIaaS',
        features: ['Forecasting', 'Anomaly Detection', 'Pattern Recognition', 'Financial Modeling']
      },
      {
        title: 'Multimodal AI',
        description: 'AI systems that process multiple data types',
        icon: Waves,
        level: 'AIaaS',
        features: ['Audio-Visual Analysis', 'Cross-modal Learning', 'Sensor Fusion', 'Contextual Understanding']
      }
    ],
    quantum: [
      {
        title: 'Quantum Algorithm Development',
        description: 'Next-generation computing solutions',
        icon: Atom,
        level: 'QaaS',
        features: ['Quantum Optimization', 'Cryptography', 'Simulation', 'Research & Development']
      },
      {
        title: 'Quantum Consulting',
        description: 'Strategic guidance for quantum adoption',
        icon: Radio,
        level: 'QaaS',
        features: ['Technology Assessment', 'Implementation Roadmap', 'Team Training', 'Proof of Concepts']
      }
    ]
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Foundation': return 'bg-muted text-muted-foreground';
      case 'Basic': return 'bg-primary/20 text-primary';
      case 'Medium': return 'bg-accent/20 text-accent';
      case 'Advanced': return 'bg-secondary/20 text-secondary';
      case 'AIaaS': return 'bg-gradient-primary text-white';
      case 'QaaS': return 'bg-gradient-secondary text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    // <section id="services" className="py-20 px-6">
      <div className=" lg:h-screen md:h-screen">
        <div className="text-center mb-8">
          <h2 className="lg:text-5xl md:text-5xl text-2xl font-bold mb-2">
            Our Services
          </h2>
          <p className=" text-base font-light max-w-3xl mx-auto">
            Comprehensive technology solutions spanning traditional development to cutting-edge AI and quantum computing
          </p>
        </div>

        {/* Category Tabs */}
       

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                className={`flex justify-center items-center px-6 py-3 rounded-lg text-xl ${
                  activeCategory === category.id 
                    ? ' bg-white/10 backdrop-blur-md border border-white/20 shadow-lg' 
                    : ' hover:shine-text'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <Icon className="w-5 h-5 mr-2" />
                <span class="relative z-10 text-lg font-bold lg:flex md:flex hidden text-transparent bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text bg-[length:200%_100%] bg-left transition-all duration-700 group-hover:animate-silver-sweep ">
    {category.name}
  </span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-12 gap-6">
          {services[activeCategory].map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="relative lg:col-span-3 md:col-span-6 col-span-12 duration-500 hover:scale-105 rounded-3xl shadow-2xl border border-white/20 px-4 py-6 overflow-hidden"
              >
            <div class="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-white/5 opacity-40"></div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    
                    <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />

                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(service.level)}`}>
                      {service.level}
                    </span>
                  </div>
                  <h6 className="text-lg font-black mb-2">{service.title}</h6>
                  <p className=" text-sm font-light">
                    {service.description}
                  </p>
                </div>


                  <ul  className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm font-light flex items-center">
                        {/* <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" /> */}
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className="w-full mt-6 hover:scale-105 duration-300 text-lg "
                    size="sm"
                  >
                    Learn More
                  </button>
                  

              </div>
            );
          })}
        </div>
      </div>
    // </section>
  );
};

export default Services;