import { Artist } from "@/data/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ArtistCard = ({ artist, onSupport }: { artist: Artist; onSupport?: (a: Artist) => void }) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardHeader className="p-0">
        <div className="h-32 w-full bg-muted/50">
          {artist.coverUrl && (
            <img src={artist.coverUrl} alt={`${artist.name} cover`} className="h-32 w-full object-cover" loading="lazy" />
          )}
        </div>
        <div className="-mt-6 px-4 flex items-end gap-3">
          <img src={artist.avatarUrl} alt={`${artist.name} avatar`} className="h-12 w-12 rounded-full ring-2 ring-background object-cover" loading="lazy" />
          <div>
            <h3 className="font-semibold leading-tight">{artist.name}</h3>
            <p className="text-xs text-muted-foreground">{artist.mediums.join(" • ")}{artist.location ? ` • ${artist.location}`:""}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-3 flex-1 flex flex-col gap-3">
        <p className="text-sm text-muted-foreground line-clamp-3">{artist.bio}</p>
        <div className="mt-auto flex gap-2">
          <Button asChild variant="secondary" className="flex-1"><Link to={`/artist/${artist.slug}`}>View</Link></Button>
          <Button className="flex-1" onClick={() => onSupport?.(artist)}>Support</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtistCard;
