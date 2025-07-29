import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import childrenEducationImage from "@/assets/children-education.jpg";
import communityServiceImage from "@/assets/community-service.jpg";

const CommunityImpact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Community Impact
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond spiritual transformation, we are committed to uplifting our community 
            through education, charity, and practical support for those in need.
          </p>
        </div>

        {/* Main Impact Areas */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Children's Education */}
          <Card className="overflow-hidden shadow-blessing">
            <div className="relative h-64">
              <img 
                src={childrenEducationImage} 
                alt="Children receiving educational support" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-playfair text-2xl font-bold">Education Support</h3>
              </div>
            </div>
            <CardContent className="p-8">
              <h4 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Empowering Through Education
              </h4>
              <p className="font-inter text-muted-foreground leading-relaxed mb-6">
                We believe education is key to breaking the cycle of poverty. Our church 
                actively supports children's education through sponsorships, book donations, 
                and educational resources.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📚</span>
                  <span className="font-inter text-foreground">Free books and learning materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  <span className="font-inter text-foreground">School fee sponsorships</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✏️</span>
                  <span className="font-inter text-foreground">School supplies for needy students</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💡</span>
                  <span className="font-inter text-foreground">Educational mentorship programs</span>
                </div>
              </div>
              <Button variant="divine" className="w-full font-inter">
                Support Education Initiative
              </Button>
            </CardContent>
          </Card>

          {/* Children's Homes */}
          <Card className="overflow-hidden shadow-blessing">
            <div className="relative h-64">
              <img 
                src={communityServiceImage} 
                alt="Community service at children's homes" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-playfair text-2xl font-bold">Children's Homes</h3>
              </div>
            </div>
            <CardContent className="p-8">
              <h4 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Caring for the Vulnerable
              </h4>
              <p className="font-inter text-muted-foreground leading-relaxed mb-6">
                Our heart breaks for children who lack basic necessities. We regularly 
                visit and support children's homes, providing not just material needs 
                but also love, care, and spiritual guidance.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🍽️</span>
                  <span className="font-inter text-foreground">Food and nutrition support</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">👕</span>
                  <span className="font-inter text-foreground">Clothing and basic necessities</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏠</span>
                  <span className="font-inter text-foreground">Facility improvements and maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">❤️</span>
                  <span className="font-inter text-foreground">Emotional support and mentorship</span>
                </div>
              </div>
              <Button variant="blessing" className="w-full font-inter">
                Join Our Outreach
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-blessing p-8 rounded-lg text-secondary-foreground">
          <h3 className="font-playfair text-3xl font-bold text-center mb-8">
            Our Community Impact in Numbers
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-playfair text-4xl font-bold mb-2">500+</div>
              <p className="font-inter text-sm">Children Sponsored</p>
            </div>
            <div>
              <div className="font-playfair text-4xl font-bold mb-2">1,200+</div>
              <p className="font-inter text-sm">Books Distributed</p>
            </div>
            <div>
              <div className="font-playfair text-4xl font-bold mb-2">15</div>
              <p className="font-inter text-sm">Children's Homes Supported</p>
            </div>
            <div>
              <div className="font-playfair text-4xl font-bold mb-2">5</div>
              <p className="font-inter text-sm">Years of Service</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
            Join Our Mission of Love
          </h3>
          <p className="font-inter text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether through donations, volunteering, or prayer support, you can be part 
            of transforming lives in our community. Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="divine" size="lg" className="font-inter px-8">
              Make a Donation
            </Button>
            <Button variant="outline" size="lg" className="font-inter px-8">
              Volunteer With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;