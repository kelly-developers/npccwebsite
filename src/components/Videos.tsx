import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play, ExternalLink } from "lucide-react";
import { useState } from "react";

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    );
    return match ? match[1] : "";
  };

  const shortVideos = [
    {
      id: 1,
      title: "Mchawi anayepinga masomo, ndoa, kazi, na biashara",
      description: "Anayesababisha magonjwa ya miguu, shinikizo la damu, kisukari, na aliyeuua mama yake aokoka",
      duration: "8:52",
      youtubeUrl: "https://www.youtube.com/watch?v=DVSK8W6TRsU",
    },
    {
      id: 2,
      title: "Ukombozi Kutoka roho za Ushago",
      description: "waliofungwa na roho za ushago waokoka na kupokea wokovu",
      duration: "25:34",
      youtubeUrl: "https://www.youtube.com/watch?v=QGKpDB7pw7s",
    },

    {
      id: 3,
      title: "Roho ya Kutoendelea Yaondolewa",
      description: "Shuhudia ukombozi kutoka roho ya kutoendelea na ushuhuda wa wokovu",
      duration: "23:46",
      youtubeUrl: "https://www.youtube.com/watch?v=njUxvnAhd_k",
    },
    // {
    //   id: 4,
    //   title: "Community Outreach",
    //   description: "Our work in Mukuru Kwa Njenga",
    //   duration: "25:54",
    //   youtubeUrl: "https://www.youtube.com/watch?v=iDSljV5Ve3U",
    // },
    // {
    //   id: 5,
    //   title: "Youth Ministry",
    //   description: "Empowering the next generation",
    //   duration: "3:45",
    //   youtubeUrl: "https://www.youtube.com/watch?v=iDSljV5Ve3U",
    // },
    // {
    //   id: 6,
    //   title: "Worship Moments",
    //   description: "Experience our powerful worship",
    //   duration: "2:50",
    //   youtubeUrl: "https://www.youtube.com/watch?v=NUHxKIt_FhA",
    // },
  ];












// const shortVideos = [
//   {
//     id: 1,
//     title: "Daily Prayer Inspiration",
//     youtubeUrl: "https://www.youtube.com/watch?v=DVSK8W6TRsU",
//   },
//   {
//     id: 2,
//     title: "Healing Testimonies",
//     
//   },
//   {
//     id: 3,
//     title: "Bishop's Message",
//     youtubeUrl: "",
//   },
//   {
//     id: 4,
//     title: "Community Outreach",
    
//   },
//   {
//     id: 5,
//     title: "Youth Ministry",
//     
//   },
//   {
//     id: 6,
//     title: "Worship Moments",
//     
//   },
// ];





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
          {shortVideos.map((video) => {
            const videoId = getYouTubeId(video.youtubeUrl);
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

            return (
              <Dialog key={video.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-md transition-all duration-300 border-border/50">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={thumbnailUrl}
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
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="font-inter"
            onClick={() =>
              window.open(
                "https://www.youtube.com/@nabiipowerfulchristianchur9592",
                "_blank"
              )
            }
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
