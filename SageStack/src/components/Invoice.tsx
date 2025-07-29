import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Calendar, FileText } from 'lucide-react';

const Invoice = () => {
  const invoiceData = {
    invoiceNumber: "INV-2024-001",
    date: new Date().toLocaleDateString(),
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    client: {
      name: "Client Name",
      address: "123 Business Street\nCity, State 12345\nclient@email.com"
    },
    services: [
      {
        category: "Agency Services",
        items: [
          { name: "Software Development", description: "Custom software solutions", price: 5000, quantity: 1 },
          { name: "Website/App (Basic)", description: "Basic web application", price: 3000, quantity: 1 },
          { name: "E-commerce (Medium)", description: "Medium complexity e-commerce platform", price: 8000, quantity: 1 },
          { name: "SaaS (Advanced)", description: "Advanced SaaS application", price: 15000, quantity: 1 },
          { name: "Customized Web/App", description: "Fully customized solution", price: 12000, quantity: 1 }
        ]
      },
      {
        category: "Artificial Intelligence",
        items: [
          { name: "Natural Language Processing", description: "NLP implementation", price: 6000, quantity: 1 },
          { name: "Computer Vision", description: "AI vision solutions", price: 7000, quantity: 1 },
          { name: "Audio Processing", description: "Audio AI implementation", price: 4000, quantity: 1 },
          { name: "Speech Recognition", description: "Speech-to-text solutions", price: 5000, quantity: 1 },
          { name: "Time Series Analysis", description: "Time series AI models", price: 6000, quantity: 1 },
          { name: "Multimodal AI", description: "Multi-input AI systems", price: 8000, quantity: 1 },
          { name: "Sensor Data Analytics", description: "IoT sensor data processing", price: 5500, quantity: 1 }
        ]
      },
      {
        category: "Quantum Computing (Future)",
        items: [
          { name: "Quantum Algorithm Development", description: "Next-gen quantum solutions", price: 20000, quantity: 1 },
          { name: "Quantum Optimization", description: "Quantum-powered optimization", price: 18000, quantity: 1 }
        ]
      },
      {
        category: "Website Features",
        items: [
          { name: "Landing Page Design", description: "Tech & futuristic design", price: 2000, quantity: 1 },
          { name: "Parallax Effects", description: "Advanced parallax animations", price: 1500, quantity: 1 },
          { name: "Interactive Questionnaires", description: "SaaS/AIaaS/QaaS assessments", price: 1000, quantity: 3 },
          { name: "Navigation System", description: "Dynamic navigation with scroll effects", price: 800, quantity: 1 },
          { name: "Footer & Contact", description: "Complete footer with contact info", price: 500, quantity: 1 }
        ]
      }
    ]
  };

  const calculateSubtotal = (items: any[]) => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const totalAmount = invoiceData.services.reduce((total, category) => 
    total + calculateSubtotal(category.items), 0
  );

  const tax = totalAmount * 0.1; // 10% tax
  const finalTotal = totalAmount + tax;

  return (
    <section id="invoice" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Project Invoice
          </h2>
          <p className="text-muted-foreground text-lg">
            Complete website breakdown and pricing
          </p>
        </div>

        <Card className="glass p-8">
          {/* Invoice Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                SageStackSol ( S³ )
              </h1>
              <p className="text-muted-foreground">
                From Code to Cognition
              </p>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold text-primary mb-2">INVOICE</h2>
              <p className="text-muted-foreground">#{invoiceData.invoiceNumber}</p>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Bill To:</h3>
              <div className="text-muted-foreground whitespace-pre-line">
                {invoiceData.client.address}
              </div>
            </div>
            <div className="text-right">
              <div className="space-y-2">
                <div className="flex justify-end items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Date: {invoiceData.date}</span>
                </div>
                <div className="flex justify-end items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Due: {invoiceData.dueDate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Breakdown */}
          <div className="space-y-8">
            {invoiceData.services.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-semibold text-primary mb-4 border-b border-border pb-2">
                  {category.category}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-foreground">Service</th>
                        <th className="text-left py-2 text-foreground">Description</th>
                        <th className="text-right py-2 text-foreground">Qty</th>
                        <th className="text-right py-2 text-foreground">Price</th>
                        <th className="text-right py-2 text-foreground">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item, itemIndex) => (
                        <tr key={itemIndex} className="border-b border-border/50">
                          <td className="py-3 text-foreground font-medium">{item.name}</td>
                          <td className="py-3 text-muted-foreground">{item.description}</td>
                          <td className="py-3 text-right text-foreground">{item.quantity}</td>
                          <td className="py-3 text-right text-foreground">${item.price.toLocaleString()}</td>
                          <td className="py-3 text-right text-foreground font-medium">
                            ${(item.price * item.quantity).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="text-right mt-2 text-muted-foreground">
                  Category Subtotal: ${calculateSubtotal(category.items).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          {/* Invoice Totals */}
          <div className="border-t border-border mt-8 pt-6">
            <div className="space-y-2 text-right max-w-sm ml-auto">
              <div className="flex justify-between text-foreground">
                <span>Subtotal:</span>
                <span>${totalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Tax (10%):</span>
                <span>${tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-primary border-t border-border pt-2">
                <span>Total:</span>
                <span>${finalTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Invoice Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end mt-8">
            <Button variant="outline" className="glass">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button className="bg-gradient-primary">
              Accept & Proceed
            </Button>
          </div>

          {/* Terms */}
          <div className="mt-8 text-sm text-muted-foreground">
            <h4 className="font-semibold text-foreground mb-2">Terms & Conditions:</h4>
            <p>Payment is due within 30 days of invoice date. Late payments may incur additional fees.</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Invoice;