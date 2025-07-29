import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import youtubeChannelImage from "@/assets/youtubechannelpart.jpg"; 

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
      <div
        className="relative aspect-video bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${youtubeChannelImage})`,
        }}
      >
        <div className="bg-black/60 w-full h-full absolute top-0 left-0 z-0"></div>
        <div className="text-center text-white z-10 p-6">
          <p className="font-inter text-lg opacity-90 mb-6">
            Visit our YouTube channel for live services and Sermons
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="font-inter px-8"
            onClick={() =>
              window.open(
                "https://www.youtube.com/@nabiipowerfulchristianchur9592",
                "_blank"
              )
            }
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
          {[
            {
              title: "Ujasiri wa kusimama kwa ajili ya haki",
              description:
                "Bishop Isaiah Moturi delivers a powerful message on the courage to stand for truth and justice. Through bold faith and unwavering conviction, he reveals how standing up for righteousness activates divine healing, breakthrough, and restoration in our lives.",
              videoId: "3rcoBTQZPNA",
              date: "July 27, 2025",
              tag: "Recent Sermon",
            },
            {
              title: "Mungu anatoa vipaji kulingana na matendo",
              description:
                "This message explores how God gives gifts based on our actions and faithfulness. Bishop teaches that our obedience and service open doors for divine empowerment and spiritual gifts.",
              videoId: "xxhaDvQVT-A",
              
              date: "July 27, 2025",
              tag: "Popular Sermon",
            },
            {
              title: "Kutumaini Mungu",
              description:
                "In this inspiring message, Bishop Easter encourages believers to place their full trust in God, even in uncertain times. Discover the power of unwavering faith and how God's promises never fail those who rely on Him.",
              videoId: "5oSnpv9UO9Y",
              
              date: "July 20, 2025",
              tag: "Featured Sermon",
            },
          ].map((sermon, index) => (
            <Card
              key={index}
              className="shadow-blessing hover:shadow-divine transition-all duration-300"
            >
              <CardHeader>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${sermon.videoId}`}
                    title={sermon.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <CardTitle className="font-playfair text-xl">
                  {sermon.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-inter text-muted-foreground text-sm mb-4">
                  {sermon.description}
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                  
                  <span>{sermon.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
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