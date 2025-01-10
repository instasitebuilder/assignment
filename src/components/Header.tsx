import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          KoinX
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/crypto-taxes" className="text-secondary-foreground font-semibold">
            Crypto Taxes
          </Link>
          <Link to="/free-tools" className="text-secondary-foreground font-semibold">
            Free Tools
          </Link>
          <Link to="/resource-center" className="text-secondary-foreground font-semibold">
            Resource Center
          </Link>
          <Link
            to="/get-started"
            className="bg-primary text-white px-6 py-2 rounded-lg font-semibold"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};