import { Card, CardContent } from "@/components/ui/Card";
import serviceIcon1 from "../assets/Group 90.png";
import serviceIcon2 from "../assets/g1.png";
import serviceIcon3 from "../assets/Group 92.png";
import serviceIcon4 from "../assets/g1 (1).png";




const Services = () => {
  const services = [
    {
      title: "A Resume Format That Gets You Interviews",
      description: "Get a professionally written resume that speaks directly to the role you're applying for, so recruiters choose you.",
      image: serviceIcon1,
    },
    {
      title: "A Cover Letter Style That Stands Out Strong",
      description: "Stand out with a cover letter that speaks directly to the role you're applying for and reflects your strengths.",
      image: serviceIcon2,
    },
    {
      title: "A LinkedIn Profile That Works For You",
      description: "2025 is the year when recruiters are searching for talent on LinkedIn. Let us help you create a standout profile that attracts opportunities.",
      image: serviceIcon3,
    },
    {
      title: "An Interview Strategy That Builds Confidence",
      description: "Walk into any interview prepared, confident, and ready to impress. HR professionals will be satisfied with your responses and they won't feel like you're memorized.",
      image: serviceIcon4,
    },
  ];

  return (
   <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            What You Get
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            You're Not Just <span className="text-primary">Another Applicant</span> And Your<br className="hidden md:block" />
            Resume Shouldn't Look Like One
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow overflow-hidden">
              {/* Top Square Section - Image and Title */}
              <div className="bg-muted/30 p-6 flex flex-col items-center justify-center aspect-square">
                <div className="flex justify-center mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg leading-tight text-center p-10">
                  {service.title}
                </h3>
              </div>
              
              {/* Bottom Section - Description */}
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;