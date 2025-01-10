import { Link } from "react-router-dom";

export const Breadcrumb = () => {
  return (
    <div className="flex items-center gap-2 text-sm text-secondary">
      <Link to="/cryptocurrencies" className="hover:text-primary">
        Cryptocurrencies
      </Link>
      <span>»</span>
      <span className="text-secondary-foreground">Bitcoin</span>
    </div>
  );
};