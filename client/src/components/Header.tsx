import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  variant?: "default" | "transparent";
}

export function Header({ variant = "default" }: HeaderProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/investigations", label: "Investigations" },
    { href: "/sports-analysis", label: "Sports Analysis" },
    { href: "/scam-alerts", label: "Scam Alerts" },
    { href: "/verified-sites", label: "Verified Sites" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className={`border-b border-gray-200 bg-white sticky top-0 z-50 ${variant === "transparent" ? "bg-white/95 backdrop-blur-sm" : ""}`}>
      <div className="container flex h-16 md:h-20 items-center justify-between px-4">
        <div className="flex items-center gap-4 md:gap-8">
          <Link href="/">
            <img 
              src="/images/logo_dark.png" 
              alt="Fairplay Gaming Commission" 
              className="h-8 md:h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-sans font-bold text-gray-800 uppercase tracking-wider">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`hover:text-red-600 transition-colors relative py-2 ${
                  isActive(item.href) 
                    ? "text-red-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-600" 
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="font-sans hover:bg-gray-50">
            Subscribe
          </Button>
          <Button size="sm" className="bg-black text-white hover:bg-gray-800 font-sans">
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className={`block px-4 py-3 rounded-lg font-sans font-bold uppercase tracking-wider text-sm ${
                  isActive(item.href) 
                    ? "bg-red-50 text-red-600" 
                    : "text-gray-800 hover:bg-gray-50"
                }`}>
                  {item.label}
                </div>
              </Link>
            ))}
            <div className="pt-4 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 font-sans">
                Subscribe
              </Button>
              <Button size="sm" className="flex-1 bg-black text-white hover:bg-gray-800 font-sans">
                Login
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
