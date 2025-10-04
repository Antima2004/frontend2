import { Button } from "@/components/ui/Button";
import { Menu } from "lucide-react";
import { useState } from "react";
import icon from "../assets/Group.svg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "About Us", "Our Services", "Pricing", "FAQ"];

  return (
    <nav className="w-full bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
              <img src={icon} alt="Icon" className="w-12 h-12 md:w-6 md:h-6" />

            <span className="text-base md:text-xl font-bold">COMPANY</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="default" className="shadow-[var(--shadow-button)]">
              Get A Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-secondary rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {item}
              </a>
            ))}
            <Button variant="default" className="w-full shadow-[var(--shadow-button)] mt-2">
              Get A Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;