import { Share2, Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Work } from "@/data/types";
import { byId } from "@/data/seed";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const WorkCard = ({ work }: { work: Work }) => {
  const artist = byId.artist(work.artistId)!;
  const [likes, setLikes] = useState(work.likes);

  const share = async () => {
    const url = `${window.location.origin}/work/${work.id}`;
    try {
      await navigator.clipboard.writeText(url);
      toast({ title: "Link copied", description: "Share it with your friends." });
    } catch {
      toast({ title: "Copy failed", description: url });
    }
  };

  return (
    <article className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
      <Link to={`/artist/${artist.slug}`} className="flex items-center gap-3 px-4 py-3">
        <img src={artist.avatarUrl} alt={`${artist.name} avatar`} className="h-8 w-8 rounded-full object-cover" loading="lazy" />
        <div className="text-sm">
          <div className="font-medium leading-tight">{artist.name}</div>
          <div className="text-muted-foreground text-xs">{work.title}</div>
        </div>
        <div className="ml-auto"><Badge>{work.medium}</Badge></div>
      </Link>

      <div className="bg-muted">
        {work.type === 'image' && work.mediaUrl && (
          <img src={work.mediaUrl} alt={work.title} className="w-full object-cover" loading="lazy" />
        )}
        {work.type === 'video' && work.mediaUrl && (
          <img src={work.mediaUrl} alt={`${work.title} (video thumbnail)`} className="w-full object-cover" loading="lazy" />
        )}
        {work.type === 'audio' && (
          <div className="p-6 flex items-center gap-4">
            {work.mediaUrl && <img src={work.mediaUrl} alt={`${work.title} cover`} className="h-16 w-16 rounded object-cover" loading="lazy" />}
            <div>
              <div className="font-medium">{work.title}</div>
              <div className="text-xs text-muted-foreground">30s snippet (demo)</div>
            </div>
          </div>
        )}
        {work.type === 'text' && (
          <div className="p-6">
            {work.mediaUrl && <img src={work.mediaUrl} alt={`${work.title} cover`} className="h-32 w-24 object-cover float-left mr-4 rounded" loading="lazy" />}
            <div className="font-medium mb-2">{work.title}</div>
            <p className="text-sm text-muted-foreground line-clamp-4">{work.textExcerpt}</p>
          </div>
        )}
      </div>

      <div className="px-4 py-3 flex items-center gap-4 text-sm">
        <button className="flex items-center gap-2 hover:text-primary" onClick={() => setLikes((v)=>v+1)} aria-label="Like">
          <Heart className="h-4 w-4" /> {likes}
        </button>
        <button className="flex items-center gap-2 hover:text-primary" onClick={() => toast({ title: "Comments", description: "Coming soon" })} aria-label="Comments">
          <MessageCircle className="h-4 w-4" /> {work.comments}
        </button>
        <button className="ml-auto flex items-center gap-2 hover:text-primary" onClick={share} aria-label="Share">
          <Share2 className="h-4 w-4" /> Share
        </button>
      </div>
    </article>
  );
};

export default WorkCard;
