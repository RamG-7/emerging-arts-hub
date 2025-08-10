import { featured, artists, works, byId } from "@/data/seed";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SpotlightHero = () => {
  const artist = byId.artist(featured.artistId)!;
  const spotlightWorks = featured.featuredWorkIds.map(id => byId.work(id)).filter(Boolean);

  return (
    <section aria-labelledby="weekly-spotlight" className="container">
      <Card className="overflow-hidden shadow-[var(--shadow-elevated)]">
        <CardHeader>
          <CardTitle id="weekly-spotlight" className="text-2xl">Weekly Spotlight</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img src={artist.avatarUrl} alt={`${artist.name} avatar`} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
              <div>
                <h3 className="text-xl font-semibold leading-tight">{artist.name}</h3>
                <p className="text-sm text-muted-foreground">{artist.mediums.join(" • ")}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{artist.bio}</p>
            <Button asChild>
              <Link to={`/artist/${artist.slug}`}>View Profile</Link>
            </Button>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {spotlightWorks.slice(0,3).map((wk) => (
              <Link key={wk!.id} to={`/work/${wk!.id}`} className="group block">
                <div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-border bg-muted">
                  {wk!.mediaUrl && (
                    <img src={wk!.mediaUrl} alt={wk!.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  )}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{wk!.title}</div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SpotlightHero;
