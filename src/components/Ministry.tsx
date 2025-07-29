import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import worshipImage from "@/assets/worship-healing.jpg";

const Ministry = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Ministry Focus
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            At Nabii Powerful Christian Church, we focus on the essential aspects of Christian life: 
            healing, transformation, and spiritual growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Healing & Transformation Image */}
          <div className="relative">
            <img 
              src={worshipImage} 
              alt="Worship and Healing Service" 
              className="w-full h-96 object-cover rounded-lg shadow-divine"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-lg"></div>
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <h3 className="font-playfair text-2xl font-bold mb-2">
                Experience God's Power
              </h3>
              <p className="font-inter opacity-90">
                Join us for powerful worship services where healing and miracles happen.
              </p>
            </div>
          </div>

          {/* Ministry Features */}
          <div className="space-y-6">
            <Card className="shadow-blessing">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-foreground flex items-center gap-3">
                  <span className="text-3xl">🩺</span>
                  Healing Ministry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-inter text-muted-foreground leading-relaxed mb-4">
                  We believe in the healing power of Jesus Christ. Our church has witnessed 
                  countless miracles - physical, emotional, and spiritual healings that 
                  demonstrate God's love and power.
                </p>
                <ul className="font-inter text-sm text-muted-foreground space-y-2">
                  <li>• Prayer for the sick and afflicted</li>
                  <li>• Deliverance from spiritual bondage</li>
                  <li>• Emotional and mental restoration</li>
                  <li>• Healing testimonies and celebrations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-blessing">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-foreground flex items-center gap-3">
                  <span className="text-3xl">🦋</span>
                  Life Transformation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-inter text-muted-foreground leading-relaxed mb-4">
                  Through the power of God's word and the Holy Spirit, we've seen lives 
                  completely transformed. From broken relationships to addiction recovery, 
                  God changes hearts and destinies.
                </p>
                <ul className="font-inter text-sm text-muted-foreground space-y-2">
                  <li>• Personal testimonies of change</li>
                  <li>• Freedom from addictions and bad habits</li>
                  <li>• Restoration of families and marriages</li>
                  <li>• New purpose and direction in life</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Times */}
        <div className="bg-gradient-divine p-8 rounded-lg text-primary-foreground text-center">
          <h3 className="font-playfair text-3xl font-bold mb-4">
            Join Us for Worship
          </h3>
          <p className="font-inter text-lg opacity-90 mb-6">
            Experience the power of God in our regular worship services
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className="font-inter font-semibold text-xl mb-2">Sunday Service</h4>
              <p className="opacity-80">9:00 AM - 12:00 PM</p>
            </div>
            <div>
              <h4 className="font-inter font-semibold text-xl mb-2">Prayer Meeting</h4>
              <p className="opacity-80">Wednesday 2:00 PM</p>
            </div>
            <div>
              <h4 className="font-inter font-semibold text-xl mb-2">Bible Study</h4>
              <p className="opacity-80">Friday 7:00 PM</p>
            </div>
          </div>
          <Button variant="secondary" size="lg" className="font-inter px-8">
            Plan Your Visit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Ministry;