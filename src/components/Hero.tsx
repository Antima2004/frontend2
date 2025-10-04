import { Button } from "@/components/ui/Button";
import heroImage from "@/assets/hero.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))]">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      {/* Decorative Circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-white/20 blur-3xl" />
      
      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Your Resume{" "}
              <span className="text-primary">Deserves A Yes</span>{" "}
              Let's Make It Happen
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-foreground/80 max-w-xl leading-relaxed">
              If Your Resume Isn't Getting Responses, It's Time For An Upgrade. 
              Get An ATS-Optimized Resume Crafted By HR Experts To Help You 
              Land More Interviews. Our Resumes Are Designed To Get You Past 
              The Bots And In Front Of The Right Person.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button variant="outline" size="lg" className="text-sm md:text-base w-full sm:w-auto">
                RESUME PACKAGES
              </Button>
              <Button variant="default" size="lg" className="text-sm md:text-base shadow-[var(--shadow-button)] w-full sm:w-auto">
                CONTACT US
              </Button>
            </div>
          </div>
          
          {/* Right Content - Image with overlaid Stats */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img 
                src={heroImage} 
                alt="Professional woman holding folders" 
                className="w-full h-auto object-contain"
              />
              
              {/* Stats Overlays */}
              <div className="absolute top-1/4 left-4 bg-background/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="text-3xl sm:text-4xl font-bold text-primary">4.9</div>
                  <div>
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs font-medium text-muted-foreground leading-tight">
                      Instructor Rating
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 -right-8 lg:right-4 bg-background/95 backdrop-blur rounded-xl p-4 shadow-lg flex items-center gap-3">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">260+</div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Resume Created
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;