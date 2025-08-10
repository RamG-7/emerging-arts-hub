import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const linkCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground transition-colors";

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-heading">The Gallery</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/stream" className={linkCls}>Stream</NavLink>
          <NavLink to="/network" className={linkCls}>Network</NavLink>
          <NavLink to="/donate" className={linkCls}>Donate</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
