import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play, ExternalLink } from "lucide-react";
import { useState } from "react";

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  const shortVideos = [
    {
      id: 1,
      title: "Daily Prayer Inspiration",
      description: "Start your day with powerful prayer",
      thumbnail: "/placeholder.svg",
      duration: "2:30",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Healing Testimonies",
      description: "Witness God's healing power",
      thumbnail: "/placeholder.svg",
      duration: "3:15",
      youtubeUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0"
    },
    {
      id: 3,
      title: "Bishop's Message",
      description: "Weekly word from Bishop Isaiah",
      thumbnail: "/placeholder.svg",
      duration: "5:00",
      youtubeUrl: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
    },
    {
      id: 4,
      title: "Community Outreach",
      description: "Our work in Mukuru Kwa Njenga",
      thumbnail: "/placeholder.svg",
      duration: "4:20",
      youtubeUrl: "https://www.youtube.com/watch?v=oHg5SJYRHA0"
    },
    {
      id: 5,
      title: "Youth Ministry",
      description: "Empowering the next generation",
      thumbnail: "/placeholder.svg",
      duration: "3:45",
      youtubeUrl: "https://www.youtube.com/watch?v=ZZ5LpwO-An4"
    },
    {
      id: 6,
      title: "Worship Moments",
      description: "Experience our powerful worship",
      thumbnail: "/placeholder.svg",
      duration: "2:50",
      youtubeUrl: "https://www.youtube.com/watch?v=y6120QOlsfU"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Short Videos
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick inspirational videos from our church community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {shortVideos.map((video) => (
            <Dialog key={video.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer hover:shadow-md transition-all duration-300 border-border/50">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary rounded-full p-3">
                        <Play className="h-6 w-6 text-primary-foreground fill-current" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-inter">
                      {video.duration}
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="font-playfair text-lg group-hover:text-primary transition-colors">
                      {video.title}
                    </CardTitle>
                    <CardDescription className="font-inter text-sm">
                      {video.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeId(video.youtubeUrl)}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="font-inter"
            onClick={() => window.open('https://www.youtube.com/@nabiipowerfulchristian', '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View All Videos on YouTube
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Videos;