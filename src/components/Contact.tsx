import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // BACKEND ENDPOINT: POST /api/contact/messages
      const response = await fetch('/api/contact/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          submittedAt: new Date().toISOString()
        })
      });

      if (response.ok) {
        // Create WhatsApp message as backup
        const whatsappMessage = `Hello, I'm ${formData.name}. ${formData.message}`;
        const whatsappUrl = `https://wa.me/254716816872?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        toast.success("Message sent! Redirecting to WhatsApp...");
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const handleCall = () => {
    window.location.href = "tel:+254716816872";
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Reach out to us for prayers, guidance, or to learn more about our ministry
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Get in Touch</CardTitle>
                <CardDescription className="font-inter">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-inter font-semibold">Senior Bishop Isaiah Moturi</p>
                    <p className="font-inter text-muted-foreground">+254716816872</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2 font-inter"
                      onClick={handleCall}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-inter font-semibold">Visit Us</p>
                    <p className="font-inter text-muted-foreground">
                      Mukuru Kwa Njenga<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-inter font-semibold">Service Times</p>
                    <div className="font-inter text-muted-foreground text-sm space-y-1">
                      <p>Sunday Service: 9:00 AM - 12:00 PM</p>
                      <p>Thursday Prayers: 3:00 PM</p>
                      <p>Saturday Prayers: 3:00 PM</p>
                      <p>Bible Study: Friday 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Send a Message</CardTitle>
              <CardDescription className="font-inter">
                Your message will be sent via WhatsApp to our church leadership
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="font-inter"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email (optional)"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="font-inter"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={5}
                    className="font-inter resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full font-inter"
                  disabled={!formData.name || !formData.message}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;