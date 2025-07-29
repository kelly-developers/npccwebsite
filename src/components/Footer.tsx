import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Nabii Powerful Christian Church
            </h3>
            <p className="font-inter opacity-90 mb-4 leading-relaxed">
              A church dedicated to healing, transformation, and community service 
              in Mukuru Kwa Njenga, Nairobi.
            </p>
            <p className="font-inter opacity-80 text-sm">
              Led by Senior Bishop Isaiah Moturi
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="font-inter opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#ministry" className="font-inter opacity-80 hover:opacity-100 transition-opacity">
                  Our Ministry
                </a>
              </li>
              <li>
                <a href="#community" className="font-inter opacity-80 hover:opacity-100 transition-opacity">
                  Community Impact
                </a>
              </li>
              <li>
                <a href="#sermons" className="font-inter opacity-80 hover:opacity-100 transition-opacity">
                  Watch Sermons
                </a>
              </li>
              <li>
                <a href="#videos" className="font-inter opacity-80 hover:opacity-100 transition-opacity">
                  Short Videos
                </a>
              </li>
              <li>
                <a href="#contact" className="font-inter opacity-80 hover:opacity-100 transition-opacity">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-inter font-semibold text-lg mb-4">Service Times</h4>
            <div className="space-y-3">
              <div>
                <p className="font-inter font-medium">Sunday Service</p>
                <p className="font-inter opacity-80 text-sm">9:00 AM - 12:00 PM</p>
              </div>
              <div>
                <p className="font-inter font-medium">Thursday Prayers</p>
                <p className="font-inter opacity-80 text-sm">3:00 PM</p>
              </div>
              <div>
                <p className="font-inter font-medium">Saturday Prayers</p>
                <p className="font-inter opacity-80 text-sm">3:00 PM</p>
              </div>
              <div>
                <p className="font-inter font-medium">Bible Study</p>
                <p className="font-inter opacity-80 text-sm">Friday 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact & Connect */}
          <div>
            <h4 className="font-inter font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <div>
                <p className="font-inter font-medium">📍 Location</p>
                <p className="font-inter opacity-80 text-sm">
                  Mukuru Kwa Njenga<br />
                  Nairobi, Kenya
                </p>
              </div>
              <div>
                <p className="font-inter font-medium">📞 Contact</p>
                <p className="font-inter opacity-80 text-sm">
                  Senior Bishop Isaiah Moturi<br />
                  +254716816879
                </p>
              </div>
              <div>
                <p className="font-inter font-medium">📺 YouTube</p>
                <p className="font-inter opacity-80 text-sm">
                  Watch our sermons online
                </p>
              </div>
              <Button 
                variant="secondary" 
                className="mt-4 font-inter"
                onClick={() => window.open('https://www.youtube.com/@nabiipowerfulchristian', '_blank')}
              >
                Visit YouTube Channel
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
              <p className="font-inter opacity-80 text-sm">
                © 2024 Nabii Powerful Christian Church. All rights reserved.
              </p>
              <div className="flex items-center gap-2 opacity-70">
                <span className="font-inter text-xs">Developed by</span>
                <a 
                  href="https://kellynyachiro.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-inter text-xs text-secondary hover:text-secondary-glow transition-colors underline decoration-secondary hover:decoration-secondary-glow"
                >
                  Kelly Nyachiro
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="#privacy" 
                className="font-inter opacity-80 hover:opacity-100 text-sm transition-opacity"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="font-inter opacity-80 hover:opacity-100 text-sm transition-opacity"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;