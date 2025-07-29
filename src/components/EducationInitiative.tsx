import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Target,
  Building,
  Smartphone,
  DollarSign,
  Heart
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EducationInitiative = () => {
  const [selectedChild, setSelectedChild] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [sponsorName, setSponsorName] = useState("");
  const [message, setMessage] = useState("");
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const { toast } = useToast();

  // Sample children data - would come from backend
  const childrenInNeed = [
    {
      id: 1,
      name: "Sarah Wanjiku",
      age: 12,
      grade: "Class 6",
      story: "Dreams of becoming a doctor. Lives with grandmother.",
      monthlyNeed: 50,
      currentFunding: 30,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "John Kamau",
      age: 15,
      grade: "Form 2",
      story: "Loves mathematics and wants to study engineering.",
      monthlyNeed: 80,
      currentFunding: 20,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Grace Akinyi",
      age: 10,
      grade: "Class 4",
      story: "Excellent student who enjoys reading and writing.",
      monthlyNeed: 40,
      currentFunding: 35,
      image: "/placeholder.svg"
    }
  ];

  const predefinedAmounts = ["25", "50", "100", "200"];

  // BACKEND ENDPOINT: POST /api/education/sponsor
  const handleSponsorshipSubmit = async () => {
    if (!selectedChild || !amount || !paymentMethod) {
      toast({
        title: "Error",
        description: "Please select a child, amount, and payment method",
        variant: "destructive"
      });
      return;
    }

    try {
      const sponsorshipData = {
        childId: selectedChild,
        amount: parseFloat(amount),
        paymentMethod,
        sponsorName,
        message,
        submittedAt: new Date().toISOString()
      };

      const response = await fetch('/api/education/sponsor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sponsorshipData)
      });

      if (response.ok) {
        const result = await response.json();
        toast({
          title: "Sponsorship Initiated",
          description: result.message || "Your sponsorship has been recorded. Please complete the payment."
        });
        
        // Reset form
        setSelectedChild("");
        setAmount("");
        setPaymentMethod("");
        setSponsorName("");
        setMessage("");
        setShowPaymentDetails(false);
      } else {
        throw new Error('Failed to process sponsorship');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process sponsorship. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
    setShowPaymentDetails(true);
  };

  const selectedChildData = childrenInNeed.find(child => child.id.toString() === selectedChild);

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/5 to-primary/10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-8">
            Education Initiative
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Help us provide quality education to underprivileged children in our community. 
            Your support can change a life forever.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          <Card className="text-center p-6 border-primary/20">
            <div className="text-primary mb-4">
              <Users className="h-8 w-8 mx-auto" />
            </div>
            <h3 className="font-bold text-2xl">150+</h3>
            <p className="text-sm text-muted-foreground">Children Supported</p>
          </Card>
          
          <Card className="text-center p-6 border-primary/20">
            <div className="text-primary mb-4">
              <BookOpen className="h-8 w-8 mx-auto" />
            </div>
            <h3 className="font-bold text-2xl">12</h3>
            <p className="text-sm text-muted-foreground">Schools Partnered</p>
          </Card>
          
          <Card className="text-center p-6 border-primary/20">
            <div className="text-primary mb-4">
              <GraduationCap className="h-8 w-8 mx-auto" />
            </div>
            <h3 className="font-bold text-2xl">85%</h3>
            <p className="text-sm text-muted-foreground">Graduation Rate</p>
          </Card>
          
          <Card className="text-center p-6 border-primary/20">
            <div className="text-primary mb-4">
              <Target className="h-8 w-8 mx-auto" />
            </div>
            <h3 className="font-bold text-2xl">$50K</h3>
            <p className="text-sm text-muted-foreground">Raised This Year</p>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Children Selection */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Choose a Child to Support
                </CardTitle>
                <CardDescription>
                  Select a child whose education you'd like to sponsor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {childrenInNeed.map((child) => (
                    <Card 
                      key={child.id} 
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedChild === child.id.toString() ? 'border-primary bg-primary/5' : ''
                      }`}
                      onClick={() => setSelectedChild(child.id.toString())}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                            <GraduationCap className="h-8 w-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg">{child.name}, {child.age}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{child.grade} • {child.story}</p>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Monthly Need: ${child.monthlyNeed}</span>
                                <span>Funded: ${child.currentFunding}</span>
                              </div>
                              <Progress 
                                value={(child.currentFunding / child.monthlyNeed) * 100} 
                                className="h-2"
                              />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sponsorship Form */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Sponsorship Details
                </CardTitle>
                <CardDescription>
                  Choose your sponsorship amount and payment method
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Selected Child Info */}
                {selectedChildData && (
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2">Supporting: {selectedChildData.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Monthly need: ${selectedChildData.monthlyNeed} • 
                      Currently funded: ${selectedChildData.currentFunding}
                    </p>
                  </div>
                )}

                {/* Amount Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Sponsorship Amount ($)</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {predefinedAmounts.map((amt) => (
                      <Button
                        key={amt}
                        variant={amount === amt ? "default" : "outline"}
                        className="h-12 text-lg"
                        onClick={() => setAmount(amt)}
                      >
                        ${amt}
                      </Button>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="custom-amount">Custom Amount</Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter custom amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="text-lg h-12"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Payment Method</Label>
                  <RadioGroup value={paymentMethod} onValueChange={handlePaymentMethodChange}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50">
                      <RadioGroupItem value="bank" id="bank" />
                      <Label htmlFor="bank" className="flex items-center space-x-2 cursor-pointer">
                        <Building className="h-5 w-5" />
                        <span>Bank Transfer</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50">
                      <RadioGroupItem value="phone" id="phone" />
                      <Label htmlFor="phone" className="flex items-center space-x-2 cursor-pointer">
                        <Smartphone className="h-5 w-5" />
                        <span>Mobile Payment</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Payment Details */}
                {showPaymentDetails && paymentMethod === 'bank' && (
                  <Card className="p-4 bg-muted/50">
                    <h4 className="font-semibold mb-2">Bank Transfer Details</h4>
                    <div className="text-sm space-y-1">
                      <p><strong>Bank:</strong> Equity Bank</p>
                      <p><strong>Account:</strong> 1234567890</p>
                      <p><strong>Name:</strong> Church Education Fund</p>
                    </div>
                  </Card>
                )}

                {showPaymentDetails && paymentMethod === 'phone' && (
                  <Card className="p-4 bg-muted/50">
                    <h4 className="font-semibold mb-2">Mobile Payment Details</h4>
                    <div className="text-sm space-y-1">
                      <p><strong>M-Pesa:</strong> 254716816872</p>
                      <p><strong>Reference:</strong> Education Fund</p>
                    </div>
                  </Card>
                )}

                {/* Sponsor Information */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="sponsor-name">Your Name (Optional)</Label>
                    <Input
                      id="sponsor-name"
                      placeholder="Enter your name"
                      value={sponsorName}
                      onChange={(e) => setSponsorName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="sponsor-message">Message to Child (Optional)</Label>
                    <Textarea
                      id="sponsor-message"
                      placeholder="Write an encouraging message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  onClick={handleSponsorshipSubmit}
                  className="w-full h-14 text-lg bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary"
                  disabled={!selectedChild || !amount || !paymentMethod}
                >
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Sponsor ${amount || '0'} for {selectedChildData?.name || 'Selected Child'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Stories */}
        <div className="mt-20">
          <h3 className="font-playfair text-3xl font-bold text-primary text-center mb-12">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold">Mary Chepkemoi</h4>
                <p className="text-sm text-muted-foreground">Class of 2023</p>
              </div>
              <p className="text-sm text-center">
                "Thanks to the church's education support, I graduated with honors and am now studying medicine at university."
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold">David Ochieng</h4>
                <p className="text-sm text-muted-foreground">Class of 2022</p>
              </div>
              <p className="text-sm text-center">
                "The education initiative gave me hope when I had none. I'm now an engineer helping build my community."
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold">Agnes Wanjiru</h4>
                <p className="text-sm text-muted-foreground">Class of 2021</p>
              </div>
              <p className="text-sm text-center">
                "Education changed my family's future. I'm now a teacher, giving back to the community that supported me."
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationInitiative;