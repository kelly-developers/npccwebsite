import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import bishopImage from "@/assets/bishop-isaiah.jpg";
import childrenImage from "@/assets/children-education.jpg";
import worshipImage from "@/assets/worship-healing.jpg";
import youthImage from "@/assets/youth.jpg";
import seniorImage from "@/assets/senior.jpg";

const About = () => {
  const [currentBishopImage, setCurrentBishopImage] = useState(0);
  
  const bishopImages = [
    { src: bishopImage, alt: "Senior Bishop Isaiah Moturi" },
    { src: childrenImage, alt: "Bishop with Children Ministry" },
    { src: worshipImage, alt: "Bishop During Worship" },
    { src: youthImage, alt: "youth image" },
    { src: seniorImage, alt: "senior image" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBishopImage((prev) => (prev + 1) % bishopImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [bishopImages.length]);
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Our Church
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Nabii Powerful Christian Church is a beacon of hope in Mukuru Kwa Njenga, 
            where miracles happen and lives are transformed through faith.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bishop Section */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden shadow-divine">
              <CardContent className="p-0">
                <div className="relative w-full h-96 overflow-hidden">
                  {bishopImages.map((image, index) => (
                    <img 
                      key={index}
                      src={image.src} 
                      alt={image.alt} 
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                        index === currentBishopImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    />
                  ))}
                </div>
                <div className="p-8 bg-gradient-divine text-primary-foreground">
                  <h3 className="font-playfair text-3xl font-bold mb-3">
                    Senior Bishop Isaiah Moturi
                  </h3>
                  <p className="font-inter text-lg opacity-90 mb-2">
                    Spiritual Leader & Visionary
                  </p>
                  <p className="font-inter text-base opacity-90 mb-4">
                    Together with Bishop Ester
                  </p>
                  <p className="font-inter text-base opacity-80 leading-relaxed">
                    With decades of ministry experience, Bishop Moturi leads our church 
                    with wisdom, compassion, and unwavering faith. Under his guidance, 
                    thousands have experienced healing, deliverance, and spiritual transformation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Church Mission */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                To be instruments of God's healing power, bringing transformation to individuals, 
                families, and communities. We believe in the supernatural power of God to heal, 
                deliver, and restore lives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-blessing">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">✨</div>
                  <h4 className="font-inter font-semibold text-lg text-foreground mb-2">
                    Healing Ministry
                  </h4>
                  <p className="font-inter text-muted-foreground">
                    Witnessing miraculous healings and divine interventions in our services.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-blessing">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">🙏</div>
                  <h4 className="font-inter font-semibold text-lg text-foreground mb-2">
                    Transformation
                  </h4>
                  <p className="font-inter text-muted-foreground">
                    Lives changed through the power of prayer, worship, and God's word.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-blessing">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">❤️</div>
                  <h4 className="font-inter font-semibold text-lg text-foreground mb-2">
                    Community Love
                  </h4>
                  <p className="font-inter text-muted-foreground">
                    Building strong bonds of fellowship and support among believers.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-blessing">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">📖</div>
                  <h4 className="font-inter font-semibold text-lg text-foreground mb-2">
                    Biblical Teaching
                  </h4>
                  <p className="font-inter text-muted-foreground">
                    Sound doctrine and practical wisdom from God's word for daily living.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;