import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SpotlightHero from "@/components/home/SpotlightHero";
import { MediumChip } from "@/components/common/MediumChip";
import { Helmet } from "react-helmet-async";

const mediums = ["Photography","Videography","Music","Painting","Drawing","Books"] as const;

const Index = () => {
  return (
    <div className="space-y-12 animate-enter">
      <Helmet>
        <title>The Gallery — A stage for tomorrow’s artists</title>
        <meta name="description" content="Discover emerging artists across mediums. Explore works, follow updates, and support creators." />
        <link rel="canonical" href="/" />
      </Helmet>

      <header className="text-center pt-8">
        <h1 className="text-5xl sm:text-6xl font-heading tracking-tight">The Gallery</h1>
        <p className="mt-4 text-lg text-muted-foreground">A stage for tomorrow’s artists.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg">
            <Link to="/donate">Support Creators</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link to="/stream">Scroll the Feed</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/network">Discover Artists</Link>
          </Button>
        </div>
      </header>

      <SpotlightHero />

      <section aria-labelledby="browse-medium" className="container">
        <h2 id="browse-medium" className="text-2xl font-semibold mb-4">Browse by Medium</h2>
        <div className="flex flex-wrap gap-2">
          {mediums.map((m) => (
            <Link key={m} to={`/stream?medium=${encodeURIComponent(m)}`}>
              <MediumChip medium={m} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
