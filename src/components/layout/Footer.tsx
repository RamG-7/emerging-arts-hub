import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t mt-12">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} The Gallery</p>
        <nav className="flex gap-4">
          <Link to="/stream" className="hover:text-foreground">Stream</Link>
          <Link to="/network" className="hover:text-foreground">Network</Link>
          <Link to="/donate" className="hover:text-foreground">Donate</Link>
          <a href="#" aria-disabled className="opacity-70">Instagram</a>
          <a href="#" aria-disabled className="opacity-70">TikTok</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
