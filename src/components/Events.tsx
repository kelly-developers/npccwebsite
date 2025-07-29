import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Bell } from "lucide-react";
import { useEffect, useState } from "react";

const Events = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  const eventBanners = [
    {
      gradient: "bg-gradient-to-r from-primary via-primary-glow to-secondary",
      title: "Special Healing & Miracle Service"
    },
    {
      gradient: "bg-gradient-to-r from-secondary via-accent to-primary",
      title: "Night of Worship & Prayer"
    },
    {
      gradient: "bg-gradient-to-r from-primary/80 via-secondary to-primary-glow",
      title: "Community Outreach Service"
    }
  ];

  const mainEvent = {
    id: 1,
    title: "Special Healing & Miracle Service",
    description: "Join us for a powerful night of healing, deliverance, and supernatural breakthroughs. Bishop Isaiah Moturi will be ministering with special prayers for the sick and those seeking God's intervention.",
    date: "Sunday, July 3rd, 2025",
    time: "9:00 AM - 13:00 PM",
    location: "Mukuru Kwa Njenga Church Premises",
    type: "Special Event"
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % eventBanners.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [eventBanners.length]);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-8">
            Upcoming Events
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join us for these special events and regular services as we come together 
            in worship, prayer, and community service.
          </p>
        </div>

        {/* Main Event Banner */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            {/* Event Banner Image */}
            <div className="relative h-80 md:h-96 overflow-hidden group">
              {eventBanners.map((banner, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 ${banner.gradient} transition-all duration-1000 ease-in-out ${
                    index === currentBanner ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent transition-all duration-700 group-hover:from-black/40 group-hover:via-black/20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-16 w-24 h-24 bg-primary-glow/30 rounded-full blur-lg animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-500"></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
                <div className="text-center text-white p-8 max-w-4xl">
                  <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-lg font-medium backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
                    {mainEvent.type}
                  </Badge>
                  <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    {mainEvent.title}
                  </h3>
                  <p className="font-inter text-xl md:text-2xl opacity-95 font-medium">
                    {mainEvent.date} • {mainEvent.time}
                  </p>
                </div>
              </div>
            </div>
            
            <CardContent className="p-8">
              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                {mainEvent.description}
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-inter">{mainEvent.date}</span>
                </div>
                
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-inter">{mainEvent.time}</span>
                </div>
                
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-inter">{mainEvent.location}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="font-inter px-8 py-3 text-lg bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
                >
                  <Bell className="h-5 w-5 mr-2 animate-pulse" />
                  Set Reminder
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="font-inter px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all"
                >
                  Share Event
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="font-inter text-muted-foreground mb-4">
            Want to stay updated on all our events and activities?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/254716816872?text=Hello! I would like to receive updates about church events." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-inter"
            >
              Get Event Updates via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;