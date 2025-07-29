import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Sermons = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Watch Our Sermons
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the powerful word of God through our online sermons. Join thousands 
            of viewers worldwide who are blessed by Bishop Isaiah Moturi's teachings.
          </p>
        </div>

        {/* YouTube Channel Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden shadow-divine">
            <CardContent className="p-0">
              {/* YouTube Video Placeholder */}
              <div className="relative aspect-video bg-gradient-divine flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-6xl mb-4">📺</div>
                  <h3 className="font-playfair text-3xl font-bold mb-3">
                    Nabii Powerful Christian Church
                  </h3>
                  <p className="font-inter text-lg opacity-90 mb-6">
                    Visit our YouTube channel for live services and sermon archives
                  </p>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="font-inter px-8"
                    onClick={() => window.open('https://www.youtube.com/@nabiipowerfulchristian', '_blank')}
                  >
                    Watch on YouTube
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Sermons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-blessing hover:shadow-divine transition-all duration-300">
            <CardHeader>
              <div className="aspect-video bg-gradient-divine rounded-lg flex items-center justify-center mb-4">
                <div className="text-primary-foreground text-center">
                  <div className="text-4xl mb-2">🎥</div>
                  <p className="font-inter text-sm">Recent Sermon</p>
                </div>
              </div>
              <CardTitle className="font-playfair text-xl">
                The Power of Faith in Healing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-inter text-muted-foreground text-sm mb-4">
                Bishop Isaiah Moturi shares powerful insights on how faith activates 
                God's healing power in our lives.
              </p>
              <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                <span>Duration: 45 min</span>
                <span>Jan 15, 2024</span>
              </div>
              <Button 
                variant="outline" 
                className="w-full font-inter"
                onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
              >
                Watch Sermon
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-blessing hover:shadow-divine transition-all duration-300">
            <CardHeader>
              <div className="aspect-video bg-gradient-blessing rounded-lg flex items-center justify-center mb-4">
                <div className="text-secondary-foreground text-center">
                  <div className="text-4xl mb-2">🎥</div>
                  <p className="font-inter text-sm">Popular Sermon</p>
                </div>
              </div>
              <CardTitle className="font-playfair text-xl">
                Transformation Through Christ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-inter text-muted-foreground text-sm mb-4">
                A life-changing message about how Jesus transforms hearts, minds, 
                and circumstances for His glory.
              </p>
              <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                <span>Duration: 52 min</span>
                <span>Jan 8, 2024</span>
              </div>
              <Button 
                variant="outline" 
                className="w-full font-inter"
                onClick={() => window.open('https://www.youtube.com/watch?v=9bZkp7q19f0', '_blank')}
              >
                Watch Sermon
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-blessing hover:shadow-divine transition-all duration-300">
            <CardHeader>
              <div className="aspect-video bg-gradient-divine rounded-lg flex items-center justify-center mb-4">
                <div className="text-primary-foreground text-center">
                  <div className="text-4xl mb-2">🎥</div>
                  <p className="font-inter text-sm">Featured Sermon</p>
                </div>
              </div>
              <CardTitle className="font-playfair text-xl">
                Walking in Divine Purpose
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-inter text-muted-foreground text-sm mb-4">
                Discover God's unique plan for your life and how to walk boldly 
                in your divine calling and purpose.
              </p>
              <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                <span>Duration: 38 min</span>
                <span>Jan 1, 2024</span>
              </div>
              <Button 
                variant="outline" 
                className="w-full font-inter"
                onClick={() => window.open('https://www.youtube.com/watch?v=fJ9rUzIMcZQ', '_blank')}
              >
                Watch Sermon
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Live Services Schedule */}
        <div className="bg-gradient-divine p-8 rounded-lg text-primary-foreground text-center">
          <h3 className="font-playfair text-3xl font-bold mb-4">
            Join Our Live Services
          </h3>
          <p className="font-inter text-lg opacity-90 mb-6">
            Experience the power of God in real-time through our live streamed services
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <h4 className="font-inter font-semibold text-xl mb-2">Sunday Service</h4>
              <p className="opacity-80 mb-3">Every Sunday at 9:00 AM EAT</p>
              <p className="font-inter text-sm opacity-70">
                Join us for powerful worship, healing prayers, and life-transforming messages
              </p>
            </div>
            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <h4 className="font-inter font-semibold text-xl mb-2">Prayer Meeting</h4>
              <p className="opacity-80 mb-3">Every Wednesday at 6:00 PM EAT</p>
              <p className="font-inter text-sm opacity-70">
                Powerful intercession and prayer for healing, breakthrough, and miracles
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="font-inter px-8"
              onClick={() => window.open('https://www.youtube.com/@nabiipowerfulchristian?sub_confirmation=1', '_blank')}
            >
              Subscribe to Channel
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-inter px-8"
            >
              Set Reminder
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sermons;