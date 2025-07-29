import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Heart, CreditCard, Building, Smartphone, DollarSign, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Donations = () => {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [bankDetails, setBankDetails] = useState({
    bank: "",
    accountNumber: "",
    accountName: ""
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [donorName, setDonorName] = useState("");
  const [message, setMessage] = useState("");
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [availableBanks, setAvailableBanks] = useState([]);
  const [availablePhoneNumbers, setAvailablePhoneNumbers] = useState([]);
  const { toast } = useToast();

  const predefinedAmounts = ["10", "25", "50", "100", "250", "500"];

  // BACKEND ENDPOINT: GET /api/donations/payment-options
  useEffect(() => {
    const fetchPaymentOptions = async () => {
      try {
        const response = await fetch('/api/donations/payment-options');
        const data = await response.json();
        setAvailableBanks(data.banks || []);
        setAvailablePhoneNumbers(data.phoneNumbers || []);
      } catch (error) {
        console.error('Failed to fetch payment options:', error);
      }
    };
    fetchPaymentOptions();
  }, []);

  const handleAmountSelect = (selectedAmount: string) => {
    setAmount(selectedAmount);
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setAmount("");
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
    setShowPaymentDetails(true);
  };

  // BACKEND ENDPOINT: POST /api/donations/process
  const handleDonationSubmit = async () => {
    const donationAmount = amount || customAmount;
    
    if (!donationAmount || !paymentMethod) {
      toast({
        title: "Error",
        description: "Please select an amount and payment method",
        variant: "destructive"
      });
      return;
    }

    try {
      const donationData = {
        amount: parseFloat(donationAmount),
        paymentMethod,
        donorName,
        message,
        submittedAt: new Date().toISOString(),
        ...(paymentMethod === 'bank' && { bankDetails }),
        ...(paymentMethod === 'phone' && { phoneNumber })
      };

      const response = await fetch('/api/donations/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData)
      });

      if (response.ok) {
        const result = await response.json();
        toast({
          title: "Donation Initiated",
          description: result.message || "Your donation has been recorded. Please complete the payment using the provided details."
        });
        
        // Reset form
        setAmount("");
        setCustomAmount("");
        setPaymentMethod("");
        setDonorName("");
        setMessage("");
        setShowPaymentDetails(false);
      } else {
        throw new Error('Failed to process donation');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process donation. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-8">
            Make a Donation
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Your generous contributions help us continue our ministry, support our community, 
            and spread God's love to those in need.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-primary/20">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="font-playfair text-3xl">Support Our Ministry</CardTitle>
              <CardDescription className="font-inter text-lg">
                Choose your donation amount and preferred payment method
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Amount Selection */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Donation Amount ($)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {predefinedAmounts.map((amt) => (
                    <Button
                      key={amt}
                      variant={amount === amt ? "default" : "outline"}
                      className="h-12 text-lg"
                      onClick={() => handleAmountSelect(amt)}
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
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    className="text-lg h-12"
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
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
                      <span>Mobile Payment (M-Pesa/Airtel Money)</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Payment Details */}
              {showPaymentDetails && paymentMethod === 'bank' && (
                <Card className="p-6 bg-muted/50">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Bank Transfer Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="bank-select">Select Bank</Label>
                      <Select value={bankDetails.bank} onValueChange={(value) => setBankDetails({...bankDetails, bank: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a bank" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableBanks.length > 0 ? (
                            availableBanks.map((bank: any) => (
                              <SelectItem key={bank.id} value={bank.name}>
                                {bank.name} - {bank.accountNumber}
                              </SelectItem>
                            ))
                          ) : (
                            <>
                              <SelectItem value="equity">Equity Bank - 1234567890</SelectItem>
                              <SelectItem value="kcb">KCB Bank - 0987654321</SelectItem>
                              <SelectItem value="cooperative">Co-operative Bank - 1122334455</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {bankDetails.bank && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Transfer Instructions:</h4>
                        <ol className="text-sm text-green-700 space-y-1">
                          <li>1. Use the account details above for your bank transfer</li>
                          <li>2. Include your name and "Church Donation" in the transfer reference</li>
                          <li>3. Send a screenshot of the transfer to +254716816872 via WhatsApp</li>
                        </ol>
                      </div>
                    )}
                  </div>
                </Card>
              )}

              {showPaymentDetails && paymentMethod === 'phone' && (
                <Card className="p-6 bg-muted/50">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Smartphone className="h-5 w-5" />
                    Mobile Payment Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="phone-select">Select Payment Number</Label>
                      <Select value={phoneNumber} onValueChange={setPhoneNumber}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          {availablePhoneNumbers.length > 0 ? (
                            availablePhoneNumbers.map((phone: any) => (
                              <SelectItem key={phone.id} value={phone.number}>
                                {phone.provider} - {phone.number}
                              </SelectItem>
                            ))
                          ) : (
                            <>
                              <SelectItem value="mpesa-254716816872">M-Pesa - 254716816872</SelectItem>
                              <SelectItem value="airtel-254716816872">Airtel Money - 254716816872</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {phoneNumber && (
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Payment Instructions:</h4>
                        <ol className="text-sm text-blue-700 space-y-1">
                          <li>1. Go to your mobile money app</li>
                          <li>2. Send money to the number above</li>
                          <li>3. Use "Church Donation" as the reason</li>
                          <li>4. Send confirmation SMS to +254716816872</li>
                        </ol>
                      </div>
                    )}
                  </div>
                </Card>
              )}

              {/* Donor Information */}
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="donor-name">Your Name (Optional)</Label>
                    <Input
                      id="donor-name"
                      placeholder="Enter your name"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="donation-message">Message (Optional)</Label>
                  <Textarea
                    id="donation-message"
                    placeholder="Add a personal message with your donation"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                onClick={handleDonationSubmit}
                className="w-full h-14 text-lg bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary"
                disabled={!amount && !customAmount || !paymentMethod}
              >
                <DollarSign className="h-5 w-5 mr-2" />
                Proceed with Donation ${amount || customAmount || '0'}
              </Button>

              {/* Security Notice */}
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4" />
                  <span>Your donation is secure and will be handled with care</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Section */}
        <div className="mt-20 text-center">
          <h3 className="font-playfair text-3xl font-bold text-primary mb-8">Your Impact</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-primary/20">
              <div className="text-primary mb-4">
                <Heart className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Community Support</h4>
              <p className="text-sm text-muted-foreground">
                Help provide food, shelter, and care for families in need
              </p>
            </Card>
            <Card className="p-6 border-primary/20">
              <div className="text-primary mb-4">
                <Building className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Church Ministry</h4>
              <p className="text-sm text-muted-foreground">
                Support our worship services, programs, and outreach activities
              </p>
            </Card>
            <Card className="p-6 border-primary/20">
              <div className="text-primary mb-4">
                <DollarSign className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Education Initiative</h4>
              <p className="text-sm text-muted-foreground">
                Fund educational programs and scholarships for underprivileged children
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;