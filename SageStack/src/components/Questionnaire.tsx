import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, ArrowRight, Sparkles } from 'lucide-react';

const Questionnaire = () => {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});

  const categories = [
    {
      id: 'saas',
      title: 'SaaS Development',
      subtitle: 'Software as a Service',
      description: 'Build scalable, cloud-based applications',
      color: 'primary'
    },
    {
      id: 'aiaas',
      title: 'AIaaS Solutions',
      subtitle: 'AI as a Service',
      description: 'Integrate artificial intelligence into your workflow',
      color: 'accent'
    },
    {
      id: 'qaas',
      title: 'QaaS Consulting',
      subtitle: 'Quantum as a Service',
      description: 'Explore next-generation quantum computing',
      color: 'secondary'
    }
  ];

  const questions = {
    saas: [
      {
        id: 'saas-1',
        question: 'What type of SaaS application do you need?',
        options: ['CRM System', 'Project Management', 'E-learning Platform', 'Analytics Dashboard', 'Custom Solution']
      },
      {
        id: 'saas-2',
        question: 'What is your expected user base?',
        options: ['1-100 users', '100-1K users', '1K-10K users', '10K+ users', 'Unsure']
      },
      {
        id: 'saas-3',
        question: 'Which integrations are important?',
        options: ['Payment Gateways', 'Third-party APIs', 'Social Login', 'Email Services', 'Analytics Tools']
      },
      {
        id: 'saas-4',
        question: 'What is your timeline?',
        options: ['1-3 months', '3-6 months', '6-12 months', '1+ years', 'Flexible']
      }
    ],
    aiaas: [
      {
        id: 'aiaas-1',
        question: 'Which AI capabilities interest you most?',
        options: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Recommendation Systems', 'Automated Decision Making']
      },
      {
        id: 'aiaas-2',
        question: 'What type of data will you be working with?',
        options: ['Text Documents', 'Images/Videos', 'Numerical Data', 'Audio Files', 'Sensor Data']
      },
      {
        id: 'aiaas-3',
        question: 'What is your primary use case?',
        options: ['Customer Support', 'Content Analysis', 'Quality Control', 'Fraud Detection', 'Personalization']
      },
      {
        id: 'aiaas-4',
        question: 'Do you have existing data?',
        options: ['Large dataset ready', 'Small dataset available', 'Data collection needed', 'Synthetic data acceptable', 'Unsure about data']
      }
    ],
    qaas: [
      {
        id: 'qaas-1',
        question: 'What quantum computing area interests you?',
        options: ['Optimization Problems', 'Cryptography & Security', 'Machine Learning', 'Scientific Simulation', 'Research & Development']
      },
      {
        id: 'qaas-2',
        question: 'What is your current quantum knowledge level?',
        options: ['Beginner', 'Some Understanding', 'Intermediate', 'Advanced', 'Expert']
      },
      {
        id: 'qaas-3',
        question: 'What is your primary goal?',
        options: ['Proof of Concept', 'Performance Improvement', 'Cost Reduction', 'Innovation Edge', 'Academic Research']
      },
      {
        id: 'qaas-4',
        question: 'What is your investment timeline?',
        options: ['Immediate (6 months)', 'Short-term (1-2 years)', 'Medium-term (3-5 years)', 'Long-term (5+ years)', 'Exploratory']
      }
    ]
  };

  const handleCategorySelect = (categoryId: string) => {
    setCurrentCategory(categoryId);
    if (!answers[categoryId]) {
      setAnswers(prev => ({ ...prev, [categoryId]: [] }));
    }
  };

  const handleAnswerToggle = (questionId: string, option: string) => {
    if (!currentCategory) return;
    
    setAnswers(prev => {
      const categoryAnswers = prev[currentCategory] || [];
      const existingIndex = categoryAnswers.findIndex(a => a.startsWith(questionId));
      
      if (existingIndex >= 0) {
        categoryAnswers[existingIndex] = `${questionId}: ${option}`;
      } else {
        categoryAnswers.push(`${questionId}: ${option}`);
      }
      
      return { ...prev, [currentCategory]: categoryAnswers };
    });
  };

  const getSelectedAnswer = (questionId: string) => {
    if (!currentCategory) return null;
    const categoryAnswers = answers[currentCategory] || [];
    const answer = categoryAnswers.find(a => a.startsWith(questionId));
    return answer ? answer.split(': ')[1] : null;
  };

  const resetQuestionnaire = () => {
    setCurrentCategory(null);
    setAnswers({});
  };

  const getCategoryColor = (color: string) => {
    switch (color) {
      case 'primary': return 'border-primary/30 hover:border-primary hover:bg-primary/10';
      case 'accent': return 'border-accent/30 hover:border-accent hover:bg-accent/10';
      case 'secondary': return 'border-secondary/30 hover:border-secondary hover:bg-secondary/10';
      default: return 'border-primary/30 hover:border-primary hover:bg-primary/10';
    }
  };

  if (!currentCategory) {
    return (
      <section className="py-20 px-6 bg-gradient-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-accent" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
                Personalized Assessment
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Answer a few questions to get personalized recommendations for your technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card 
                key={category.id}
                className={`glass cursor-pointer transition-all duration-500 hover:scale-105 hover:glow-primary ${getCategoryColor(category.color)}`}
                onClick={() => handleCategorySelect(category.id)}
              >
                <CardHeader className="text-center">
                  <Badge className={`w-fit mx-auto mb-4 bg-gradient-${category.color} text-white`}>
                    {category.subtitle}
                  </Badge>
                  <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-gradient-primary hover:scale-105 transition-transform duration-300"
                  >
                    Start Assessment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const currentQuestions = questions[currentCategory as keyof typeof questions];
  const category = categories.find(c => c.id === currentCategory)!;

  return (
    <section className="py-20 px-6 bg-gradient-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge className={`mb-4 bg-gradient-${category.color} text-white`}>
            {category.subtitle}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.title} Assessment</h2>
          <p className="text-muted-foreground">{category.description}</p>
        </div>

        <div className="space-y-8">
          {currentQuestions.map((q, index) => {
            const selectedAnswer = getSelectedAnswer(q.id);
            
            return (
              <Card key={q.id} className="glass">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <span className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {q.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {q.options.map((option) => {
                      const isSelected = selectedAnswer === option;
                      return (
                        <button
                          key={option}
                          onClick={() => handleAnswerToggle(q.id, option)}
                          className={`p-4 rounded-lg border text-left transition-all duration-300 flex items-center gap-3 ${
                            isSelected 
                              ? 'border-primary bg-primary/10 text-primary' 
                              : 'border-border hover:border-primary/50 hover:bg-primary/5'
                          }`}
                        >
                          {isSelected ? (
                            <CheckCircle className="w-5 h-5 text-primary" />
                          ) : (
                            <Circle className="w-5 h-5 text-muted-foreground" />
                          )}
                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
          <Button 
            variant="outline" 
            onClick={resetQuestionnaire}
            className="glass border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            Back to Categories
          </Button>
          <Button 
            className="bg-gradient-primary hover:scale-105 transition-transform duration-300 glow-primary"
            disabled={!answers[currentCategory] || answers[currentCategory].length < currentQuestions.length}
          >
            Get Recommendations
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Questionnaire;